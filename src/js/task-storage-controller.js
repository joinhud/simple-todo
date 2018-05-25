import Task from './task';

export default class TaskStorageController {
  constructor(taskStorageService) {
    this.taskStorageService = taskStorageService;
  }

  findAll() {
    return this.taskStorageService.findAllTasks();
  }

  findAllUncompleted() {
    return this.taskStorageService.findAllUncompletedTasks();
  }

  addNewTask(description) {
    const task = new Task(description);
    this.taskStorageService.addNewTask(task);
  }

  deleteTaskById(id) {
    const task = this.taskStorageService.findTaskById(id);

    if (task) {
      this.taskStorageService.deleteTask(task);
    }
  }
}
