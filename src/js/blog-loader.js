// Global Route: Blog Loader
// Dynamically loads and displays blog posts from markdown files

class BlogLoader {
  constructor() {
    this.posts = [];
    this.filteredPosts = [];
    this.currentFilter = 'all';
    this.postsPerPage = 6;
    this.currentPage = 1;
    this.searchIndex = null;
    this.init();
  }

  async init() {
    await this.loadBlogPosts();
    this.setupEventListeners();
    this.renderFeaturedPost();
    this.renderPosts();
    this.initializeSearch();
  }

  // Load blog posts data
  async loadBlogPosts() {
    try {
      const response = await fetch('/data/blog-posts.json');
      this.posts = await response.json();
      this.filteredPosts = [...this.posts];
      console.log(`✅ Loaded ${this.posts.length} blog posts`);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      this.showError('Unable to load blog posts. Please try again later.');
    }
  }

  // Setup event listeners
  setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-filter').forEach(filter => {
      filter.addEventListener('click', (e) => this.handleCategoryFilter(e));
    });

    // Search
    const searchInput = document.getElementById('blog-search-input');
    const searchBtn = document.querySelector('.blog-search-btn');
    
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e));
      searchBtn?.addEventListener('click', () => this.handleSearch({ target: searchInput }));
    }

    // Load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMorePosts());
    }

    // Newsletter form
    const newsletterForm = document.getElementById('blog-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSignup(e));
    }
  }

  // Handle category filter
  handleCategoryFilter(e) {
    e.preventDefault();
    const category = e.target.getAttribute('data-category');
    
    // Update active state
    document.querySelectorAll('.category-filter').forEach(f => {
      f.classList.remove('active');
    });
    e.target.classList.add('active');

    // Filter posts
    this.currentFilter = category;
    this.currentPage = 1;

    if (category === 'all') {
      this.filteredPosts = [...this.posts];
    } else {
      this.filteredPosts = this.posts.filter(post => post.category === category);
    }

    this.renderFeaturedPost();
    this.renderPosts();
  }

  // Handle search
  handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    this.currentPage = 1;

    if (query === '') {
      this.filteredPosts = this.currentFilter === 'all' 
        ? [...this.posts] 
        : this.posts.filter(post => post.category === this.currentFilter);
    } else {
      this.filteredPosts = this.posts.filter(post => {
        const searchableText = `${post.title} ${post.excerpt} ${post.keywords.join(' ')}`.toLowerCase();
        return searchableText.includes(query);
      });
    }

    this.renderFeaturedPost();
    this.renderPosts();
  }

  // Initialize search (Fuse.js)
  initializeSearch() {
    if (typeof Fuse === 'undefined') return;

    const fuseOptions = {
      keys: ['title', 'excerpt', 'keywords', 'category'],
      threshold: 0.3,
      minMatchCharLength: 2
    };

    this.searchIndex = new Fuse(this.posts, fuseOptions);
  }

  // Render featured post
  renderFeaturedPost() {
    const container = document.getElementById('featured-post-container');
    if (!container || this.filteredPosts.length === 0) return;

    const featuredPost = this.filteredPosts[0];
    const readTime = this.calculateReadTime(featuredPost.content);

    container.innerHTML = `
      <article class="featured-post">
        <div class="featured-post-image">
          ${featuredPost.emoji || '📖'}
        </div>
        <div class="featured-post-content">
          <span class="post-category">${this.getCategoryLabel(featuredPost.category)}</span>
          <h2>${this.escapeHtml(featuredPost.title)}</h2>
          <p>${this.escapeHtml(featuredPost.excerpt)}</p>
          <div class="featured-post-meta">
            <span>📅 ${this.formatDate(featuredPost.published_date)}</span>
            <span>⏱️ ${readTime} min read</span>
            <span>✍️ ${this.escapeHtml(featuredPost.author)}</span>
          </div>
          <a href="${this.escapeHtml(featuredPost.url)}" class="btn btn-primary featured-post-cta">
            Read Article
          </a>
        </div>
      </article>
    `;
  }

  // Render blog posts grid
  renderPosts() {
    const container = document.getElementById('blog-posts-grid');
    if (!container) return;

    // Pagination
    const startIndex = 0;
    const endIndex = this.postsPerPage * this.currentPage;
    const postsToShow = this.filteredPosts.slice(startIndex, endIndex);

    if (postsToShow.length === 0) {
      container.innerHTML = `
        <div class="blog-empty-state" style="grid-column: 1 / -1;">
          <h3>No posts found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      `;
      return;
    }

    // Skip featured post in grid
    const gridPosts = postsToShow.length > 1 ? postsToShow.slice(1) : [];

    container.innerHTML = gridPosts.map(post => {
      const readTime = this.calculateReadTime(post.content);
      return `
        <article class="blog-post-card">
          <div class="blog-post-image">
            ${post.emoji || '📖'}
          </div>
          <div class="blog-post-body">
            <span class="post-category">${this.getCategoryLabel(post.category)}</span>
            <h3>${this.escapeHtml(post.title)}</h3>
            <p>${this.escapeHtml(post.excerpt)}</p>
            <div class="blog-post-meta">
              <div class="blog-post-date">
                <span>${this.formatDate(post.published_date)}</span>
              </div>
              <span class="blog-post-read-time">${readTime}min</span>
            </div>
          </div>
          <div style="padding: 1rem 1.5rem; border-top: 1px solid #e5e7eb; margin-top: auto;">
            <a href="${this.escapeHtml(post.url)}" class="blog-post-link">Read Article →</a>
          </div>
        </article>
      `;
    }).join('');

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      const hasMore = endIndex < this.filteredPosts.length;
      loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }
  }

  // Load more posts
  loadMorePosts() {
    this.currentPage++;
    
    const container = document.getElementById('blog-posts-grid');
    const startIndex = this.postsPerPage * (this.currentPage - 1);
    const endIndex = this.postsPerPage * this.currentPage;
    const postsToAdd = this.filteredPosts.slice(startIndex, endIndex);

    const gridHtml = postsToAdd.map(post => {
      const readTime = this.calculateReadTime(post.content);
      return `
        <article class="blog-post-card">
          <div class="blog-post-image">
            ${post.emoji || '📖'}
          </div>
          <div class="blog-post-body">
            <span class="post-category">${this.getCategoryLabel(post.category)}</span>
            <h3>${this.escapeHtml(post.title)}</h3>
            <p>${this.escapeHtml(post.excerpt)}</p>
            <div class="blog-post-meta">
              <div class="blog-post-date">
                <span>${this.formatDate(post.published_date)}</span>
              </div>
              <span class="blog-post-read-time">${readTime}min</span>
            </div>
          </div>
          <div style="padding: 1rem 1.5rem; border-top: 1px solid #e5e7eb; margin-top: auto;">
            <a href="${this.escapeHtml(post.url)}" class="blog-post-link">Read Article →</a>
          </div>
        </article>
      `;
    }).join('');

    container.insertAdjacentHTML('beforeend', gridHtml);

    // Hide load more if no more posts
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn && endIndex >= this.filteredPosts.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Handle newsletter signup
  async handleNewsletterSignup(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const button = form.querySelector('button');

    button.disabled = true;
    button.textContent = 'Subscribing...';

    try {
      // Mock API call (replace with actual Mailchimp/service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      button.textContent = '✅ Subscribed!';
      button.style.backgroundColor = '#22c55e';
      
      setTimeout(() => {
        form.reset();
        button.disabled = false;
        button.textContent = 'Subscribe';
        button.style.backgroundColor = '';
      }, 2000);

      console.log(`📧 Newsletter signup: ${email}`);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      button.textContent = 'Error - Try again';
      button.disabled = false;
    }
  }

  // Calculate read time (words / 200 = minutes)
  calculateReadTime(text) {
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  }

  // Get category label
  getCategoryLabel(category) {
    const labels = {
      'country-audits': '🌍 Country Audits',
      'student-playbooks': '🎓 Student Playbooks',
      'professional-playbooks': '💼 Professional Playbooks',
      'business-playbooks': '📊 Business Playbooks',
      'case-studies': '📖 Case Studies',
      'policy-updates': '📰 Policy Updates',
      'guides': '📚 Guides'
    };
    return labels[category] || category;
  }

  // Format date
  formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  // Escape HTML
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Show error
  showError(message) {
    const container = document.getElementById('blog-posts-grid');
    if (container) {
      container.innerHTML = `
        <div class="blog-empty-state" style="grid-column: 1 / -1;">
          <h3>⚠️ Error</h3>
          <p>${message}</p>
        </div>
      `;
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new BlogLoader();
});
