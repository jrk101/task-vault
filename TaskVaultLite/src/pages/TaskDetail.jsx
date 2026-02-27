import { useState, useEffect } from 'react';
import { getTaskById, formatDate } from '../utils/storage';
import '../styles/task-detail.css';

export default function TaskDetail({ taskId, onNavigate }) {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const loadedTask = getTaskById(taskId);
    setTask(loadedTask);
  }, [taskId]);

  if (!task) {
    return (
      <div className="task-detail-container">
        <p>Task not found</p>
      </div>
    );
  }

  const handleBack = () => {
    onNavigate('home');
  };

  return (
    <div className="task-detail-container">
      <header className="task-detail-header">
        <button onClick={handleBack} className="btn-back">
          ← Back
        </button>
        <h1>Task #{task.taskNumber}</h1>
      </header>

      <main className="task-detail-main">
        <article className="task-detail-content">
          <div className="task-detail-section">
            <h2>{task.title}</h2>
            <p className="task-meta">Created: {formatDate(task.dateCreated)}</p>
          </div>

          {task.description && (
            <div className="task-detail-section">
              <h3>Description</h3>
              <p className="task-description">{task.description}</p>
            </div>
          )}

          {task.links && task.links.length > 0 && (
            <div className="task-detail-section">
              <h3>Links</h3>
              <ul className="links-list">
                {task.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="task-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {task.images && task.images.length > 0 && (
            <div className="task-detail-section">
              <h3>Images</h3>
              <div className="images-gallery">
                {task.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`Task ${task.taskNumber} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}