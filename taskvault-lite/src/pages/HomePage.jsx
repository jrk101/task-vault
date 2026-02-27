import { useState, useEffect } from 'react';
import { taskService } from '../services/taskService';
import '../styles/HomePage.css';

export default function HomePage({ onAddTask, onViewTask }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = () => {
      setTasks(taskService.getTasks());
    };
    loadTasks();
  }, []);

  return (
    <div className="home-page">
      <div className="home-header">
        <h2>Your Tasks</h2>
        <button className="btn-add-task" onClick={onAddTask}>
          + Add New Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks yet. Create your first task to get started!</p>
        </div>
      ) : (
        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-number">{task.number}</div>
              <div className="task-info">
                <p className="task-date">{task.dateCreated}</p>
                <h3 
                  className="task-title" 
                  onClick={() => onViewTask(task.id)}
                >
                  {task.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}