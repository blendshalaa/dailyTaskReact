/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from 'axios'
import './App.css'
function FetchData(){

    const[users,setUsers]=useState([]);
    const[comments,setComments]=useState([]);
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
       .then (res=>setUsers(res.data))
        .catch(err=>console.log('Error fetching users:',err));
    },[]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
       .then (res=>setComments(res.data))
        .catch(err=>console.log('Error fetching comments:',err));
    },[]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then (res=>setPosts(res.data))
        .catch(err=>console.log('Error fetching posts:',err));
    },[]);



return(
    <div className="dataTables">

   
    <div>
     <h2>Users:</h2>
     <ul>
     {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
     </ul>
    </div>

    <div>
     <h2>Comments:</h2>
     <ul>
     {comments.map(comment => (
            <li key={comment.id}>{comment.name}</li>
          ))}
     </ul>
    </div>


    <div>
     <h2>Posts:</h2>
     <ul>
     {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
     </ul>
    </div>


    </div>
)
}



export default FetchData