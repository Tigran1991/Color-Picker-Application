import { useEffect, useRef, useState } from "react"
import { ColorArea } from "./ColorArea"
import { ColorHexCode } from "./ColorHexCode"
import { ColorList } from "./ColorList"
import { ColorOpacity } from "./ColorOpacity"
import { ColorRange } from "./ColorRange"
import * as Styled from "./styled"
import {
  RGBAtoHSVA,
  RGBAToStr,
  strToRGBA,
  HSVAtoRGBA,
  RGBAToHex,
  setHexCodeValue,
} from "./utlis"

let HSVA = {
  h: 0,
  s: 0,
  v: 0,
  a: 1,
}

let RGBA = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
}

export const ColorPicker = ({ color, colorList, onChange, onChangeEnd }) => {
  const [areaPointerCoords, setAreaPointerCoords] = useState([])
  const [rangePointerCoord, setRangePointerCoord] = useState()
  const [opacityPointerCoord, setOpacityPointerCoord] = useState(252)

  const hexCodeRef = useRef()

  RGBA = strToRGBA(color)
  HSVA = RGBAtoHSVA(RGBA)

  const rangeRef = useRef()

  useEffect(() => {
    updatePointersCoords()
    setHexCodeValue(hexCodeRef.current, RGBAToHex(RGBA))
  }, [])

  const updatePointersCoords = () => {
    setAreaPointerCoords([(HSVA.s / 100) * 280, ((100 - HSVA.v) / 100) * 126])
    setRangePointerCoord((HSVA.h / 360) * 252)
    setOpacityPointerCoord(HSVA.a * 252)
  }

  const changeAreaColorAndPointerPosition = (saturation, value, coords) => {
    HSVA.s = saturation
    HSVA.v = value
    RGBA = HSVAtoRGBA(HSVA)
    const [X, Y] = coords
    setAreaPointerCoords([X, Y])
    onChange(RGBAToHex(RGBA))
    setHexCodeValue(hexCodeRef.current, RGBAToHex(RGBA))
  }

  const changeRangeColorAndPointerPosition = (X, hue) => {
    HSVA.h = hue
    RGBA = HSVAtoRGBA(HSVA)
    setRangePointerCoord(X)
    onChange(RGBAToHex(RGBA), hue)
    setHexCodeValue(hexCodeRef.current, RGBAToHex(RGBA))
  }

  const changeOpacityAndPointerPosition = (X, opacity) => {
    HSVA.a = opacity
    RGBA.a = opacity
    setOpacityPointerCoord(X)
    onChange(RGBAToHex(RGBA))
    setHexCodeValue(hexCodeRef.current, RGBAToHex(RGBA))
  }

  const changeColor = (rgba) => {
    RGBA = rgba
    HSVA = RGBAtoHSVA(rgba)
    updatePointersCoords()
    onChangeEnd(RGBAToHex(RGBA))
    setHexCodeValue(hexCodeRef.current, RGBAToHex(RGBA))
  }

  const changeEnd = () => {
    onChangeEnd(RGBAToHex(RGBA))
  }

  return (
    <Styled.ColorPickerWrapper>
      <ColorArea
        areaBgColor={HSVA.h}
        pointerBgColor={RGBAToStr(HSVAtoRGBA(HSVA), false)}
        pointerTopPosition={areaPointerCoords[1]}
        pointerLeftPosition={areaPointerCoords[0]}
        onChange={changeAreaColorAndPointerPosition}
        onChangeEnd={changeEnd}
      />
      <Styled.Container>
        <ColorRange
          pointerLeftPosition={rangePointerCoord}
          rangeRef={rangeRef}
          onChange={changeRangeColorAndPointerPosition}
          onChangeEnd={changeEnd}
        />
        <ColorOpacity
          areaBgColor={RGBAToStr(HSVAtoRGBA(HSVA), false)}
          pointerLeftPosition={opacityPointerCoord}
          onChange={changeOpacityAndPointerPosition}
          onChangeEnd={changeEnd}
        />
        <ColorHexCode hexCodeRef={hexCodeRef} onChange={changeColor} />
        <ColorList colorList={colorList} onChange={changeColor} />
      </Styled.Container>
    </Styled.ColorPickerWrapper>
  )
}
