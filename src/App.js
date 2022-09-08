import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Homecomponent from './Components/Home';
import './App.css';

function App() {
  return (
    <>
   <div class="container">
  <div class="navbar"><Navbar/></div>
  <div class="sidebar"><Sidebar/></div>
  <div class="side-navbar" style={{backgroundColor:'black'}}><img  style={{width:"100px"}} src='/icons/TaxAdda-img.png'></img></div>
  <div class="main-container"></div>
</div>
    </>
  );
}

export default App;
