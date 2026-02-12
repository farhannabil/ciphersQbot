# GitHub Pages Deployment Guide

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## How It Works

1. **Automatic Deployment**: Every time code is pushed to the `main` branch, GitHub Actions automatically builds and deploys the site to GitHub Pages.

2. **Workflow File**: The deployment is configured in `.github/workflows/deploy.yml`

3. **Landing Page**: The `index.html` file in the root directory serves as the landing page.

## Enabling GitHub Pages (One-Time Setup)

To enable GitHub Pages for this repository, follow these steps:

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/farhannabil/ciphersQbot
2. Click on **Settings** (top menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions" from the dropdown
5. Click **Save**

### Step 2: Merge This Pull Request

1. Once this PR is merged to the `main` branch, the GitHub Actions workflow will automatically trigger
2. The workflow will build and deploy the site to GitHub Pages
3. After a few minutes, your site will be live at: **https://farhannabil.github.io/ciphersQbot/**

### Step 3: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Once it completes successfully (green checkmark), your site is live!
4. Visit https://farhannabil.github.io/ciphersQbot/ to see your deployed site

## Manual Deployment

You can also manually trigger the deployment:

1. Go to the **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click the "Run workflow" button
4. Select the branch (usually `main`)
5. Click "Run workflow"

## Troubleshooting

### If the workflow fails:

1. Check the Actions tab for error messages
2. Ensure GitHub Pages is enabled in Settings → Pages
3. Verify the source is set to "GitHub Actions"
4. Make sure the repository has the correct permissions

### If the site doesn't load:

1. Check if the workflow completed successfully
2. Wait a few minutes for DNS propagation
3. Try accessing the site in an incognito/private browser window
4. Clear your browser cache

## What Gets Deployed

The entire repository content is deployed to GitHub Pages, including:
- `index.html` - Landing page
- `manifest.json` - Chrome extension manifest
- `background.js`, `inject.js`, `index.js` - Extension files
- `js/` - JavaScript libraries
- `evil.png` - Extension icon
- `README.md` - Documentation

This allows users to:
- View the landing page with documentation
- Download the extension files directly from the site
- Access all extension resources

## Customization

To customize the landing page:
1. Edit `index.html`
2. Commit and push to the `main` branch
3. The site will automatically redeploy with your changes

## Cost

GitHub Pages is **completely free** for public repositories with no limits!
