import { useState, useRef } from 'react';
import { addTask } from '../utils/storage';
import '../styles/add-task.css';

export default function AddTask({ onNavigate, onTaskAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState(['']);
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const fileInputRef = useRef(null);

  const handleAddLink = () => {
    setLinks([...links, '']);
  };

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleRemoveLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setImages((prev) => [...prev, base64]);
        setPreview((prev) => [...prev, { base64, name: file.name }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreview(preview.filter((_, i) => i !== index));
  };

  const handleSaveTask = () => {
    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }

    const filteredLinks = links.filter((link) => link.trim());

    const taskData = {
      title: title.trim(),
      description: description.trim(),
      links: filteredLinks,
      images: images,
    };

    addTask(taskData);
    onTaskAdded?.();
    onNavigate('home');
  };

  const handleCancel = () => {
    onNavigate('home');
  };

  return (
    <div className="add-task-container">
      <header className="add-task-header">
        <h1>Create New Task</h1>
      </header>

      <main className="add-task-main">
        <form className="add-task-form">
          <div className="form-group">
            <label htmlFor="title">Task Title *</label>
            <input
              id="title"
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Add details about your task (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Links</label>
            <div className="links-section">
              {links.map((link, index) => (
                <div key={index} className="link-input-row">
                  <input
                    type="url"
                    placeholder="Enter link URL"
                    value={link}
                    onChange={(e) => handleLinkChange(index, e.target.value)}
                    className="form-input"
                  />
                  {links.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveLink(index)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddLink}
                className="btn-secondary"
              >
                + Add Another Link
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Images</label>
            <div className="image-upload">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="btn-secondary"
              >
                + Upload Images
              </button>
            </div>

            {preview.length > 0 && (
              <div className="preview-gallery">
                {preview.map((item, index) => (
                  <div key={index} className="preview-item">
                    <img src={item.base64} alt={`preview-${index}`} />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="btn-remove-image"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={handleSaveTask}
              className="btn-primary"
            >
              Save Task
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}