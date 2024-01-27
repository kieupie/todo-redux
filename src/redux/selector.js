import { createSelector } from '@reduxjs/toolkit';
/*createSelector
* cải thiện performance, nếu các dữ liệu như: todoList, status, searchText, priorities không có sự thay đổi 
* thì todosRemainingSelector sẽ không được thực thi lại
* ~~~~ useCallback, useMemo ghi nhớ lại được object và chỉ tính toán lại khi có sự thay đổi dependency
*/

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);