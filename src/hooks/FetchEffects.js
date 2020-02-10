//suspence will be incharge of data fetching in react?
//for now we will use axios

import React, {useEffect, useState} from 'react'
import axios from 'axios'

function FetchEffects() {
    //const [posts, setPosts] = useState([]);//([]) will initialixz posts to an empty array
    const [post, setPost] = useState({});//empty object instead of array

    //another state var for single pg posts starting with 1
    const [id, setId] = useState(1);
    //get request returns a promis 
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res);
            setPost(res.data); //updates the post state variable wich will then re render in UI
            setPost(res.data); 
        })
        .catch(error => {
            console.log(error)
        })
    }, [id]) //dont forget the empyt dependencey list, otherwise infinite loop..
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <div>
                {post.title}
            </div>
            {/*<ul>

                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
                </ul> */}
        </div>
    )
}

export default FetchEffects
//fetching data from https://jsonplaceholder.typicode.com/