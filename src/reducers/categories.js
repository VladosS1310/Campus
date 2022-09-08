const initialState = {isFetching: true, errors: {}, allData: []};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_CATEGORIES":
            return {...state, isFetching: true};
        case "GOT_CATEGORIES":
            return {isFetching: false, allData: [...action.payload]};
        case "FAILED_CATEGORIES":
            return {...state, isFetching: false, errors: {...action.payload}};
        default:
            return state;
    }
}

export default categories;