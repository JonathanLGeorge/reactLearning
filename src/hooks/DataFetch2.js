import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initailState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: '',
               
            }
        case 'FETCH_ERROR':
            return {
                loding: false,
                error: 'something went wrong',
                post: {},
                
            }
        default:
            return state
    }
}

function DataFetch2() {
    const [state, dispatch] = useReducer(reducer, initailState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        }).catch(error => {
           dispatch({type: "FETCH_ERROR"})
        })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetch2
