import { useEffect, useRef, useState } from "react"
import * as Styled from "./styled"
import { coordsToCoefficient, getPointerNewCoords } from "./utlis"

export const ColorArea = ({
  areaBgColor,
  pointerBgColor,
  pointerTopPosition,
  pointerLeftPosition,
  onChange,
  onChangeEnd,
}) => {
  const areaRef = useRef()

  const mouseMove = (e) => {
    const coords = getPointerNewCoords(e, areaRef)
    const [X, Y] = coordsToCoefficient(coords, areaRef)
    const Saturation = Math.round(X * 100)
    const Value = 100 - Math.round(Y * 100)
    onChange(Saturation, Value, coords)
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
    areaRef.current.addEventListener("mousedown", mouseDown)
    return () => {
      areaRef.current.removeEventListener("mousedown", mouseDown)
    }
  }, [])

  return (
    <Styled.ColorAreaWrapper ref={areaRef}>
      <Styled.AreaPointer
        color={pointerBgColor}
        top={pointerTopPosition}
        left={pointerLeftPosition}
      />
      <Styled.BgMain color={areaBgColor} />
      <Styled.BgWhite />
      <Styled.BgBlack />
    </Styled.ColorAreaWrapper>
  )
}
