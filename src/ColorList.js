import * as Styled from "./styled"
import { strToRGBA } from "./utlis"

export const ColorList = ({ colorList, onChange }) => {
  const clickOnColor = (e) => {
    const index = parseInt(e.target.id)
    onChange(strToRGBA(colorList[index]))
  }

  return (
    <Styled.ColorListWrapper>
      {colorList.map((color, index) => {
        return (
          <Styled.ColorListItem
            color={color}
            key={index}
            id={`${index}-item`}
            onClick={clickOnColor}
          />
        )
      })}
    </Styled.ColorListWrapper>
  )
}
