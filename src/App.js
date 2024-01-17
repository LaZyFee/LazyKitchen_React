import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Meal from './Components/Meal/Meal';
import Footer from './Components/Footer/Footer';

function App() {

  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  };




  return (
    <div className="App">
      <Header count={count}></Header>
      <Body></Body>
      <Meal countIncrease={countIncrease}></Meal>
      <Footer></Footer>
    </div>
  );
}

export default App;
