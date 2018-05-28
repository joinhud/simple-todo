import '../sass/main.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import TaskStorage from './task-storage';
import TaskStorageService from './task-storage-service';
import TaskStorageController from './task-storage-controller';
import MainView from './main-view';

$(document).ready(() => {
  const taskStorage = new TaskStorage();
  const taskStorageService = new TaskStorageService(taskStorage);
  const taskStorageController = new TaskStorageController(taskStorageService);
  const mainView = new MainView(taskStorageController);
  mainView.initialize();
});
