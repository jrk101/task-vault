# TaskVault Lite

A modern, responsive single-page task organizer built with React and Vite. All data is stored locally in your browser using localStorage.

## Features

- **Add Tasks**: Create tasks with titles, descriptions, multiple links, and images
- **Task List**: View all tasks with task numbers and creation dates
- **Task Details**: Click on any task to view full details including images and clickable links
- **Persistent Storage**: All tasks are automatically saved to browser localStorage
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Modern UI**: Clean, polished interface with smooth navigation

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## How to Use

### Home Page
- View all your tasks in a card grid layout
- Each task shows a task number, creation date, and title
- Click on any task title to view its full details
- Click "Add New Task" to create a new task

### Adding a Task
1. Click "Add New Task" button on the home page
2. Enter a task title (required)
3. Add an optional description
4. Add multiple links if needed
5. Upload images for the task
6. Click "Save Task" to create the task

### Viewing Task Details
1. From the home page, click on any task title
2. View the full task details including:
   - Task title and creation date
   - Description (if provided)
   - All associated links (clickable)
   - All uploaded images in a gallery view
3. Click "Back" to return to the home page

## Data Storage

TaskVault Lite stores all data in your browser's localStorage as JSON. No data is sent to any server.

- **Storage Key**: `taskvault_tasks`
- **Format**: JSON array of task objects
- **Data Persistence**: Data persists across browser sessions

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- localStorage API
- CSS Grid and Flexbox

## Technical Stack

- **React 19**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Styling with CSS Grid and Flexbox
- **localStorage**: Client-side data storage

## Architecture

```
src/
├── App.jsx                 # Main app component with routing logic
├── index.css              # Global styles
├── main.jsx               # Entry point
├── pages/
│   ├── Home.jsx          # Home page with task list
│   ├── AddTask.jsx       # Add/create task form
│   └── TaskDetail.jsx    # Task detail view
├── styles/
│   ├── app.css           # Global app styles
│   ├── home.css          # Home page styles
│   ├── add-task.css      # Add task form styles
│   └── task-detail.css   # Task detail styles
└── utils/
    └── storage.js        # localStorage utility functions
```

## No Backend Required

This is a completely client-side application. It:
- Does not require any backend server
- Does not use any external API
- Does not connect to any database
- Works completely offline

All data remains on your device in your browser's localStorage.