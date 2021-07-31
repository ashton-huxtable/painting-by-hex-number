import React from 'react';

import './App.css';
import Home from '../Home/Home' 


function App() {
  return (
    <div>
      <header>
        <nav>
        <h1 className='header-title'>Paint By<span className='three'>(hex)</span><span>Numbers</span></h1>
        </nav>
        <section className='subheading'>
          <p className='subtext'>View collections of art from the Rijks Museum that match corresponding hex codes</p>
        </section>
      </header>
      
      <Home />
      {/* <PaintingContainer /> */}
      {/* <AllPaintings/> */}
    </div>
  );
}


// 'https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23')


export default App;
