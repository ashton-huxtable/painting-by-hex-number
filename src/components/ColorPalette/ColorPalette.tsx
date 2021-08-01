import React from 'react';
import { SwatchesPicker } from 'react-color';
import { useState, useEffect } from 'react';
import CSS from 'csstype'

export interface ColorResult {
  hex: string;
}
export interface ColorProps {
  handleColorClick: (hexId: string) => void
}

const  colorSwatchContainer: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '3em'

}



const ColorPalette: React.FC<ColorProps> = (props) => {
  const [ chosenColor, setChosenColor] = useState('');
  const handleChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event.target)
    setChosenColor(color.hex)
  }
  
  const passColorToHome = (chosenColor: string) => {
    if (!chosenColor) {
      return null 
    } else {
      let colorHex: string = (chosenColor.split('#')[1]).toUpperCase();
      props.handleColorClick(colorHex)
    }
  }

  useEffect(() => {
    passColorToHome(chosenColor)
  }, [chosenColor])

  const myColors: string[][] = [ ['#981313', '#B35A1F', '#E09714', '#FFEB00'], 
  ['#DF4C93', '#F49B7A', '#DDA5AA', '#DAAFDA'], 
  ['#000000', '#737C84', '#B5BFCC', '#F6ECF3'],
  ['#4019B1', '#4279DB', '#8268DC', '#850085'],
  ['#2F4F4F', '#367614', '#62AD77', '#E0CC91'] 
]

const myHeight: number = 130

  return(
    <div style= {colorSwatchContainer}>
      <SwatchesPicker height={myHeight} colors={myColors} onChange={handleChange} />
    </div>
  )
}
export default ColorPalette