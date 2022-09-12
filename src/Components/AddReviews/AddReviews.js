import React from "react"
import "./AddReviews.css"
import {useEffect, useState} from "react"

function AddReviews(){
    const [details, setBooks] = useState([])
    const [users, setUsers] = useState([])
 
    useEffect(()=>{
        fetch("http://localhost:9292/books")
        .then(res=>res.json())
        .then((data) =>
        setBooks(data)   
        )
    },[])
    console.log(details)

    useEffect(()=>{
        fetch("http://localhost:9292/users")
        .then(res=>res.json())
        .then((data) =>
        setUsers(data)   
        )
    },[])
    
    const [resoption, setResopt] = useState("Book")
    const [uservalue, setUservalue] = useState("User")
    const [body, setBody] = useState("")
    const [formData, setFormData] = ([])

    function handleResChange(event) {
        setResopt(event.target.value)
      }
      
      function handleUserChange(event) {
        setUservalue(event.target.value)
      }

      function handlBodyChange(event) {
        setBody(event.target.value)
      }


     function handleSubmit(e){
        e.preventDefault();
        const createdReview ={
          restoption: resoption,
          body: body,
          uservalue:uservalue
        };

    
        fetch("http://localhost:9292/books",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(createdReview),
        })
        .then(res => res.json())
        .then(newp =>{
            setFormData(newp)
           
        })
      }
    return (
        <div className="commentForm">
         <h1>Your review</h1>
         <form className="Form">
            <label>Review</label>
            <select value={resoption} onchange={handleUserChange} name={resoption} className="review">
                {details.map((detail)=>(<option key={detail.Id}>{detail.name}</option>))}</select>

         <textarea value={body} placeholder="Add your comment about the book"  type="text" name="text" rows="10"  onchange={handlBodyChange} className="textarea"></textarea><br/>
         <input type="submit"className="submit" onClick={handleSubmit} />
         </form>
     </div>
     )
    
}

export default AddReviews