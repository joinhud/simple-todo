import generateId from './id-generator';

function updateStorage(tasks) {
  const stringifiedTasks = JSON.stringify(tasks);
  window.localStorage.setItem('tasks', stringifiedTasks);
}

export default class TaskStorage {
  constructor() {
    try {
      this.tasks = JSON.parse(window.localStorage.getItem('tasks'));
    } catch (e) {
      this.tasks = {};
    }
  }

  setTasks(tasks = {}) {
    this.tasks = tasks;
  }

  getTasks() {
    return Object.values(this.tasks);
  }

  getTaskById(id) {
    return this.tasks[id];
  }

  addTask(task) {
    const id = generateId();
    task.setId(id);
    this.tasks[id] = task;
    updateStorage(this.tasks);
  }

  deleteTaskById(id) {
    delete this.tasks[id];
    updateStorage(this.tasks);
  }

  updateTaskById(task) {
    const id = task.getId();

    if (this.tasks[id]) {
      this.tasks[id] = task;
      updateStorage(this.tasks);
    }
  }
}
