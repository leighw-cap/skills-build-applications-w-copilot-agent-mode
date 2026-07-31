# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` in `.env.local` when running in GitHub Codespaces:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend builds API URLs with:

```text
https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

When `VITE_CODESPACE_NAME` is unset, the app safely falls back to:

```text
http://localhost:8000/api/[component]/
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
```
