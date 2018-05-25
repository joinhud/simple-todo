export default class Task {
  constructor(description = '') {
    this.id = -1;
    this.description = description;
    this.completed = false;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setDescription(description = '') {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  completeTask() {
    this.completed = true;
  }

  isCompleted() {
    return this.completed;
  }
}
