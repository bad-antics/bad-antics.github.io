# Bad Antics ISO Archive

A GitHub Pages site for sharing operating system ISOs and installation media.

## 🚀 Setup Instructions

### 1. Create the GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right and select **New repository**
3. Name it exactly: `bad-antics.github.io` (or `your-username.github.io`)
4. Make it **Public**
5. Do NOT initialize with README (we'll push our existing files)
6. Click **Create repository**

### 2. Push This Project to GitHub

```bash
cd "w:\misc workspaces\blackflag\bad-antics.github.io"
git init
git add .
git commit -m "Initial commit: ISO archive site"
git branch -M main
git remote add origin https://github.com/bad-antics/bad-antics.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be live at: `https://bad-antics.github.io`

## 📦 Adding ISOs

### Option 1: GitHub Releases (Recommended for large files)

1. Go to your repository → **Releases**
2. Click **Create a new release**
3. Upload your ISO files (up to 2GB per file)
4. Get the download URL and add it to `script.js` or `index.html`

### Option 2: External Hosting

For ISOs larger than GitHub's limits:
- Use **MEGA** (50GB free)
- Use **Google Drive**
- Use **Internet Archive**
- Use **torrents** with magnet links

Update the download links in the ISO cards accordingly.

## 🎨 Customization

### Adding a New ISO

Edit `index.html` and add a new card in the appropriate section:

```html
<div class="iso-card">
    <div class="iso-icon">🐧</div>
    <h4>Your ISO Name</h4>
    <p class="iso-info">Size: X.X GB | Released: Month Year</p>
    <p class="iso-checksum">SHA256: [checksum here]</p>
    <a href="download-url" class="download-btn" data-iso="iso-name">Download</a>
</div>
```

### Changing Colors

Edit `styles.css` and modify the CSS variables:

```css
:root {
    --primary-color: #ff4444;  /* Main accent color */
    --secondary-color: #333;   /* Secondary color */
    --bg-color: #1a1a1a;       /* Background */
    --card-bg: #2a2a2a;        /* Card backgrounds */
    --text-color: #e0e0e0;     /* Text color */
    --accent-color: #ff6b6b;   /* Accent highlights */
}
```

## ⚖️ Legal Considerations

1. **Licensing**: Only share ISOs that are:
   - Open source and freely distributable
   - You have permission to share
   - Not violating copyright

2. **Safe Options**:
   - Linux distributions (Ubuntu, Fedora, Debian, etc.)
   - BSD systems (FreeBSD, OpenBSD, etc.)
   - Recovery tools (SystemRescue, GParted Live, etc.)
   - Legitimate free software

3. **DO NOT share**:
   - Pirated software
   - Windows ISOs without proper licensing
   - Commercial software you don't own

## 📊 File Size Limits

- GitHub Pages: 1GB total repository size recommended
- Individual files: Use Git LFS for files > 100MB
- GitHub Releases: 2GB per file
- For larger ISOs, use external hosting

## 🔧 Advanced Features

### Enable Download Analytics

Use GitHub Actions or external analytics to track downloads.

### Add Magnet Links

For torrent distribution, add magnet link support:

```html
<a href="magnet:?xt=urn:btih:..." class="download-btn">Torrent</a>
```

### Add Direct Download Mirrors

Provide multiple download sources for reliability.

## 📝 Maintenance

- Keep checksums updated
- Verify all download links monthly
- Update the "Last Updated" date
- Remove dead/outdated ISOs

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript
- GitHub Pages (hosting)

## 📞 Support

For issues or suggestions, open an issue on GitHub.

---

**Remember**: Always verify ISO checksums before use and respect software licenses!
