const STORAGE_KEY = 'taskvault_tasks';

export const taskService = {
  getTasks: () => {
    try {
      const tasks = localStorage.getItem(STORAGE_KEY);
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error('Failed to get tasks:', error);
      return [];
    }
  },

  saveTasks: (tasks) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  },

  addTask: (task) => {
    const tasks = taskService.getTasks();
    const taskNumber = tasks.length + 1;
    
    const newTask = {
      id: Date.now(),
      number: taskNumber,
      title: task.title,
      description: task.description || '',
      links: task.links || [],
      images: task.images || [],
      dateCreated: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    tasks.push(newTask);
    taskService.saveTasks(tasks);
    return newTask;
  },

  getTaskById: (id) => {
    const tasks = taskService.getTasks();
    return tasks.find(task => task.id === id);
  }
};