export default class MainView {
  constructor(taskStorageController) {
    this.taskStorageController = taskStorageController;
  }

  initialize() {
    $('new-task-form').bind('submit', (event) => {
      event.preventDefault();

      this.taskStorageController.addNewTask($('new-task-form task-description').val());
    });
  }
}
