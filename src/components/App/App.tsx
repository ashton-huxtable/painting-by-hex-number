import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../Home/Home'
import PaintingContainer from '../PaintingContainer/PaintingContainer'; 
import AllPaintings from '../AllPaintings/AllPaintings';  


function App() {
  return (
    <div>
      <nav>
      <h1><span className='one cursive'>Paint </span><span className='two cursive'> By ^</span><span className='three cursive'>(hex) </span><span className='four cursive'>Numbers</span></h1>
      </nav>
      <Home />
      {/* <PaintingContainer /> */}
      <AllPaintings/>
    </div>
  );
}


// 'https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23')


export default App;
