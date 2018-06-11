export default class Task {
  constructor({ id = -1, description = '', completed = false }) {
    this.id = id;
    this.description = description;
    this.completed = completed;
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

  isCompleted(completed) {
    this.completed = completed;
  }
}
