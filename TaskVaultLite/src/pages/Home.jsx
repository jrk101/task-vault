import { useState, useEffect } from 'react';
import { getTasks, formatDate } from '../utils/storage';
import '../styles/home.css';

export default function Home({ onNavigate }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadedTasks = getTasks();
    setTasks(loadedTasks);
  }, []);

  const handleAddTask = () => {
    onNavigate('add-task');
  };

  const handleTaskClick = (taskId) => {
    onNavigate('task-detail', taskId);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>TaskVault Lite</h1>
        <p>Your personal task organizer</p>
      </header>

      <main className="home-main">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <h2>No tasks yet</h2>
            <p>Create your first task to get started</p>
          </div>
        ) : (
          <div className="tasks-grid">
            {tasks.map((task) => (
              <div key={task.id} className="task-card">
                <div className="task-number">#{task.taskNumber}</div>
                <div className="task-meta">
                  <span className="task-date">{formatDate(task.dateCreated)}</span>
                </div>
                <h3
                  className="task-title"
                  onClick={() => handleTaskClick(task.id)}
                >
                  {task.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        <button className="btn-add-task" onClick={handleAddTask}>
          + Add New Task
        </button>
      </main>
    </div>
  );
}