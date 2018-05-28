export default class TaskStorageService {
  constructor(storage) {
    this.storage = storage;
  }

  findTaskById(id) {
    return this.storage.getTaskById(id);
  }

  findAllTasks() {
    return this.storage.getTasks();
  }

  findAllUncompletedTasks() {
    return this.storage.getTasks().filter(task => !task.isCompleted());
  }

  addNewTask(task) {
    this.storage.addTask(task);
  }

  deleteTask(task) {
    this.storage.deleteTaskById(task.getId());
  }

  updateTask(task) {
    this.storage.updateTaskById(task);
  }
}
