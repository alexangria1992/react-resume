import React from 'react';
import './App.css';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Services from './components/Services';
import About from "./components/About"

function App() {
  return (
    <div>
      <Banner/>
      <Nav/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
