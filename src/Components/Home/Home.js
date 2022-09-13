import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
        <div id="home-content">
          <h1 className='novel'><span>N</span>ovellic <span>O</span>nline <span>L</span>ibrary <span>📚</span></h1>
         <div className='hr'>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          </div>
       </div>
       <div className='icons'>
        <p>“ So many books, so little time ” ~ Frank Zappa</p>
       
       </div>
    </div>
  )
}

export default Home