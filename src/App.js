
import './App.css';
import HomePage from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import {Routes,Route,Link } from 'react-router-dom';

function Heading() { 
  return ( 
    <h2>Hello</h2> 
  ) 
} 

function App() { 
  return ( 
    <div className="App"> 
    <nav className="nav">
      <Link to="/" className="nav-item">Home page</Link>
      <Link to="/about-me" className ="nav-item">About Me</Link>
    </nav>
    <Routes>
      <Route path = "/" element={<HomePage/>}></Route>
      <Route path="/about-me" element={<AboutMe/>}></Route>
    </Routes>
      
      <Heading /> 
    </div> 
  ); 
} 
 


export default App;
