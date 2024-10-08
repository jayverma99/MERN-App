import logo from './logo.svg';
import './App.css';
import Profile from './profile'
import React, { useState } from 'react';


const user = {
  name: 'jay',
  age: '28',
  color: 'green'
}

function App() {
  const [x, setX] = useState(0);
  function getItem(){
    setX(x + 1);
  }
  function remove(){
    setX(x - 1);
  }
  function square(){
    setX(x*x);
  }
  function reset(){
    setX(0);
  }


  return (
    <>
      <div style={{
        display: 'flex',
        background: 'red',
        justifyContent: 'space-around'
      }}>
        <Profile />
        <Profile />
      </div>
      <div>
        <h1>Name-{user.name} Age-{user.age} <span style={{color:user.color}}>Face</span></h1>
        <button onClick={getItem}>add number</button>
        <button onClick={remove}>remove number</button>
        <button onClick={square}>squre number</button>
        <button onClick={reset}>reset number</button>

        <div>
          <p>{x}</p>

        </div>
      </div>
    </>
  );
}

export default App;
