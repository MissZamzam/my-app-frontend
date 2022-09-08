import React from "react"
import "./AddReviews.css"
import {useEffect, useState} from "react"
function AddReviews(){
    const [details, setBooks] = useState([])
    const [users, setUsers] = useState([])
 
    useEffect(()=>{
        fetch("")
        .then(res=>res.json())
        .then((data) =>
        setBooks(data)   
        )
    },[])
    console.log(details)

    useEffect(()=>{
        fetch("")
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

    
        fetch("",{
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
         <h1>Add review</h1>
         <form className="Form">
            <label>Book</label>
            <select value={resoption} onchange={handleResChange} name={resoption}>
                {details.map((detail)=>(<option key={detail.Id} >{detail.name}</option>))}</select>

         <textarea value={body} placeholder="Comment"  type="text" name="text" rows="10"  onchange={handlBodyChange}></textarea><br/>
         <input type="submit"className="submit" onClick={handleSubmit} />
         </form>
     </div>
     )
    
}

export default AddReviews