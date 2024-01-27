const initialState = [
    {
        id: 1,
        name: 'Learn Redux',
        completed: false,
        prioriry: 'Medium',
    },
    {
        id: 2,
        name: 'Learn Nodejs',
        completed: true,
        prioriry: 'High',
    },
    {
        id: 3,
        name: 'Learn MongoDB',
        completed: false,
        prioriry: 'Low',
    }
];

const todoListReducer = (state = initialState, action) => {
    /**
     * Example of action
     * {
     *  type: 'todoList/addTodo',
     *  payload: { id: 4, name: 'Learn json', completed: true, prioriry: 'Medium'},
     * }
     */

    console.log({ state, action });

    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload,
            ]
        default:
            return state;
    }
}

export default todoListReducer;