import json
import urllib.request
import os

os.makedirs('stitch_export', exist_ok=True)

with open('/Users/rogeriosaj/.gemini/antigravity/brain/9c1a8383-4df2-4e60-9f41-0293ec87bdf9/.system_generated/steps/5/output.txt', 'r') as f:
    data = json.load(f)

for screen in data['screens']:
    title = screen['title'].replace('/', '_')
    print(f"Downloading {title}...")
    
    img_url = screen['screenshot']['downloadUrl']
    html_url = screen['htmlCode']['downloadUrl']
    
    urllib.request.urlretrieve(img_url, f"stitch_export/{title}.png")
    urllib.request.urlretrieve(html_url, f"stitch_export/{title}.html")

print("Done.")
