import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import TaskDetailPage from './pages/TaskDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleNavigate = (page, taskId = null) => {
    setCurrentPage(page);
    if (taskId) {
      setSelectedTaskId(taskId);
    }
  };

  const handleTaskAdded = () => {
    handleNavigate('home');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>TaskVault Lite</h1>
      </header>
      
      <main className="app-main">
        {currentPage === 'home' && (
          <HomePage 
            onAddTask={() => handleNavigate('add')}
            onViewTask={(taskId) => handleNavigate('detail', taskId)}
          />
        )}
        
        {currentPage === 'add' && (
          <AddTaskPage 
            onTaskAdded={handleTaskAdded}
            onCancel={() => handleNavigate('home')}
          />
        )}
        
        {currentPage === 'detail' && (
          <TaskDetailPage 
            taskId={selectedTaskId}
            onBack={() => handleNavigate('home')}
          />
        )}
      </main>
    </div>
  );
}