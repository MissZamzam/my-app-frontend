import React, { useState, useEffect } from 'react'
import './Reviews.css'

function Reviews(){
    const [comments, setComments] =useState([])
    const[formData, setFormData] = useState({
        name:"",
        author:"", 
    })


    
    useEffect(()=>{
        fetch("https://phase-3-project-backend.herokuapp.com/books")
        .then((res)=> res.json())
        .then((data) =>{
         setComments(data)
        },[comments,setComments])
        
    },[]);

    const allComments = comments.map((comment) =>{
        return (
           <div key={comment.id} className="displayComment">
                 <p className='edit'>Name:  {comment.name}</p>
                 <p className='edit'>Author:  {comment.author}</p>
                 <button>Delete</button>
                 <button>Edit</button>
                 
           </div>
           
        )
    })


    //Handle Change and submit
    function handleCommentChange(e){
        setFormData({
            ...formData, [e.target.name]:e.target.value
          });
    }
    function handleSubmit(e){
        e.preventDefault();
        const createdComment ={
          name:formData.name,
          author:formData.author
        };


    
        fetch("https://phase-3-project-backend.herokuapp.com/books",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(createdComment),
        })
        .then(res => res.json())
        .then(newp =>{
            const newComments =  [...comments, newp]
            setComments(newComments);
            setFormData({
              ...formData,
              name:"",
              author:""
            })
        })
      }
      
    return(

     <div className="commentForm">
         <h2>Books</h2>
         <form className="updateForm">
         <textarea value={formData.name} placeholder="Title" name="name" onChange={handleCommentChange} rows="4" className='text' ></textarea><br/>
         <input value={formData.author} placeholder="Author" name="author"  onChange={handleCommentChange} className="box"></input><br/>
         <input type="submit"className="submit"  onClick={handleSubmit}/>
         </form>
         <hr></hr>
         <div className='res'>
         {allComments}
         </div>
     </div>
     )
}
export default Reviews