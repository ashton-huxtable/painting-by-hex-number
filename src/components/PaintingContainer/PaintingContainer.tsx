
import React from 'react'
import { useState, useEffect } from 'react'
import './PaintingContainer.css'
// export interface ArtProps {}

export interface ArtsyProps {
    id: string
    title: string
    longTitle: string
    principalOrFirstMaker: string
    webImage: {
        url: string
    }
    getYear: any
}

const PaintingContainer: React.FC<ArtsyProps> = ({id, title, principalOrFirstMaker, longTitle, webImage}) => {
   
    const getYear = () => {
        let split = longTitle.split(',')
        let year = split[2]
        return year
    } 
      return (
          
      <div className='match-container'>
        <div className='each-piece'>
            <img className='image' src={webImage.url} alt={longTitle}></img>
                <div className='middle'>
                    <div className='text'>
                        <h3>{title}</h3>
                        <p>{principalOrFirstMaker}, {getYear()}</p>
                        <button className='fav-button'>Add to Favorites</button>
                    </div>
                </div>
        </div>
      </div>
      )
  }

export default PaintingContainer;

<div className='middle'>
<div className='text'></div>
</div>
