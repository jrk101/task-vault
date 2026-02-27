import { useState } from 'react';
import { taskService } from '../services/taskService';
import '../styles/AddTaskPage.css';

export default function AddTaskPage({ onTaskAdded, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState(['']);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const addLinkField = () => {
    setLinks([...links, '']);
  };

  const removeLinkField = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks.length === 0 ? [''] : newLinks);
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setImages(prev => [...prev, base64]);
        setImagePreviews(prev => [...prev, base64]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreviews(imagePreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }

    const filteredLinks = links.filter(link => link.trim() !== '');

    try {
      taskService.addTask({
        title: title.trim(),
        description: description.trim(),
        links: filteredLinks,
        images: images
      });
      onTaskAdded();
    } catch (error) {
      alert('Failed to save task. Please try again.');
    }
  };

  return (
    <div className="add-task-page">
      <div className="form-header">
        <h2>Add New Task</h2>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            maxLength="100"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="4"
            maxLength="1000"
          />
        </div>

        <div className="form-group">
          <label>Links</label>
          {links.map((link, index) => (
            <div key={index} className="link-input-group">
              <input
                type="url"
                value={link}
                onChange={(e) => handleLinkChange(index, e.target.value)}
                placeholder="https://example.com"
              />
              {links.length > 1 && (
                <button
                  type="button"
                  className="btn-remove"
                  onClick={() => removeLinkField(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn-add-link"
            onClick={addLinkField}
          >
            + Add Link
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="images">Images</label>
          <div className="image-upload">
            <input
              id="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="image-input"
            />
            <label htmlFor="images" className="upload-label">
              Click to upload images
            </label>
          </div>

          {imagePreviews.length > 0 && (
            <div className="image-previews">
              <p className="previews-label">Uploaded Images:</p>
              <div className="previews-grid">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="preview-item">
                    <img src={preview} alt={`Preview ${index + 1}`} />
                    <button
                      type="button"
                      className="btn-remove-image"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-save">
            Save Task
          </button>
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}