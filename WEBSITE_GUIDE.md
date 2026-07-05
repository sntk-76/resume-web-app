# Personal Portfolio Website Guide

## Decision

The selected solution is:

```text
Astro + GitHub Pages first
```

This means:

- **Astro** will be used to build the website.
- **GitHub Pages** will be used to publish the website online.
- The site will be static, fast, professional, and low-cost.
- The website can later be moved to Netlify or Vercel without rebuilding everything.

This is the best first choice because the goal is a professional personal portfolio for job seeking with the lowest possible cost and good long-term flexibility.

## Main Goal

The website should present Sina Tavakoli as a broad technical professional, not as only one job title.

The site should communicate expertise across:

- Software Engineering
- Backend Development
- Data Engineering
- Data Analysis
- Data Science
- Machine Learning / AI
- MLOps

The website should work as a central professional hub that connects:

- General resume
- Specialized resumes
- GitHub projects
- Kaggle profile
- LinkedIn profile
- Certificates
- Technical skills
- Full project case studies

## Target Audience

The website should be useful for:

- Recruiters
- Hiring managers
- Technical interviewers
- Engineering managers
- Data/AI team leads
- People who want to quickly understand Sina's background

The first impression should be:

```text
Professional, technical, organized, serious, and capable.
```

The site should not feel like a generic resume template. It should feel like a developer/data/AI portfolio with strong project depth.

## Cost Plan

### Required Cost

```text
Astro: $0
GitHub Pages: $0
Hosting: $0
```

### Optional Cost

```text
Custom domain: about $10-20 per year
```

Examples:

```text
sinatavakoli.com
sina-tavakoli.com
sinatavakoli.dev
```

The site can first be published for free using a GitHub Pages URL, then a custom domain can be added later.

## GitHub Pages Limitations

GitHub Pages is a good fit for this portfolio, but the site should respect these limits:

- Published site should be under 1 GB.
- Repository should ideally stay under 1 GB.
- Soft bandwidth limit is around 100 GB per month.
- GitHub Pages is for static websites only.
- No backend server is available.
- No database is available.
- No private server-side logic is available.

These limitations are acceptable for this project because a portfolio website mainly needs static pages, images, PDFs, and links.

## What Can Be Included

The website can include:

- Profile image
- Project screenshots
- Project cover images
- Certificate images
- Certificate PDFs
- Resume PDFs
- Markdown project descriptions
- GitHub links
- Kaggle links
- LinkedIn links
- Contact links

Recommended file types:

```text
Images: .webp, .jpg, .png, .svg
Documents: .pdf
Content: .md, .mdx
```

Large videos should not be stored directly in the website repository. If videos are needed, upload them to another platform and embed or link them.

## Recommended Website Structure

The site should use this structure:

```text
website/
  public/
    images/
      profile/
      projects/
      certificates/
    resumes/
      general-resume.pdf
      backend-developer.pdf
      data-engineer.pdf
      data-analyst.pdf
      data-scientist.pdf
      ml-ai-engineer.pdf
      software-developer.pdf
    certificates/
      certificate-name.pdf

  src/
    components/
      Header.astro
      Footer.astro
      ProjectCard.astro
      SkillGroup.astro
      ResumeTimeline.astro
      CertificateCard.astro

    content/
      projects/
        ai-weather-predictor.md
        another-project.md
      certificates/
        mlops-zoomcamp.md
        data-engineering-zoomcamp.md

    layouts/
      BaseLayout.astro
      ProjectLayout.astro

    pages/
      index.astro
      resume.astro
      projects/
        index.astro
        [slug].astro
      certificates.astro
      contact.astro

    styles/
      global.css

  astro.config.mjs
  package.json
  tsconfig.json
```

## Main Pages

### 1. Home Page

Path:

```text
/
```

Purpose:

The home page should give a fast, complete overview of Sina's professional identity.

Recommended sections:

1. Hero section
2. Professional summary
3. Core expertise areas
4. Featured projects
5. Technical skills
6. Resume preview
7. Certificates preview
8. Links to GitHub, Kaggle, LinkedIn
9. Contact section

Recommended hero title:

```text
Sina Tavakoli
```

Recommended professional subtitle:

```text
Software, Data, and AI Engineer
```

Alternative subtitles:

```text
Backend, Data, and Machine Learning Engineer
Full-Stack Technical Profile Across Software, Data, and AI
Software Engineer with Data, AI, and MLOps Experience
```

The home page should not be too long, but it should show enough to make the visitor want to open the projects page.

### 2. Resume Page

Path:

```text
/resume
```

Purpose:

Show a general resume that is not customized for one specific job title.

This page should include:

- General professional summary
- Experience
- Education
- Skills
- Certificates
- Main projects
- Download button for general resume PDF
- Download buttons for specialized resumes

Specialized resume downloads:

```text
Backend Developer Resume
Data Analyst Resume
Data Engineer Resume
Data Scientist Resume
ML / AI Engineer Resume
Software Developer Resume
```

The general resume should be broad and balanced. It should not over-focus on one role.

### 3. Projects Page

Path:

```text
/projects
```

Purpose:

Show all projects in a structured and filterable way.

Recommended project categories:

```text
All
Backend
Data Engineering
Data Analysis
Data Science
Machine Learning / AI
MLOps
Software
```

Each project card should include:

- Project name
- Short summary
- Category
- Tech stack
- Cover image
- GitHub link if available
- "Read case study" link

When a user clicks a project from the home page, they should be taken to the matching project detail page.

Example:

```text
Home featured project card -> /projects/ai-weather-predictor
```

### 4. Project Detail Pages

Path pattern:

```text
/projects/project-slug
```

Purpose:

Each important project should have a full explanation.

Recommended structure for each project:

1. Project overview
2. Problem
3. Solution
4. Architecture
5. Tech stack
6. Data pipeline or backend flow, if relevant
7. Model or analytics approach, if relevant
8. Key features
9. Results
10. Screenshots
11. Challenges and decisions
12. What could be improved
13. GitHub repository link
14. Demo link, if available

This is where the website should show real technical depth.

### 5. Certificates Page

Path:

```text
/certificates
```

Purpose:

Show certificates in a clean professional way.

Each certificate should include:

- Certificate title
- Provider
- Topic
- Date, if available
- PDF link
- Optional preview image

Certificates should be grouped by topic if needed:

```text
MLOps
Data Engineering
Python
Git
Algorithms
Data Science
```

### 6. Contact Page

Path:

```text
/contact
```

Purpose:

Make it easy for recruiters and hiring managers to contact Sina.

Recommended content:

- Email address
- LinkedIn link
- GitHub link
- Kaggle link
- Location, if desired
- Resume download link

For GitHub Pages, a normal contact form will not work without an external service. The first version should use contact links instead of a form.

## Design Direction

The design should feel:

- Professional
- Technical
- Clean
- Mature
- Confident
- Easy to scan

Avoid:

- Overly colorful student-style design
- Generic template look
- Too many animations
- Huge decorative gradients
- Cluttered cards
- Long paragraphs on the home page
- Weak project descriptions

Recommended style:

- Light or neutral background
- Strong typography
- Clear spacing
- Subtle borders
- High-quality project images
- Compact project cards
- Professional section headings
- Good mobile layout

The visual style should be closer to:

```text
senior technical portfolio
```

not:

```text
personal blog
```

and not:

```text
flashy landing page
```

## Content Strategy

The most important content decision is to separate:

```text
short overview content
```

from:

```text
detailed case study content
```

The home page should be easy to scan.

The project detail pages should be deep and technical.

This gives both audiences what they need:

- Recruiters can scan quickly.
- Technical people can inspect the details.

## General Resume Strategy

Because this website is not for only one job title, the resume should use a general positioning.

Recommended positioning:

```text
Software, Data, and AI Engineer with experience across backend systems,
data pipelines, machine learning workflows, analytics, and MLOps.
```

The website can still provide specialized PDF resumes, but the main profile should be general.

The general resume should combine the strongest elements from:

- Backend Developer resume
- Data Analyst resume
- Data Engineer resume
- Data Scientist resume
- ML / AI Engineer resume
- Software resume

## Project Content Format

Projects should be stored as Markdown or MDX files.

Example:

```text
src/content/projects/ai-weather-predictor.md
```

Example frontmatter:

```md
---
title: "AI Weather Predictor"
slug: "ai-weather-predictor"
category: "Machine Learning / MLOps"
summary: "A custom-trained weather forecasting product with sequence modeling, evaluation, and live deployment."
techStack:
  - Python
  - TensorFlow
  - Keras
  - MLflow
  - Terraform
  - GCP
githubUrl: "https://github.com/sntk-76/AI-weather-predictor"
demoUrl: "https://botverio.com/weather/"
coverImage: "/images/projects/ai-weather-predictor-cover.webp"
featured: true
---

## Overview

Short explanation of the project.

## Problem

What problem the project solves.

## Solution

How the project solves it.

## Technical Details

Architecture, pipeline, model, deployment, and implementation details.

## Results

What was achieved.
```

## Asset Strategy

### Images

Images should be optimized before publishing.

Recommended:

```text
.webp for screenshots and project covers
.jpg for photos
.png only when transparency or exact screenshots are needed
.svg for logos/icons if needed
```

Good target sizes:

```text
Project cover images: under 300 KB each when possible
Profile image: under 500 KB
Screenshots: under 500 KB each when possible
```

### PDFs

PDFs can be included, but should be kept reasonably small.

Recommended:

```text
Each resume PDF: under 1-2 MB if possible
Each certificate PDF: under 2-5 MB if possible
```

If certificate PDFs are large, consider using preview images and linking only the most important PDFs.

## Development Workflow

### Step 1: Create Astro Project

Inside the `website` folder:

```powershell
npm create astro@latest .
```

Recommended options:

```text
Template: Empty or minimal
TypeScript: Yes
Install dependencies: Yes
Initialize git repository: No, if this website is inside an existing repository
```

### Step 2: Add Styling

The first implementation uses custom CSS in:

```text
src/styles/global.css
```

Tailwind CSS can still be added later if the design system grows, but the current site avoids an extra styling build plugin and keeps the GitHub Pages build simpler.

### Step 3: Create Main Pages

Create:

```text
src/pages/index.astro
src/pages/resume.astro
src/pages/projects/index.astro
src/pages/projects/[slug].astro
src/pages/certificates.astro
src/pages/contact.astro
```

### Step 4: Create Content Collections

Create:

```text
src/content/projects/
src/content/certificates/
```

Each project should become one Markdown file.

### Step 5: Move Assets

Copy selected assets into:

```text
public/images/
public/resumes/
public/certificates/
```

Do not copy everything blindly. Select and optimize only the files that should appear publicly.

### Step 6: Build Locally

Run:

```powershell
npm run dev
```

Open:

```text
http://localhost:4321
```

### Step 7: Test Production Build

Run:

```powershell
npm run build
npm run preview
```

This confirms that the static version works before deployment.

### Step 8: Deploy to GitHub Pages

Deployment should use GitHub Actions.

Astro needs configuration for GitHub Pages.

If the repository is published at:

```text
https://github.com/sntk-76/resumes
```

and GitHub Pages publishes from that repository, the site URL may be:

```text
https://sntk-76.github.io/resumes/
```

In that case, Astro may need a `base` setting:

```js
export default defineConfig({
  site: 'https://sntk-76.github.io',
  base: '/resumes',
});
```

If using a dedicated repository named:

```text
sntk-76.github.io
```

then the site URL can be:

```text
https://sntk-76.github.io/
```

and the `base` setting may not be needed.

The dedicated repository option is cleaner for a personal portfolio.

## Recommended Repository Strategy

Best long-term option:

```text
Create a separate GitHub repository named sntk-76.github.io
```

Benefits:

- Clean personal website URL
- No extra `/resumes/` path
- Easier custom domain setup
- Cleaner public portfolio repository

Alternative:

```text
Keep the website inside the current resumes repository
```

This is acceptable for local development, but less clean for public publishing.

## Deployment Workflow With GitHub Actions

Recommended file:

```text
.github/workflows/deploy.yml
```

Typical deployment steps:

1. Checkout repository
2. Install Node.js
3. Install dependencies
4. Build Astro site
5. Upload static output
6. Deploy to GitHub Pages

This can be added after the site is created.

## SEO Plan

The website should include:

- Descriptive page titles
- Meta descriptions
- Open Graph image
- Clean URLs
- Sitemap
- Good heading structure
- Accessible image alt text

Recommended home page title:

```text
Sina Tavakoli | Software, Data, and AI Engineer
```

Recommended meta description:

```text
Portfolio of Sina Tavakoli, a software, data, and AI engineer with projects across backend development, data engineering, machine learning, analytics, and MLOps.
```

## Accessibility Checklist

The website should:

- Work on mobile and desktop
- Have readable color contrast
- Use semantic HTML
- Use descriptive links
- Include alt text for images
- Support keyboard navigation
- Avoid text overlapping on small screens

## First Version Scope

The first version should include:

- Home page
- Resume page
- Projects list page
- At least 3 detailed project pages
- Certificates page
- Contact section/page
- Resume PDF downloads
- Links to LinkedIn, GitHub, and Kaggle
- Responsive design
- GitHub Pages deployment setup

Do not try to include every possible detail in version 1. The first goal is to publish a strong, clean, professional portfolio.

## Future Improvements

After version 1 is published, possible upgrades include:

- Custom domain
- Dark mode
- Better project screenshots
- Blog/articles section
- Search/filter projects
- Analytics
- Contact form using an external service
- Interactive project demos
- More detailed case studies
- Automatic GitHub repository data integration
- Migration to Netlify or Vercel if advanced hosting features are needed

## Final Recommendation

Proceed with:

```text
Astro + custom CSS + GitHub Pages
```

Use the website as a professional technical portfolio, not only an online resume.

The strongest version of the website should make this clear:

```text
Sina Tavakoli can build software systems, work with data, create machine learning solutions, and explain technical projects clearly.
```
