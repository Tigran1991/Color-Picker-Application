import * as Styled from "./styled"
import { ColorPicker } from "./ColorPicker"

export const Input = ({ color, colorList, onChange, onChangeEnd }) => {
  const change = (updatedColor) => {
    onChange(updatedColor)
  }

  const changeEnd = (updatedColor) => {
    onChangeEnd(updatedColor)
  }

  return (
    <Styled.ColorInputWrapper color={color}>
      <ColorPicker
        color={color}
        colorList={colorList}
        onChange={change}
        onChangeEnd={changeEnd}
      />
    </Styled.ColorInputWrapper>
  )
}
