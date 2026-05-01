# 🚀 Deployment Guide - Portfolio Website

## Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

### Step 1: Initialize Git Repository

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Name it: `portfolio` (or any name you like)
4. **Don't** initialize with README
5. Click **"Create repository"**

### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/harshavardhan29/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your project
- Create a `gh-pages` branch
- Deploy to GitHub Pages automatically

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: `gh-pages`
4. Click **Save**

### 🎉 Your Site is Live!

Your portfolio will be available at:
**https://harshavardhan29.github.io/portfolio/**

---

## Update Your Live Site

Whenever you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

---

## Alternative: Deploy to Vercel (Easier & Faster)

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

Your site will be live at: `https://your-portfolio.vercel.app`

---

## Alternative: Deploy to Netlify

### Drag & Drop Method:

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to Netlify
4. Done! Your site is live

### Git Integration:

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `build`
6. Click **"Deploy site"**

---

## 📝 Important Notes

### Before Deploying:

1. ✅ Add your resume PDF to `public/resume.pdf`
2. ✅ Add project screenshots to `public/images/`
   - `skillswap.png`
   - `mentorconnect.png`
3. ✅ Update social media links in Footer.jsx
4. ✅ Test locally: `npm start`

### Custom Domain (Optional):

If you have a custom domain:

1. Add a `CNAME` file in `public/` folder
2. Add your domain name in the file
3. Configure DNS settings with your domain provider

---

## 🛠️ Troubleshooting

### Issue: Blank page after deployment

**Solution:** Check `package.json` has correct `homepage` URL

### Issue: Images not loading

**Solution:** Use `/images/filename.png` instead of `./images/filename.png`

### Issue: 404 on refresh

**Solution:** Add a `_redirects` file in `public/` with:
```
/*    /index.html   200
```

---

## 📞 Need Help?

- GitHub Pages Docs: https://pages.github.com/
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/

---

**Your Portfolio is Ready to Go Live! 🎉**
