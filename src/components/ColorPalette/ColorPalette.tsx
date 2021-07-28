import React from 'react';
import { SwatchesPicker } from 'react-color';
import { useState } from 'react';

export interface ColorResult {
  hex: string;
}

const ColorPalette: React.FC = () => {

  const [chosenColor, setChosenColor] = useState({})

  const handleChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
      setChosenColor(color.hex)
  }

  return(
    <div>
      <SwatchesPicker onChange={handleChange}/>
    </div>
  )
}

export default ColorPalette