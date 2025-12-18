# Cloudflare Pages Deployment Guide

This guide will walk you through deploying your portfolio to Cloudflare Pages step-by-step.

## Prerequisites

- A Cloudflare account (sign up at https://dash.cloudflare.com/sign-up if you don't have one)
- Your portfolio code pushed to a GitHub repository
- Email credentials (Gmail app password) for the contact form

---

## Step 1: Push Your Code to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## Step 2: Create a Cloudflare Pages Project

1. **Log in to Cloudflare**
   - Go to https://dash.cloudflare.com/
   - Sign in with your account

2. **Navigate to Pages**
   - Click on "Workers & Pages" in the left sidebar
   - Click the "Create application" button
   - Select "Pages" tab
   - Click "Connect to Git"

3. **Connect Your GitHub Repository**
   - Click "Connect GitHub"
   - Authorize Cloudflare to access your GitHub account
   - Select your portfolio repository from the list
   - Click "Begin setup"

---

## Step 3: Configure Build Settings

On the "Set up builds and deployments" page:

1. **Project name**: Choose a name (e.g., `abdirahim-portfolio`)
   - This will be your subdomain: `your-project-name.pages.dev`

2. **Production branch**: `main`

3. **Build settings**:
   - **Framework preset**: Select "Vite"
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

4. Click "Save and Deploy"

---

## Step 4: Add Environment Variables

After the initial deployment (it may fail without these):

1. **Go to your project settings**
   - Click on your project name
   - Go to "Settings" tab
   - Click "Environment variables" in the left menu

2. **Add the following variables**:
   
   | Variable Name | Value | Environment |
   |--------------|-------|-------------|
   | `EMAIL_USER` | Your Gmail address | Production |
   | `EMAIL_PASS` | Your Gmail app password* | Production |

   *To get a Gmail app password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled
   - Go to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Click "Save"**

---

## Step 5: Redeploy

After adding environment variables:

1. Go to "Deployments" tab
2. Click "..." on the latest deployment
3. Click "Retry deployment"
4. Wait for the build to complete (usually 1-2 minutes)

---

## Step 6: Verify Your Deployment

1. **Visit your site**
   - Your site will be live at: `https://your-project-name.pages.dev`

2. **Test the contact form**
   - Navigate to the Contact section
   - Fill out the form
   - Submit it
   - Check your email inbox for the message

3. **Test all features**
   - Click through all navigation links
   - Open project modals
   - Check that all images load
   - Test on mobile (use browser dev tools)

---

## Step 7: Custom Domain (Optional)

To use your own domain:

1. **In Cloudflare Pages**:
   - Go to your project
   - Click "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter your domain name
   - Follow the DNS configuration instructions

2. **Update DNS**:
   - Add the CNAME record as instructed by Cloudflare
   - Wait for DNS propagation (can take up to 24 hours)

---

## Automatic Deployments

Cloudflare Pages will automatically deploy your site whenever you push to your GitHub repository:

- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

To deploy updates:
```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## Troubleshooting

### Build Fails

**Check the build logs**:
1. Go to "Deployments" tab
2. Click on the failed deployment
3. Review the error messages

**Common issues**:
- Missing dependencies: Make sure `package.json` includes all dependencies
- Build command error: Verify `npm run build` works locally
- Node version: Cloudflare uses Node 18 by default

### Contact Form Not Working

**Check environment variables**:
1. Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly
2. Make sure you're using a Gmail app password, not your regular password
3. Redeploy after adding/updating variables

**Check function logs**:
1. Go to "Functions" tab in your project
2. Click on "Real-time logs"
3. Submit the contact form
4. Look for error messages

### Images Not Loading

**Check image paths**:
- All images should be in the `public/images/` folder
- Paths in code should start with `/images/` (not `./images/`)

---

## Support

If you encounter issues:

1. **Cloudflare Community**: https://community.cloudflare.com/
2. **Cloudflare Docs**: https://developers.cloudflare.com/pages/
3. **Check deployment logs** in your Cloudflare dashboard

---

## Summary

Your portfolio is now deployed! 🎉

- **Live URL**: `https://your-project-name.pages.dev`
- **Automatic deployments**: Enabled via GitHub
- **Contact form**: Powered by Cloudflare Functions
- **Global CDN**: Fast loading worldwide

To update your site, just push changes to GitHub and Cloudflare will automatically rebuild and deploy.
