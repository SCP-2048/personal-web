# Cloudflare Pages deployment

## Deploy the site

1. Sign in to the Cloudflare dashboard.
2. Open **Workers & Pages** and create a Pages application.
3. Choose **Import an existing Git repository**.
4. Connect GitHub and select `SCP-2048/personal-web`.
5. Use these build settings:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Add an environment variable named `SITE_URL`.
   - Use the final Pages URL, for example `https://personal-web.pages.dev`.
   - If Cloudflare assigns a different project URL, use that exact origin without a trailing slash.
7. Save and deploy.

Every later commit to `main` will trigger a production deployment.

## Connect Pages CMS

1. Open <https://app.pagescms.org/>.
2. Sign in with GitHub.
3. Install or authorize the Pages CMS GitHub App.
4. Grant access only to `SCP-2048/personal-web`.
5. Select the repository and its `main` branch.

Pages CMS reads `.pages.yml` from the repository root. It can edit blog posts, works, profile data, and images stored in `public/uploads`.

The website route `/admin/` links to Pages CMS. Pages CMS saves edits as GitHub commits, which trigger Cloudflare Pages deployments.

## Retire Netlify safely

Keep the Netlify project until the Cloudflare site passes these checks:

- Home, blog, works, contact, tag, and admin pages load.
- Existing images under `/uploads` load.
- Pages CMS can edit the profile.
- Pages CMS can create a draft article and upload an image.
- Publishing a CMS change triggers a successful Cloudflare deployment.

After these checks pass, the old Netlify project can be disabled.
