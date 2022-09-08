import {createBrowserHistory} from 'history';

export const validationInput = (setInputValue, e) => {
    let regular = /^[0-9]*$/g;
    if(regular.test(e.target.value)) {
        setInputValue(e.target.value);
    }
};

export const transformedArrayImages = (array) => {
    return array.map((item) => {
        return {
            original: item,
            thumbnail: item
        };
    })
};

export const history = createBrowserHistory();