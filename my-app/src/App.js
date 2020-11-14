import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = '3f56839b';
  const APP_KEY = '680f32662e776eca58f997ba9fab02ec';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
