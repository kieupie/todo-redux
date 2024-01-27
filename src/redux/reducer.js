import { combineReducers } from 'redux';
import filtersReducer from '../components/Filters/filter-slice';
import todoListReducer from '../components/TodoList/todoList-slice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;