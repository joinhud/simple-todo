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

  changeTaskStatus(id, completed) {
    const task = this.taskStorageService.findTaskById(id);
    task.isCompleted(completed);
    this.taskStorageService.updateTask(task);
  }

  addNewTask(description) {
    const task = new Task({ description });
    this.taskStorageService.addNewTask(task);
  }

  deleteTaskById(id) {
    const task = this.taskStorageService.findTaskById(id);

    if (task) {
      this.taskStorageService.deleteTask(task);
    }
  }
}
