import React from 'react';
import { ColorPickerProps } from 'react-color';
import { SwatchesPicker } from 'react-color';
import { useState } from 'react';

export interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
  colors?: string[][] | undefined;
  height?: number | undefined;
  width?: number | undefined;
  // styles?: Partial<Classes<SwatchesPickerStylesProps>> | undefined;
  onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export interface ColorResult {
  hex: string;
}

const ColorPalette: React.FC = () => {

  const [ chosenColor, setChosenColor] = useState('')
  const [ customColors, setCustomColors ] = useState<SwatchesPickerProps[]>([])

  const handleChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
      setChosenColor(color.hex)
      console.log(chosenColor)
  }

  const newColors = () => {
    colors: setCustomColors([])
  }

  const colorHex = chosenColor.split('#') 
  console.log(colorHex[1])

  return(
    <div>
      <SwatchesPicker onChange={handleChange} />
    </div>
  )
}



export default ColorPalette