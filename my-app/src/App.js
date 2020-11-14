import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = '3f56839b';
  const APP_KEY = '680f32662e776eca58f997ba9fab02ec';




  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
