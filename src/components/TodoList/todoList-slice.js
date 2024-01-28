import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todoList',
    /**  initialState là một arr lưu trữ:
     * [] => {status: '', todos: []}
     * trạng thái status (pedding/fullfilled/rejected)
     * lưu trữ lại todos
     */
    initialState: {
        status: 'idle',
        todos: []
    },
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
    },

    // extraReducers
    extraReducers: builder => {
        //TH: Vừa gọi fetchTodos chưa có dữ liệu trả về từ API
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'idle';
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                let currentTodo = state.todos.find((todo) => todo.id === action.payload);
                currentTodo = action.payload;
            });
    }
});

/**  thunk function creator
* createAsyncThunk tạo ra 3 action tương ứng với 3 trạng thái của Promise
* todos/fetchTodos/pedding: Khi vừa gửi request
* todos/fetchTodos/fullfilled
* todos/fetchTodos/rejected 
*/

//Thunk action creator
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
        const res = await fetch('/api/todos');
        const data = await res.json();
        console.log('[fetchTodos]', { data });
        return data.todos;
    })

//Thunk action creator
export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async (newTodo) => {
        const res = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        console.log('[addNewTodo]', { data });
        return data.todos;
    }
);

//Thunk action creator
export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (updatedTodo) => {
        const res = await fetch('/api/updateTodos', {
            method: 'POST',
            body: JSON.stringify(updatedTodo),
        });

        const data = await res.json();
        console.log('[updateTodo]', { data })
        return data.todos;
    }
);

export default todosSlice;