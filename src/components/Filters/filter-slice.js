const initialState = {
    search: '',
    status: 'All',
    prioriry: [],
}
const filtersReducer = (state = initialState, action) => {
    /**
     * Example of action
     * {
     *      type: 'filters/searchFilterChange',
     *      {
                search: 'Learn JavaScript',
                status: 'All',
                prioriry: [],
            },
     * }
     */

    console.log({ state, action });

    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}

export default filtersReducer;