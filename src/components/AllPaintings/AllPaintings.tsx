
import React from 'react';
import { useState, useEffect } from 'react';
import PaintingContainer from '../PaintingContainer/PaintingContainer';

export interface ArtProps {}

export interface Art {
    id: string
    title: string
    artist: string
    longTitle: string
    webImage: {
        url: string
    }
    
}

const AllPaintings: React.FC<ArtProps> = props => {
    const [art, setArt ] = useState<Art[]>([])

  const getAllArt = async (hexId: number) => {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let art = await response.json()
      setArt(art.artObjects)
      console.log(art.artObjects)
  }

  const eachArt = art.map(piece => {
    return (
        <PaintingContainer 
                key={piece.id} 
                id={piece.id} 
                longTitle={piece.longTitle}
                title={piece.title}
                webImage={piece.webImage}
                artist={piece.artist}
        />
    ) 
  })

  useEffect(() => {
    getAllArt(981313)
}, [])

      return (
          
      <div className='match-container'>
          {eachArt}
      </div>
      )
  }


export default AllPaintings;
