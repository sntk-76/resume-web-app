# Sina Tavakoli Portfolio

Personal portfolio and project case-study website built with Astro for GitHub Pages.

## Local Development

```powershell
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

## Production Check

```powershell
npm run check
npm run build
npm run preview
```

## Content

- Project case studies live in `src/content/projects/`.
- Certificate entries live in `src/content/certificates/`.
- Shared resume/profile data lives in `src/data/profile.ts`.
- Public images, PDFs, and downloadable files live in `public/`.

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

For the cleanest personal portfolio URL, publish this project from a repository named:

```text
sntk-76.github.io
```

Then enable GitHub Pages with **GitHub Actions** as the source.
