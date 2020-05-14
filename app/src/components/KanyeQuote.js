import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {fetchQuote} from '../store/fetchQuote'

const KanyeQuote = (props) => {
    useEffect(() => {
       props.fetchQuote()
},
[])
return (
    <div>
        <img src='https://cdn.trendhunterstatic.com/phpthumbnails/52/52980/52980_7_600.jpeg'></img>
        {props.isFetching && (<h2>getting quote</h2>)}
        {props.quote && (<h2>{props.quote}</h2>)}
        {props.error && (<h2>{props.error}</h2>)} 
    </div>
)
}

const mapStateToProps = state => {
    console.log(state)
    return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchQuote}
) (KanyeQuote);