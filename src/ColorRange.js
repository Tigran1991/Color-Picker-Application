import { useEffect, useRef } from "react"
import * as Styled from "./styled"
import { getPointerNewCoords, getPointerԼimit } from "./utlis"

export const ColorRange = ({
  pointerLeftPosition,
  rangeRef,
  onChange,
  onChangeEnd,
}) => {
  const mouseMove = (e) => {
    const limit = getPointerԼimit(rangeRef.current)
    const [X] = getPointerNewCoords(e, rangeRef)
    console.log(X)
    const hue = Math.round((X / limit.right) * 360)
    onChange(X, hue)
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
    rangeRef.current.addEventListener("mousedown", mouseDown)
    return () => {
      rangeRef.current.removeEventListener("mousedown", mouseDown)
    }
  }, [])

  return (
    <Styled.ColorRangeWrapper ref={rangeRef}>
      <Styled.Pointer left={pointerLeftPosition} />
      <Styled.BgRange />
    </Styled.ColorRangeWrapper>
  )
}
