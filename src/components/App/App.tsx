import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../Home/Home'
import PaintingContainer from '../PaintingContainer/PaintingContainer'; 
import AllPaintings from '../AllPaintings/AllPaintings';  


function App() {
  return (
    <div>
      <h1 className='title'>Paint by (hex) Numbers</h1>
      {/* <Home /> */}
      {/* <PaintingContainer /> */}
      <AllPaintings/>
    </div>
  );
}


// 'https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23')


export default App;
