# TaskVault Lite

A modern, lightweight personal task organizer built with React and Vite. Store all your tasks with rich content including descriptions, links, and images—all saved securely in your browser's localStorage.

## Features

- **Task Management**: Create, view, and organize your personal tasks
- **Rich Task Content**: Add titles, descriptions, multiple links, and images to each task
- **Image Preview**: Upload images with instant preview before saving
- **Auto-numbering**: Tasks are automatically numbered (1, 2, 3...)
- **Timestamps**: Each task records its creation date
- **Local Storage**: All data persists in your browser—no backend required
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, minimal interface with smooth navigation

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx          # Task list view
│   ├── AddTaskPage.jsx       # Create new task form
│   └── TaskDetailPage.jsx    # View task details
├── services/
│   └── taskService.js        # localStorage management
├── styles/
│   ├── HomePage.css
│   ├── AddTaskPage.css
│   └── TaskDetailPage.css
├── App.jsx                   # Main app routing
├── App.css                   # Global app styles
├── index.css                 # Global styles & theme
└── main.jsx                  # Entry point
```

## How It Works

### Data Storage
- All tasks are stored as a JSON array in browser localStorage
- Images are encoded as base64 strings for storage
- Data persists across browser sessions

### Core Pages

**Home Page**
- Displays all tasks in a card list
- Shows task number, creation date, and title
- Click any task title to view details
- "Add New Task" button to create tasks

**Add Task Page**
- Form with required Title field
- Optional Description, Links, and Images
- Multiple links can be added
- Images upload with instant preview
- Save or cancel to return home

**Task Detail Page**
- Full task information display
- Clickable links that open in new tabs
- Image gallery with responsive layout
- Back button to return to home

## Local Storage Schema

Tasks are stored in localStorage with key `taskvault_tasks`:

```json
[
  {
    "id": 1709123456789,
    "number": 1,
    "title": "Task title",
    "description": "Task description",
    "links": ["https://example.com"],
    "images": ["data:image/jpeg;base64,..."],
    "dateCreated": "Jan 1, 2024"
  }
]
```

## Technology Stack

- **React 19**: Modern UI framework
- **Vite**: Fast build tool and dev server
- **localStorage API**: Browser-native data persistence
- **CSS3**: Modern responsive styling

## Browser Compatibility

Works in all modern browsers that support:
- ES6+ JavaScript
- localStorage API
- FileReader API
- CSS Grid and Flexbox

## Features Included

✅ Create tasks with title, description, links, and images
✅ View task list with auto-numbered cards
✅ Click to view full task details
✅ Image upload with preview
✅ Multiple links per task
✅ Responsive mobile design
✅ localStorage persistence
✅ No authentication required
✅ No backend needed
✅ Clean, modern UI

## Notes

- This is a frontend-only application
- All data stored locally in your browser
- Clearing browser data will delete tasks
- No data is sent to any server
- Works completely offline after first load