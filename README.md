# Andrew Esperanta

Personal profile page built with Next.js, styled with an Arknights-inspired dark terminal aesthetic.

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
