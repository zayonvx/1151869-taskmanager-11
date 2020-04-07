import {createMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const MainElement = document.querySelector(`.main`);
const HeaderElement = MainElement.querySelector(`.main__control`);

render(HeaderElement, createMenuTemplate());
render(MainElement, createFilterTemplate());
render(MainElement, createBoardTemplate());

const taskListElement = MainElement.querySelector(`.board__tasks`);
const boardElement = MainElement.querySelector(`.board`);

render(taskListElement, createTaskEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate());
}

render(boardElement, createLoadMoreButtonTemplate());
