# Andrew Esperanta

Personal profile page built with Next.js, styled as an Arknights-inspired editorial operator dossier. The design pairs large Space Grotesk typography with IBM Plex Mono labels, a charcoal and mint palette, the original ASCII character artwork, and custom research diagrams.

The profile presents an AI Algorithm Engineer and AI Technical Artist in Training, the current FTE Researcher role at VAST, the previous Research Intern experience, and four research directives. The layout adapts from mobile to desktop and includes keyboard navigation, visible focus states, reduced-motion support, and readable content without JavaScript.

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

Static export for GitHub Pages:

```bash
npm run build
```

Deployment is automated via GitHub Actions — push to `main` and it deploys to GitHub Pages.

## Setup for GitHub Pages

1. Create a repo named `<username>.github.io` (or any repo name)
2. Push this code to `main`
3. In repo Settings → Pages → Source: select "GitHub Actions"
4. If using a project repo (not `username.github.io`), uncomment the `basePath` in `next.config.ts`
