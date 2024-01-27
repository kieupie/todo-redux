const initState = [
  { id: 1, name: 'Learn Redux', completed: false, priority: 'Medium' },
  { id: 2, name: 'Learn Nodejs', completed: true, priority: 'High' },
  { id: 3, name: 'Learn MongoDB', completed: false, priority: 'Low' },
];


const todoListReducer = (state = initState, action) => {
        /**
     * Example of action
     * {
     *  type: 'todoList/addTodo',
     *  payload: { id: 4, name: 'Learn json', completed: true, priority: 'Medium'},
     * }
     */

console.log({ state, action });

    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload];

        case 'todoList/toggleTodoStatus':
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
};

export default todoListReducer;