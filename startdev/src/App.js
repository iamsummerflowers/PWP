
import React, { useState } from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Main/Home.js';
import About from './Main/About.js';
import Footer from './Footer/Footer.js';


function App() {

  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-full flex flex-col">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {/* <Main /> */}
        <main className="flex-grow">
            {currentPage === 'home' && <Home />}
            {currentPage === 'about' && <About />}
            {/* {currentPage === 'village-sunday' && <VillageSundayPage />} */}
        </main>
        <Footer />
    </div>
);
}

export default App;
