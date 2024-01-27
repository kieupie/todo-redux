import { combineReducers } from "redux";
import filtersReducer from "../components/Filters/filter-slice";
import todoListReducer from "../components/TodoList/todoList-slice";


// Options 1
// const rootReducer = (state = {}, action) => {
//     console.log({ state, action });

//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     }
// }


// Option 2 with combineReducers
const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;