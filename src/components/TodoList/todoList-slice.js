import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Redux', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Nodejs', completed: true, priority: 'High' },
        { id: 3, name: 'Learn MongoDB', completed: false, priority: 'Low' },
    ],
    reducers: {
        /** tự tạo ra action creators có type bằng với name (ở đây là filters)
       * không phụ thuộc và file action (bỏ file redux/action)
       * function addTodo () {
       *  return {
       *         type: 'todoList/addTodo',
       *  }
       * }
       * 
       ** cho phép viết code mutation nhưng hoạt động như một immutable
       */
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        // action creators
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        }
    }
});