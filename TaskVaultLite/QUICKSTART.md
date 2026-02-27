# TaskVault Lite - Quick Start Guide

## Installation

```bash
cd TaskVaultLite
npm install
```

## Run Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## How to Use

### Create Your First Task

1. Click **"+ Add New Task"** button
2. Enter a task title (e.g., "Project Meeting Notes")
3. (Optional) Add a description
4. (Optional) Add links to resources
5. (Optional) Upload images
6. Click **"Save Task"**

### View Your Tasks

- All tasks appear on the Home page
- Each task shows a number, date, and title
- Click any title to view full details

### View Task Details

- Click on a task title
- See the full description, links, and images
- Links are clickable and open in a new tab
- Click **"Back"** to return to the home page

## Data Location

All your tasks are stored in browser localStorage under the key: `taskvault_tasks`

Open browser DevTools to inspect:
1. Open DevTools (F12)
2. Go to Application → Local Storage
3. Look for the key `taskvault_tasks`

## Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder. Deploy the `dist` folder to your web server.

## Features

✨ **No login required** - Everything is stored locally on your device
✨ **No internet needed** - Works completely offline
✨ **Instant saving** - All changes saved automatically
✨ **Multiple tasks** - Add unlimited tasks
✨ **Rich content** - Add descriptions, links, and images
✨ **Responsive** - Works on desktop, tablet, and mobile

## Troubleshooting

**Tasks disappeared?**
- Clear browser cache → tasks are gone (localStorage only)
- Use private/incognito mode → tasks lost when window closes
- Switch browsers → each browser has separate storage

**Can't upload images?**
- Check file is actually an image
- Check browser allows file access
- Check not exceeding localStorage quota (usually ~5-10MB)

**Want to backup your tasks?**
- Open DevTools → Application → Local Storage
- Find `taskvault_tasks` → copy the value
- Save to a text file for backup

## Tips

💡 Use the description field for detailed notes
💡 Add multiple links to keep resources organized
💡 Upload screenshots to visually document your work
💡 Task dates auto-generate on creation
💡 Task numbers auto-increment

## Need Help?

See `README.md` for full documentation and technical details.

Happy organizing! 🚀