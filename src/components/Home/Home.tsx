
import React from 'react'
import { useState, useEffect } from 'react'

interface ArtProps {}

export interface Art {
    id: string
    title: string
    artist: string
    longTitle: string
    webImage: {
        url: string
    }
    
}

const Home: React.FC<ArtProps> = props => {
    const [art, setArt ] = useState<Art[]>([])

  const getAllArt = async (hexId: number) => {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let art = await response.json()
      setArt(art.artObjects)
      console.log(art.artObjects)
  }

  const eachArt = art.map(piece => {
       <div>
        key={piece.id} 
        id={piece.id} 
      </div>

      return (
          
      <div className='match-container'>
          <h2>{piece.title}</h2>
          <h3>{piece.artist}</h3>
          <img src={piece.webImage.url} alt={piece.longTitle}></img>
          {/* longTitle={piece.longTitle}     */}
      </div>
      )
  })

    useEffect(() => {
        getAllArt(981313)
    }, [])

    return (
        <main>
            {eachArt}
        </main>
    )
}

export default Home
