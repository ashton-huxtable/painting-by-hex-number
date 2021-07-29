
import React from 'react'
import './Home.css'
import { useState } from 'react'
import ColorPalette from '../ColorPalette/ColorPalette'
import AllPaintings from '../AllPaintings/AllPaintings'


const Home: React.FC = () => {
    
    const [art, setArt ] = useState([])

  const getAllArt = async (hexId: string) => {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let currentArt = await response.json()
    setArt(currentArt.artObjects)
      console.log(art)
  }

    const handleColorClick = (hexId: string) => {
        getAllArt(hexId)
     }

    return (
        <main>
            <ColorPalette handleColorClick={handleColorClick}/>
            <AllPaintings art={art}/>
        </main>
    )
}

export default Home
