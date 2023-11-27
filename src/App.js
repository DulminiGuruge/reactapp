
import './App.css';
import HomePage from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import {Routes,Route,Link } from 'react-router-dom';
import MealsProvider from './components/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import { useReducer } from 'react';

function Heading() { 
  return ( 
    <h2>Hello</h2> 
  ) 
} 
const reducer = (state,action)=>{
  if(action.type === 'ride') return {money:state.money + 10};
  if(action.type === 'fuel') return {money: state.money - 50};
  return new Error();
}

function App() { 

  const initialState = {money:100}
  const[state,dispatch] = useReducer(reducer,initialState);




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
      <div>
        <MealsProvider>
          <MealsList />
          <Counter />
        
        </MealsProvider>

      </div>
      <br/>
      <div>
        <h1>Wallet:{state.money}</h1>

        <button onClick = {()=> dispatch ({type:'ride'})}>A new customer!</button>
        <button onClick = {()=>dispatch({type:'fuel'})}>Refill the tank!</button>

      </div>
    </div> 
  ); 
} 
 


export default App;
