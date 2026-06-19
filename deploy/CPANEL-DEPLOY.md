# Grand Sud — cPanel Deployment Guide

This guide fixes the common issue where **drag-and-drop into cPanel File Manager does nothing**. That is a cPanel UI limitation, not corrupt files in `public/assets`.

## Server path (read this first)

Your Next.js app root on cPanel is typically one of:

| Setup | App root | Assets must live at |
|-------|----------|---------------------|
| Node.js app in home directory | `~/grand-sud/` or `~/repositories/grand-sud/` | `~/grand-sud/public/assets/` |
| App inside domain folder | `~/public_html/grand-sud/` | `~/public_html/grand-sud/public/assets/` |
| Subdomain app | `~/subdomain.yourdomain.com/` | `~/subdomain.yourdomain.com/public/assets/` |

**Rule:** static files are served from `public/` at the site root.  
Example: `public/assets/logo.jpg` → `https://yourdomain.com/assets/logo.jpg`

After extracting a ZIP, files must sit **directly** in `public/assets/`, not in `public/assets/assets/`.

### How to confirm the correct folder

1. cPanel → **File Manager**
2. Find where `package.json` and `next.config.ts` live — that folder is your **app root**
3. Open `public/assets/` inside that app root
4. You should see files like `logo.jpg`, `card-alumni.jpg`, `background-tourism.mp4`

---

## Do NOT upload these via File Manager

| Folder | What to do instead |
|--------|-------------------|
| `node_modules/` | Run `npm install` on the server |
| `.next/` | Run `npm run build` on the server |
| Entire project via drag-and-drop | Use Git, FTP, or ZIP — see below |

---

## Option A — Git deploy (recommended)

All 151 assets are already in git. No manual asset upload needed.

### One-time setup

1. cPanel → **Git Version Control** → clone your repository
2. Note the clone path (e.g. `~/repositories/grand-sud`)
3. cPanel → **Setup Node.js App** → create app pointing at that path
   - Application startup file: `node_modules/next/dist/bin/next` or use npm start
   - Application mode: Production
   - Application root: your clone path

### Every deploy

SSH or cPanel **Terminal**:

```bash
cd ~/path/to/grand-sud   # your app root
git pull origin main
npm install
npm run build
```

Restart the Node.js app in cPanel (Setup Node.js App → Restart).

Or run the included script:

```bash
cd ~/path/to/grand-sud
bash deploy/server-build.sh
```

---

## Option B — ZIP upload (File Manager, no Git)

**Do not drag files onto the file list** — it will not work on most hosts.

### On your PC

```bash
npm run deploy:assets-zip
```

This creates split archives in `deploy/cpanel-assets/` (~27 MB each).

### On cPanel

1. File Manager → open **`public/assets`** (inside your app root)
2. Click **Upload** in the top toolbar (not drag onto the file list)
3. Upload **`assets-part-01-of-03.zip`**, then **02**, then **03**
4. For each zip: select it → **Extract**
5. Confirm files appear directly in `public/assets/`
6. Delete the zip files after extraction

**Avoid** `assets-full.zip` (~80 MB) if your host limits uploads to 64 MB.

Inside the Upload dialog, drag-and-drop sometimes works — but only **inside that dialog**, not on the main file list.

---

## Option C — FileZilla / SFTP (most reliable manual upload)

1. cPanel → **FTP Accounts** → note host, username, password
2. Connect with FileZilla (SFTP port **22** preferred)
3. Remote: navigate to `public/assets`
4. Local: open your project `public/assets`
5. Upload all files (queue upload — no drag-drop UI issue)

---

## Verify deployment

After deploy, run on your PC (replace with your domain):

```bash
npm run verify:assets -- https://yourdomain.com
```

Or open these URLs in a browser — both must load (not 404):

- `https://yourdomain.com/assets/logo.jpg`
- `https://yourdomain.com/assets/background-tourism.mp4`

If you get 404, files are in the wrong folder on the server (see **Server path** above).

Local check (dev server running on port 3000):

```bash
npm run verify:assets -- http://localhost:3000
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Drag-and-drop does nothing | Use **Upload** button, ZIP extract, FTP, or Git — not file-list drag |
| Upload fails / timeout | Use `assets-part-01-of-03.zip` etc., not full zip |
| Images 404 on live site | Move files to `{app_root}/public/assets/` |
| Site works but no images after build | Ensure `public/` folder exists next to `.next/` on server |
| `node_modules` too large to upload | Never upload it — run `npm install` on server |

---

## npm scripts reference

| Command | Purpose |
|---------|---------|
| `npm run deploy:assets-zip` | Build split ZIPs for cPanel upload |
| `npm run optimize:assets` | Compress oversized PNGs before deploy |
| `npm run verify:assets -- <url>` | Check key asset URLs return HTTP 200 |
