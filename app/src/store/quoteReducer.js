const initialState = {
    quote: '',
    isFetching: false,
    error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_QUOTE_START':
        return {
            ...state,
            isFetching: true
        }
    
    case 'FETCH_QUOTE_SUCCESS':
        return {
            ...state,
            isFetching: false,
            quote: action.payload
        }
        case 'FETCH_QUOTE_ERROR':
            return {
                ...state,
                quote: '',
                isFetching: false,
                error: action.payload
            }
            default: 
            return state
        }
}


