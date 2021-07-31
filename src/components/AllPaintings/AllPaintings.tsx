
import React from 'react';
import Favorites from '../Favorites/Favorites';
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

export interface FavoritesProps {
    addToFavorites: (artId: string) => void
  }

const AllPaintings: React.FC<ArtProps & FavoritesProps> = (props) => {

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
                addToFavorites={props.addToFavorites}

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
