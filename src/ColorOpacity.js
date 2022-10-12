import { useEffect, useRef } from "react"
import * as Styled from "./styled"
import {
  getAlpha,
  getPointerNewCoords,
  getPointerԼimit,
  transformToValue,
} from "./utlis"

export const ColorOpacity = ({
  areaBgColor,
  pointerLeftPosition,
  onChange,
  onChangeEnd,
}) => {
  const opacityRef = useRef()

  const mouseMove = (e) => {
    const limit = getPointerԼimit(opacityRef.current)
    const [X] = getPointerNewCoords(e, opacityRef)
    onChange(X, getAlpha(transformToValue(X, limit.right)))
  }

  const mouseUp = () => {
    window.removeEventListener("mousemove", mouseMove)
    window.removeEventListener("mouseup", mouseUp)
    onChangeEnd()
  }

  const mouseDown = (e) => {
    mouseMove(e)
    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseup", mouseUp)
  }

  useEffect(() => {
    opacityRef.current.addEventListener("mousedown", mouseDown)
    return () => {
      opacityRef.current.removeEventListener("mousedown", mouseDown)
    }
  })
  return (
    <Styled.ColorOpacityWrapper ref={opacityRef}>
      <Styled.Pointer left={pointerLeftPosition} />
      <Styled.BgLattice />
      <Styled.BgMainGradient color={areaBgColor} />
    </Styled.ColorOpacityWrapper>
  )
}
