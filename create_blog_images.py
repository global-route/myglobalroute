#!/usr/bin/env python3
"""
Generate blog featured images for Global Route
Creates 5 placeholder images optimized for web
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Image directory
img_dir = os.path.expanduser("~/My Drive/Github Projects/Global Route/public/blog/images")

def create_image(filename, title, bg_color, accent_color):
    """Create a featured image with title"""
    
    # Create image (1200x630)
    img = Image.new('RGB', (1200, 630), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a system font, fall back to default
    try:
        title_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 72)
        subtitle_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 40)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Add accent bar
    draw.rectangle([(0, 0), (1200, 100)], fill=accent_color)
    
    # Add title
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (1200 - title_width) // 2
    draw.text((title_x, 240), title, fill='white', font=title_font)
    
    # Add Global Route branding
    draw.text((50, 550), "Global Route - Radical Transparency for African Mobility", 
              fill=accent_color, font=subtitle_font)
    
    # Save image
    filepath = os.path.join(img_dir, filename)
    img.save(filepath, 'JPEG', quality=85, optimize=True)
    
    # Check file size
    size_kb = os.path.getsize(filepath) / 1024
    print(f"✅ Created: {filename} ({size_kb:.1f} KB)")

# Create all 5 images
images = [
    ("germany-visa-2026.jpg", "Germany Visa from Nigeria", (20, 20, 80), (240, 20, 20)),  # Dark blue bg, red accent
    ("italy-dsu-scholarship.jpg", "Italy DSU Scholarship", (20, 60, 20), (20, 180, 20)),  # Dark green bg, bright green accent
    ("us-llc-setup.jpg", "US LLC Setup from Africa", (20, 40, 100), (200, 40, 40)),  # Dark blue, red accent
    ("chisom-canada-success.jpg", "Nigeria → Canada in 6 Months", (200, 20, 20), (255, 200, 0)),  # Dark red, gold accent
    ("canada-sds-cancelled.jpg", "Canada SDS Program Cancelled", (80, 20, 20), (255, 0, 0)),  # Dark red, bright red accent
]

print(f"Creating blog images in {img_dir}...\n")

for filename, title, bg_color, accent_color in images:
    create_image(filename, title, bg_color, accent_color)

print("\n✅ All images created successfully!")
print(f"Location: {img_dir}")
