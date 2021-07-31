import React from 'react';
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer'

export interface AllFavoritesProps{
  favorites: Favorite[]
}

export interface Favorite {
  id: string
  title: string
  longTitle: string
  principalOrFirstMaker: string
  webImage: {
      url: string
  }
}

const Favorites: React.FC<AllFavoritesProps>= (props) => {



  return(
    <section className='favorites-container'>
      {eachFavorite}
    </section>
      
  )

}

export default Favorites;
