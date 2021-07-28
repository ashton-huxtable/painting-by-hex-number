import React from 'react';
import { SwatchesPicker } from 'react-color';
import { useState } from 'react';


export interface ColorResult {
  hex: string;
}

const ColorPalette: React.FC = () => {

  const [ chosenColor, setChosenColor] = useState('')
  // const [ customColors, setCustomColors ] = useState()

  const handleChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
      setChosenColor(color.hex)
      console.log(chosenColor)
  }

  const myColors: string[][] = [ ['#981313', '#B35A1F', '#E09714', '#FFEB00'], 
  ['#DF4C93', '#F49B7A', '#DDA5AA', '#DAAFDA'], 
  ['#000000', '#737C84', '#B5BFCC', '#F6ECF3'],
  ['#4019B1', '#4279DB', '#8268DC', '#850085'],
  ['#2F4F4F', '#367614', '#62AD77', '#E0CC91'] 
]

  const colorHex = chosenColor.split('#') 
  console.log(colorHex[1])

  return(
    <div>
      <SwatchesPicker colors={myColors} onChange={handleChange} />
    </div>
  )
}



export default ColorPalette