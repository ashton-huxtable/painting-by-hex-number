import React from 'react';
import './App.css';
import Home from '../Home/Home' 
import { NavLink, Link } from 'react-router-dom'



function App() {
  return (
    <main>
      <header>
        <nav>
        <Link to='/'>
          <h1 className='header-title'>Paint By<span className='three'>(hex)</span><span>Numbers</span></h1>
        </Link>
        <NavLink to='/favorites'>My Favs</NavLink>
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
