const host = process.env.NODE_ENV === 'development' ? "https://jsonplaceholder.typicode.com/users"
    : "http://campus.majex.com.ua/jq_index.php?a=getCategories";

export const getCategoriesAction = () => async (dispatch) => {
    dispatch({type: "FETCHING_CATEGORIES"});
    try{
        let response = await fetch(host);
        let json = await response.json();
        dispatch({type: "GOT_CATEGORIES", payload: json});
    } catch (e) {
        dispatch({type: "FAILED_CATEGORIES", payload: {message: e.message}});
    }
};
