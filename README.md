# CSStacks Vite React App

This project was bootstrapped with [Vite](https://vitejs.dev/) and React.

## Available Scripts

- `npm run dev` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm run preview` — Previews the production build locally.
- `npm run deploy` — Deploys the app to GitHub Pages (after setup).

## Deployment to GitHub Pages

1. Set the `homepage` field in `package.json` to your GitHub Pages URL (e.g., `https://<your-username>.github.io/<your-repo>`).
2. Install `gh-pages` as a dev dependency: `npm install --save-dev gh-pages`
3. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Update `vite.config.js` to set the `base` option to your repo name (e.g., `/repo/`).
5. Run `npm run deploy` to publish.

See the README for more details.
