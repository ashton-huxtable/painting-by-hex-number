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

  const eachFavorite = props.favorites.map((favorite: Favorite) => {
    let year = favorite.longTitle.split(',')[2]
     
    return(
      <FavoriteContainer 
        id={favorite.id} 
        key={favorite.id} 
        longTitle={favorite.longTitle}
        title={favorite.title}
        webImage={favorite.webImage}
        year={year}
        principalOrFirstMaker={favorite.principalOrFirstMaker}
      />
    
    )
  })

  return(
    <section className='favorites-container'>
      {eachFavorite}
    </section>
      
  )

}

export default Favorites;
