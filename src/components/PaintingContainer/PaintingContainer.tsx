
import React from 'react'
import { useState, useEffect } from 'react'

// export interface ArtProps {}

export interface ArtsyProps {
    id: string
    title: string
    artist: string
    longTitle: string
    webImage: {
        url: string
    }
    
}

const PaintingContainer: React.FC<ArtsyProps> = ({id, title, artist, longTitle, webImage}) => {

      return (
          
      <div className='match-container'>
          <h2>{longTitle}</h2>
          <h3>{artist}</h3>
          <img src={webImage.url} className={id} alt={title}></img>
          {/* longTitle={piece.longTitle}     */}
      </div>
      )
  }

export default PaintingContainer;
