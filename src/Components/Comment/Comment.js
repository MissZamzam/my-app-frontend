import "./Comment.css"
import React from "react"
function Comment({author, name, body, user}){
   return( <>
        <div className="singleComment">
        <p>Name: {name}</p>
        <p>author: {author}</p>
        <p>Comment: {body}</p>
        <p>User: {user} </p>
        <div className="buttons">
        <button>Delete</button>
        <button>Edit</button>
        </div>
        </div>
        </>

)}
export default Comment