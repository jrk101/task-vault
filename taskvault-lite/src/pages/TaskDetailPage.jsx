import { useState, useEffect } from 'react';
import { taskService } from '../services/taskService';
import '../styles/TaskDetailPage.css';

export default function TaskDetailPage({ taskId, onBack }) {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const loadTask = () => {
      const loadedTask = taskService.getTaskById(taskId);
      setTask(loadedTask);
    };
    loadTask();
  }, [taskId]);

  if (!task) {
    return (
      <div className="task-detail-page">
        <div className="detail-header">
          <button className="btn-back" onClick={onBack}>
            ← Back
          </button>
        </div>
        <p className="loading-message">Task not found</p>
      </div>
    );
  }

  return (
    <div className="task-detail-page">
      <div className="detail-header">
        <button className="btn-back" onClick={onBack}>
          ← Back
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-meta">
          <span className="task-number">Task #{task.number}</span>
          <span className="task-date">{task.dateCreated}</span>
        </div>

        <h1 className="detail-title">{task.title}</h1>

        {task.description && (
          <div className="detail-section">
            <h2>Description</h2>
            <p className="detail-description">{task.description}</p>
          </div>
        )}

        {task.links && task.links.length > 0 && (
          <div className="detail-section">
            <h2>Links</h2>
            <div className="links-list">
              {task.links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-item"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}

        {task.images && task.images.length > 0 && (
          <div className="detail-section">
            <h2>Images</h2>
            <div className="images-gallery">
              {task.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Task image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}