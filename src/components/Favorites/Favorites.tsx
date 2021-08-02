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
   
    const getYear = () => {
      let split = favorite.longTitle.split(',')
      let year = split[split.length - 1]
      return year
  } 
     
    return(
      <FavoriteContainer 
        id={favorite.id} 
        key={favorite.id} 
        longTitle={favorite.longTitle}
        title={favorite.title}
        webImage={favorite.webImage}
        getYear={getYear()}
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
