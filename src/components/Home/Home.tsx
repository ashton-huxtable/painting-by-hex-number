
import React from 'react'
import { useState, useEffect } from 'react'

interface ArtProps {
}

export interface Art {
    id: string
    title: string
    webImage: string
    artist: string
    longTitle: string
    
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
      return(
      <div>
          key={piece.id}
          id={piece.id}
          title={piece.title}
          artist={piece.artist}
          longTitle={piece.longTitle}    
      </div>
      )
  })

    useEffect(() => {
        getAllArt(981313)
    }, [])

    return (
        <main>
            <h1>HELLO WORLD</h1>
            <p>{eachArt}</p>
        </main>
    )
}

export default Home

// export const getAllArt = (hexId: number) => {
//     return fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
//     .then(response => response.json())
//     .catch(error => error)
// }