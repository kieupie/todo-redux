const initState = {
  search: '',
  status: 'All',
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  /**
* Example of action
* {
*      type: 'filters/searchFilterChange',
*      {
          search: 'Learn JavaScript',
          status: 'All',
          priorities: [],
      },
* }
*/
  switch (action.type) {
    case 'filters/searchFilterChange':
      return {
        ...state,
        search: action.payload,
      };

    case 'filters/statusFilterChange':
      return {
        ...state,
        status: action.payload
      }

    case 'filters/prioritiesFilterChange':
      return {
        ...state,
        priorities: action.payload
      }
    default:
      return state;
  }
};

export default filtersReducer;