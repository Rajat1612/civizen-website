# Civizen Technical Services — Single Page Website

Production-ready static website for Civizen Technical Services Pvt. Ltd., covering the complete tender-to-closure services offered by the firm. The site is responsive, accessible, and optimised for GitHub Pages deployment.

## Features
- Mobile-first single page with hero, services, projects, process, leadership, and contact sections.
- Corporate palette using deep green and gold accents, vanilla CSS, and lightweight JavaScript.
- Smooth scrolling navigation, accessible markup, and Formspree-enabled contact form with client-side messaging.
- SEO foundation: meta tags, JSON-LD organisation schema, sitemap, robots directives, and favicons.
- Packaged assets: SVG logo, favicon, and three royalty-free placeholder hero/project images.

## File Structure
```
civizen-website/
├─ index.html
├─ assets/
│  ├─ logo.svg
│  ├─ favicon.svg
│  └─ images/
│     ├─ placeholder1.jpg
│     ├─ placeholder2.jpg
│     └─ placeholder3.jpg
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ sitemap.xml
├─ robots.txt
├─ CNAME
├─ README.md
└─ LICENSE
```

## Local Preview
- Option 1: double-click `index.html` to open in your browser.
- Option 2: use VS Code Live Server or any static server (`python3 -m http.server`) for local testing.

## Formspree Configuration
- The contact form posts to `https://formspree.io/f/your-id`.
- **TODO:** Replace `your-id` with an actual Formspree endpoint, then verify the success banner appears after submission.

## Deployment (GitHub Pages)
1. Create a new GitHub repository named `civizen-website`.
2. In the project directory:
   ```bash
   git init
   git add .
   git commit -m "init: Civizen single page site"
   git branch -M main
   git remote add origin git@github.com:youruser/civizen-website.git
   git push -u origin main
   ```
3. Enable Pages: `Repository → Settings → Pages → Build and deployment → Branch: main / (root) → Save`.
4. (Optional) Custom domain: keep `CNAME` with `civizen.com` or edit/remove as needed.

## DNS Records for `civizen.com`
- `A` records pointing to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `CNAME` record: `www → yourusername.github.io`.

## Licensing
- Distributed under the MIT License. See `LICENSE` for details.

## Credits
- Placeholder imagery generated in-house for royalty-free usage.
- No external frameworks; built with semantic HTML, CSS, and vanilla JavaScript.

