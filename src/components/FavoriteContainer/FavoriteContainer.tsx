import React from "react";

export interface EachFavoriteProps {
  id: string
  title: string
  longTitle: string
  principalOrFirstMaker: string
  webImage: {
      url: string
  }
  year: string
}

const FavoriteContainer: React.FC<EachFavoriteProps> = 
  ({id, title, longTitle, principalOrFirstMaker, webImage, year}) => {
  return (
   
    <article className='each-favorite'>
        <img className='image' src={webImage.url} alt={longTitle}></img>
            <div className='middle'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p>{principalOrFirstMaker}, {year}</p>
                </div>
            </div>
      </article>
  )

}

export default FavoriteContainer