import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';


import Routes from './Routes'; 

function App() {

  return (
    <>
     

      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
      
    </>
  );

}

export default App;
