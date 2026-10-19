// Category Archive Loader for Global Route
class CategoryArchiveLoader {
  constructor(category) {
    this.category = category;
    this.posts = [];
    this.postsPerPage = 12;
    this.currentPage = 1;
    this.init();
  }

  async init() {
    await this.loadBlogPosts();
    this.filterByCategory();
    this.renderPosts();
    this.setupEventListeners();
  }

  async loadBlogPosts() {
    try {
      const response = await fetch('/data/blog-posts.json');
      this.posts = await response.json();
      console.log(`✅ Loaded ${this.posts.length} blog posts`);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      this.showError('Unable to load blog posts. Please try again later.');
    }
  }

  filterByCategory() {
    this.posts = this.posts.filter(post => post.category === this.category);
    console.log(`📁 Filtered to ${this.posts.length} posts in "${this.category}" category`);
  }

  renderPosts() {
    const container = document.getElementById('blog-posts-grid');
    if (!container || this.posts.length === 0) {
      if (container) {
        container.innerHTML = `
          <div class="blog-empty-state" style="grid-column: 1 / -1;">
            <h3>No posts in this category yet</h3>
            <p><a href="/blog/">← Back to all posts</a></p>
          </div>
        `;
      }
      return;
    }

    const startIndex = 0;
    const endIndex = this.postsPerPage * this.currentPage;
    const postsToShow = this.posts.slice(startIndex, endIndex);

    container.innerHTML = postsToShow.map(post => {
      return `
        <article class="blog-post-card">
          <div class="blog-post-image">
            ${this.renderPostImage(post)}
          </div>
          <div class="blog-post-body">
            <span class="post-category">${this.getCategoryLabel(post.category)}</span>
            <h3>${this.escapeHtml(post.title)}</h3>
            <p>${this.escapeHtml(post.excerpt)}</p>
            <div class="blog-post-meta">
              <div class="blog-post-date">
                <span>${this.formatDate(post.date || post.updated)}</span>
              </div>
              <span class="blog-post-read-time">${this.getReadTime(post)} min read</span>
            </div>
          </div>
          <div style="padding: 1rem 1.5rem; border-top: 1px solid #e5e7eb; margin-top: auto;">
            <a href="${this.escapeHtml(this.getArticleUrl(post))}" class="blog-post-link">Read Article →</a>
          </div>
        </article>
      `;
    }).join('');

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      const hasMore = endIndex < this.posts.length;
      loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }
  }

  setupEventListeners() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => this.loadMorePosts());
    }

    const newsletterForm = document.getElementById('blog-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSignup(e));
    }
  }

  loadMorePosts() {
    this.currentPage++;
    
    const container = document.getElementById('blog-posts-grid');
    const startIndex = this.postsPerPage * (this.currentPage - 1);
    const endIndex = this.postsPerPage * this.currentPage;
    const postsToAdd = this.posts.slice(startIndex, endIndex);

    const gridHtml = postsToAdd.map(post => {
      return `
        <article class="blog-post-card">
          <div class="blog-post-image">
            ${this.renderPostImage(post)}
          </div>
          <div class="blog-post-body">
            <span class="post-category">${this.getCategoryLabel(post.category)}</span>
            <h3>${this.escapeHtml(post.title)}</h3>
            <p>${this.escapeHtml(post.excerpt)}</p>
            <div class="blog-post-meta">
              <div class="blog-post-date">
                <span>${this.formatDate(post.date)}</span>
              </div>
              <span class="blog-post-read-time">${post.readTime}</span>
            </div>
          </div>
          <div style="padding: 1rem 1.5rem; border-top: 1px solid #e5e7eb; margin-top: auto;">
            <a href="/pages/blog.html" class="blog-post-link">Read Article →</a>
          </div>
        </article>
      `;
    }).join('');

    container.insertAdjacentHTML('beforeend', gridHtml);

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn && endIndex >= this.posts.length) {
      loadMoreBtn.style.display = 'none';
    }
  }


  getArticleUrl(post) {
    const sourcePath = typeof post.content === 'string' ? post.content : '';
    if (sourcePath.startsWith('content/blog/') && sourcePath.endsWith('.md')) {
      return '/' + sourcePath.slice('content/blog/'.length, -3) + '/';
    }
    if (typeof post.slug === 'string' && /^[a-z0-9-]+$/i.test(post.slug)) {
      return '/blog/' + post.slug + '/';
    }
    return '/blog/';
  }

  renderPostImage(post) {
    const rawImage = typeof post.featuredImage === 'string' ? post.featuredImage : '';
    const image = rawImage.startsWith('/public/') ? rawImage.slice('/public'.length) : rawImage;
    if (image && image.startsWith('/')) {
      return `<img src="${this.escapeHtml(image)}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">`;
    }
    return '<span aria-hidden="true">📖</span>';
  }

  getReadTime(post) {
    if (typeof post.readTime === 'string' && post.readTime.trim()) {
      return post.readTime.replace(/\\s*min(?:ute)?s?\\s*/i, '').trim();
    }
    return '1';
  }

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

  formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  async handleNewsletterSignup(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button');
    button.disabled = true;
    button.textContent = 'Subscribing...';

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      button.textContent = '✅ Subscribed!';
      button.style.backgroundColor = '#22c55e';
      
      setTimeout(() => {
        form.reset();
        button.disabled = false;
        button.textContent = 'Subscribe';
        button.style.backgroundColor = '';
      }, 2000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
      button.textContent = 'Error - Try again';
      button.disabled = false;
    }
  }

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
