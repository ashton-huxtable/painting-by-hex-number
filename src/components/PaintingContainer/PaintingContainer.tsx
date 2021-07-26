// import React from 'react';
import React, { FC } from 'react';

interface Props {
    longTitle: string,
    webImage: string, 
    title: string,
    id: string,
    artist: string
}


const PaintingContainer: FC<Props> = ({longTitle, webImage, title, id, artist}) => {
    return (
        <>
          {/* <img
            className="painting-image"
            // src={image}
            // alt={``}
          /> */}
        </>

    );
  };
  
  export default PaintingContainer;
  