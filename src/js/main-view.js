function createTaskElement(task) {
  const $taskElement = $('<li class="list-group-item task"></li>').prop('id', task.id);
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

function completeTaskHandler(event) {
  const $completeCheckbox = $(event.target);
  const $taskElement = $completeCheckbox.closest('.task');
  const id = $taskElement.closest('.task').prop('id');
  const completed = $completeCheckbox.prop('checked');
  event.data.controller.changeTaskStatus(id, completed);
}

export default class MainView {
  constructor(taskStorageController) {
    this.taskStorageController = taskStorageController;
  }

  initialize() {
    refillTaskList(this);

    const $newTaskForm = $('#new-task-form');

    $newTaskForm.on('shown.bs.collapse', () => {
      $('#task-description').focus();
    });

    $newTaskForm.bind('submit', (event) => {
      event.preventDefault();
      const description = $('#new-task-form #task-description').val();
      this.taskStorageController.addNewTask(description);
      refillTaskList(this);
      $newTaskForm.collapse('hide');
    });

    $('#task-list').on('click', '.task-completed-btn', { controller: this.taskStorageController }, completeTaskHandler);
  }
}
