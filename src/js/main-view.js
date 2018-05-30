function createTaskElement(task) {
  const $taskElement = $('<li class="list-group-item task"></li>');
  const $taskCompletedBtn = $('<input class="task-completed-btn mx-2" type="checkbox">').prop('checked', task.completed);
  const $taskDescription = $('<p class="task-description"></p>').text(task.description);
  const $deleteTaskBtn = $('<button type="button" class="close align-self-start delete-task-btn" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

  $($taskElement).append($taskCompletedBtn, $taskDescription, $deleteTaskBtn);

  return $taskElement;
}

function refillTaskList(view) {
  $('#task-list').empty();

  const tasks = view.taskStorageController.findAll();
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    $('#task-list').append(taskElement);
  });
}

export default class MainView {
  constructor(taskStorageController) {
    this.taskStorageController = taskStorageController;
  }

  initialize() {
    refillTaskList(this);

    const $newTaskForm = $('#new-task-form');
    $newTaskForm.bind('submit', (event) => {
      event.preventDefault();
      const description = $('#new-task-form #task-description').val();
      this.taskStorageController.addNewTask(description);
      refillTaskList(this);
      $newTaskForm.collapse('hide');
    });
  }
}
