const initialState = [];


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return action.payload;
        case 'FILTER_PRODUCTS':
            return action.payload;
    }
    return state;
};

export default productsReducer;
