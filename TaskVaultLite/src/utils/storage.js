const STORAGE_KEY = 'taskvault_tasks';

export const getTasks = () => {
  try {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Error reading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const addTask = (task) => {
  const tasks = getTasks();
  const nextId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
  
  const newTask = {
    id: nextId,
    taskNumber: tasks.length + 1,
    title: task.title,
    description: task.description || '',
    links: task.links || [],
    images: task.images || [],
    dateCreated: new Date().toISOString(),
  };
  
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
};

export const getTaskById = (id) => {
  const tasks = getTasks();
  return tasks.find(task => task.id === id);
};

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};