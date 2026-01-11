# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio` (or `your-username.github.io` for a personal site)
3. Keep it Public
4. Don't initialize with anything
5. Click "Create repository"

## Step 2: Push Your Code
Run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes

## Step 4: Access Your Site
Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

# Alternative: Netlify Deployment (Drag & Drop)

## Option A: Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag your entire Portfolio folder
3. Done! You'll get a live URL instantly

## Option B: Netlify with GitHub
1. Push code to GitHub (steps above)
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Click "Deploy site"

Your site will be live with a URL like: `https://random-name.netlify.app`
You can customize the subdomain in Netlify settings.

---

# Alternative: Vercel Deployment

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Click "Deploy"

Your site will be live at: `https://portfolio-random.vercel.app`

---

# Quick Test on Local Network (Mobile Testing)

To test on your mobile/other devices on the same WiFi:

1. Find your computer's IP address:
   - Windows: Run `ipconfig` and look for "IPv4 Address"
   - Example: 192.168.1.5

2. On your mobile browser, visit:
   `http://YOUR_IP_ADDRESS:8000`
   Example: `http://192.168.1.5:8000`

Note: Make sure your firewall allows connections on port 8000
