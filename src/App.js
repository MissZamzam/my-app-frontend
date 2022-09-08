import logo from './logo.svg';
import './App.css';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books';
import AddReviews from './components/AddReviews/AddReviews';



   function App() {
//   const [form, setForm] = useState({resturant: "", review:"", id:null })
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