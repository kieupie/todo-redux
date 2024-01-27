import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filter-slice';
import todosSlice from '../components/TodoList/todoList-slice';

//Đã tích hợp sẵn middleware (composeWithReduxDevtools)
const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer,
    },
});

export default store;