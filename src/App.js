import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './Components/Card';
import Footer from './Components/footer';
import Cards from './Components/Cards';
import Landing from './Pages/Landing';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {

  return (
    <div className='App'>
     <Router>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;