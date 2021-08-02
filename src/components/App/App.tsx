import Home from '../Home/Home' 
import { NavLink, Link } from 'react-router-dom'
import React from 'react';
import './App.css';


function App() {
  return (
    <main>
      <header>
        <nav>
          <Link className='home-link' to='/'>
            <h1 className='header-title'>Paint by<span className='three'>(hex)</span><span>Numbers</span></h1>
          </Link>
          <NavLink className='fav-link' to='/favorites'>My Collection</NavLink>
        </nav>
        <section className='subheading'>
          <p className='subtext'>View collections of art from the Rijks Museum that match corresponding hex codes</p>
        </section>
      </header>
      <Home/>
    </main>
  );
}

export default App;
