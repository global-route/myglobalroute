import os, re, json

blog_dir = 'content/blog'
with open('src/data/blog-posts.json') as f:
    existing = json.load(f)
existing_ids = {p['id'] for p in existing}

cat_map = {
    'Country Audits': 'country-audits',
    'Guides': 'guides',
    'Professional Playbooks': 'professional-playbooks',
    'Student Playbooks': 'student-playbooks',
    'Business Playbooks': 'business-playbooks',
    'Case Studies': 'case-studies',
    'Policy Updates': 'policy-updates',
}

missing = []
for root, dirs, files in os.walk(blog_dir):
    for fname in sorted(files):
        if not fname.endswith('.md'):
            continue
        path = os.path.join(root, fname)
        with open(path) as f:
            content = f.read()
        fm_match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not fm_match:
            continue
        fm = fm_match.group(1)
        def get(key, text=fm):
            m = re.search(r'^' + key + r':\s*"?([^"\n]+)"?', text, re.MULTILINE)
            return m.group(1).strip().strip('"').strip("'") if m else ''
        slug = fname.replace('.md', '')
        if slug in existing_ids:
            continue
        title = get('title')
        if not title:
            continue
        cat_raw = get('category')
        missing.append({
            'id': slug,
            'title': title,
            'slug': slug,
            'excerpt': get('excerpt'),
            'category': cat_map.get(cat_raw, cat_raw.lower().replace(' ', '-')),
            'date': get('date'),
            'updated': get('updated') or get('date'),
            'author': get('author') or 'MyPathway2Global Editorial',
            'readTime': get('readTime') or '8 min',
            'content': path,
            'featured': get('featured') == 'true',
            'keywords': get('keywords'),
        })

print(f'Missing: {len(missing)}')
for p in missing:
    print(' -', p['id'])

# Write updated file
all_posts = existing + missing
all_posts.sort(key=lambda p: p.get('date', ''), reverse=True)
with open('src/data/blog-posts.json', 'w') as f:
    json.dump(all_posts, f, indent=2)
    f.write('\n')
print(f'blog-posts.json updated: {len(all_posts)} entries')
