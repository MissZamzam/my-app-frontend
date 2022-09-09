import React from 'react'
import Comment from '../Comment/Comment'
import {useEffect, useState} from "react";



const Books = () => {
  const [books, setBook] = useState([])

    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(res=>res.json())
        .then((data) =>
        setBook(data)   
        )
    },[])
    console.log(books)

    const allComments = books.map((book)=>{
      return( <Comment  key={book.id}
        name={book.name}
        author ={book.author}
        body = {book.reviews.map(review => {
            return review.body     
        })}
         user = {book.reviews.map(review => {
            return review.user.name

         })}

        />)
    })
    return(
    <>
    <div className="allCommnets">
    {allComments}
    </div>
    </>
    )
  



  
}

export default Books