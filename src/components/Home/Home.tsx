
import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'
import ColorPalette from '../ColorPalette/ColorPalette'

export interface ArtProps {}

export interface Art {
    id: string
    title: string
    longTitle: string
    principalOrFirstMaker: string
    webImage: {
        url: string
    }
    
}

const Home: React.FC<ArtProps> = props => {
    const [art, setArt ] = useState<Art[]>([])

  const getAllArt = async (hexId: string) => {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let art = await response.json()
      setArt(art.artObjects)
      console.log(art.artObjects)
  }


  const eachArt = art.map(piece => {

    const getYear = () => {
        let split = piece.longTitle.split(',')
        let year = split[2]
        return year
    } 


       <div>
            key={piece.id} 
            id={piece.id} 
       </div>

      return (  
          <div className='match-container'>
            <div className='each-piece'>
                <img src={piece.webImage.url} alt={piece.longTitle}></img>
                <h2>{piece.title}</h2>
                <p>{piece.principalOrFirstMaker}, {getYear()}</p>
            </div>
          {/* longTitle={piece.longTitle}     */}
      </div>
      )
  })

    useEffect(() => {
        getAllArt('981313')
    }, [])

    return (
        <main>
            <ColorPalette />
            {/* {eachArt} */}
        </main>
    )
}

export default Home
