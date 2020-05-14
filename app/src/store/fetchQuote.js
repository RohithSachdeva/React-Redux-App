import axios from 'axios';

export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_QUOTE_START' })
        axios
        .get('https://api.kanye.rest') 
        .then(res => {
            console.log(res)
            dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data.quote })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: 'FETCH_QUOTE_ERROR', payload: err})
        })
    }
}

