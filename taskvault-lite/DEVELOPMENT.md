# TaskVault Lite - Development Guide

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` with hot module replacement enabled.

## Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Preview Production Build
```bash
npm run preview
```

## Project Architecture

### Component Structure

- **App.jsx**: Main routing and navigation handler
  - Manages page state (home, add, detail)
  - Handles navigation between pages

- **HomePage.jsx**: Task list display
  - Loads all tasks from localStorage
  - Shows task cards with number, date, and title
  - Handles task selection

- **AddTaskPage.jsx**: Task creation form
  - Form validation (title required)
  - Image upload with FileReader API
  - Multiple links support
  - Auto-saves to localStorage on submit

- **TaskDetailPage.jsx**: Task details view
  - Displays full task information
  - Shows image gallery
  - Renders clickable links

### Services

- **taskService.js**: localStorage management
  - `getTasks()`: Retrieve all tasks
  - `saveTasks()`: Save tasks array
  - `addTask()`: Create and save new task
  - `getTaskById()`: Find specific task

### Styling Strategy

- **index.css**: Global theme variables and reset styles
- **App.css**: Main layout and structure
- **Component CSS files**: Component-specific styling

## Key Features Implementation

### localStorage Persistence
Tasks are automatically saved to localStorage whenever a new task is added. The service handles JSON serialization/deserialization.

### Image Handling
Images are converted to base64 strings using the FileReader API, allowing them to be stored directly in localStorage alongside other task data.

### Responsive Design
Uses CSS Grid and Flexbox with mobile-first breakpoints:
- Desktop (>768px): Full layout
- Mobile (<768px): Stacked layout, full-width buttons

### Auto-numbering
Task numbers are calculated based on array position when tasks are loaded or added.

## localStorage Schema

```javascript
{
  taskvault_tasks: [
    {
      id: number (timestamp),
      number: number (sequential),
      title: string (required),
      description: string,
      links: string[],
      images: string[] (base64),
      dateCreated: string (formatted date)
    }
  ]
}
```

## Browser DevTools Testing

### Clear Data
```javascript
localStorage.removeItem('taskvault_tasks');
```

### View Stored Data
```javascript
console.log(JSON.parse(localStorage.getItem('taskvault_tasks')));
```

### Simulate Tasks
```javascript
const sampleTasks = [
  {
    id: Date.now(),
    number: 1,
    title: "Sample Task",
    description: "Test description",
    links: ["https://example.com"],
    images: [],
    dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
];
localStorage.setItem('taskvault_tasks', JSON.stringify(sampleTasks));
```

## Performance Considerations

- Lazy loading not needed due to expected small dataset
- CSS is minified in production build
- React 19 provides automatic optimization
- localStorage operations are fast for typical use cases
- Image base64 encoding provides predictable memory usage

## Accessibility

- Semantic HTML structure
- Focus visible styles on all interactive elements
- Proper label associations
- Color contrast meets WCAG standards
- Mobile touch-friendly button sizes

## Known Limitations

- No edit functionality (by design)
- No delete functionality (by design)
- localStorage has typical browser limits (usually 5-10MB)
- Base64 images increase storage size (~33% overhead)
- No image compression or resizing

## Future Enhancements

- Add TypeScript for type safety
- Implement task search/filtering
- Add task categories or tags
- Dark mode support
- Export/import functionality
- Task editing capabilities
- Drag-to-reorder
- Task templates