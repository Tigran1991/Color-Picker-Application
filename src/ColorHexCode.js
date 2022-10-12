import * as Styled from "./styled"
import { strToRGBA } from "./utlis"

export const ColorHexCode = ({ hexCodeRef, onChange }) => {
  const change = (e) => {
    if (e.code === "Enter") {
      onChange(strToRGBA(e.target.value))
    }
  }

  return (
    <Styled.ColorHexCodeWrapper
      contentEditable="true"
      onKeyDown={change}
      ref={hexCodeRef}
    ></Styled.ColorHexCodeWrapper>
  )
}
