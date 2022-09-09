import './App.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';
import Navbar from './Components/Navbar/Navbar';
import Books from './Components/Books/Books';
import AddReviews from './Components/AddReviews/AddReviews';



   function App() {
//   const [form, setForm] = useState({book: "", review:"", id:null })
//   const [reviews, setReviews] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>

      <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='Reviews' element={<Reviews />}/>
      <Route path='add' element={<AddReviews />}/>
      <Route path='Books' element={<Books />}/>
      
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;