
import React from 'react';
import { useState, useEffect } from 'react';
import PaintingContainer from '../PaintingContainer/PaintingContainer';

export interface ArtProps {
    art: Art[],
}

export interface Art {
       id: string
        title: string
        longTitle: string
        principalOrFirstMaker: string
        webImage: {
            url: string
        }

}


const AllPaintings: React.FC<ArtProps> = (props) => {

  const eachArt = props.art.map((piece: Art) => {

    const getYear = () => {
        let split = piece.longTitle.split(',')
        let year = split[2]
        return year
    } 

    return (
        <PaintingContainer 
                key={piece.id} 
                id={piece.id} 
                longTitle={piece.longTitle}
                title={piece.title}
                webImage={piece.webImage}
                getYear={getYear()}
                principalOrFirstMaker={piece.principalOrFirstMaker}

        />
    ) 
  })

      return (
          
      <div className='match-container'>
          {eachArt}
      </div>
      )
  }


export default AllPaintings;
