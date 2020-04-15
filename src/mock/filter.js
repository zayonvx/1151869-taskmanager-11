import {filterNames} from "../const.js";
import {isToday} from "../utils.js";

const generateFilters = (tasks) => {

  const countArchive = tasks.filter((it) => it.isArchive === true);
  const countFavorite = tasks.filter((it) => it.isFavorite === true);
  const countDays = tasks.filter((it) => Object.values(it.repeatingDays).some(Boolean));
  const countOverdue = tasks.filter((it) => it.dueDate instanceof Date && it.dueDate <= Date.now());
  const countTodayTasks = tasks.filter((it) => it.dueDate instanceof Date && isToday(it.dueDate));

  const filtersCount = [tasks.length, countArchive.length, countFavorite.length, countDays.length, countOverdue.length, countTodayTasks.length];

  return filterNames.map((it, index) => {
    return {
      name: it,
      count: filtersCount[index],
    };
  });
};


export {generateFilters};
