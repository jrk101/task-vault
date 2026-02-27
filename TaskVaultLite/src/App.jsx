import { useState } from 'react';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';
import './styles/app.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [refreshTasks, setRefreshTasks] = useState(false);

  const navigate = (page, taskId = null) => {
    setCurrentPage(page);
    if (taskId !== null) {
      setSelectedTaskId(taskId);
    }
  };

  const handleTaskAdded = () => {
    setRefreshTasks(!refreshTasks);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} key={refreshTasks} />;
      case 'add-task':
        return <AddTask onNavigate={navigate} onTaskAdded={handleTaskAdded} />;
      case 'task-detail':
        return <TaskDetail taskId={selectedTaskId} onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;