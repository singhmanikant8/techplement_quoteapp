import logo from './logo.svg';
import React from 'react';
import './App.css';
import QuoteOfDay from './Components/QuoteOfTheDay';
import SearchQuotes from './Components/SearchQuotes';

function App() {
  return (
    <div className='App'>
      <SearchQuotes/>
      <QuoteOfDay/>
    </div>
  );
}

export default App;
