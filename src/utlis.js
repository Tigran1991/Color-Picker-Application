export const getAlpha = (value) => value / 100

export const transformToValue = (number, max) => parseInt((100 / max) * number)

export const strToRGBA = (str) => {
  const regex =
    /^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i
  let match, rgba

  const ctx = document.createElement("canvas").getContext("2d")
  ctx.fillStyle = str
  match = regex.exec(ctx.fillStyle)

  if (match) {
    rgba = {
      r: match[3] * 1,
      g: match[4] * 1,
      b: match[5] * 1,
      a: match[6] * 1,
    }

    rgba.a = +rgba.a.toFixed(2)
  } else {
    match = ctx.fillStyle
      .replace("#", "")
      .match(/.{2}/g)
      .map((h) => parseInt(h, 16))
    rgba = {
      r: match[0],
      g: match[1],
      b: match[2],
      a: 1,
    }
  }

  return rgba
}

export const RGBAtoHSVA = (rgba) => {
  const red = rgba.r / 255
  const green = rgba.g / 255
  const blue = rgba.b / 255
  const xmax = Math.max(red, green, blue)
  const xmin = Math.min(red, green, blue)
  const chroma = xmax - xmin
  const value = xmax
  let hue = 0
  let saturation = 0

  if (chroma) {
    if (xmax === red) {
      hue = (green - blue) / chroma
    }
    if (xmax === green) {
      hue = 2 + (blue - red) / chroma
    }
    if (xmax === blue) {
      hue = 4 + (red - green) / chroma
    }
    if (xmax) {
      saturation = chroma / xmax
    }
  }

  hue = Math.floor(hue * 60)

  const hsva = {
    h: hue < 0 ? hue + 360 : hue,
    s: Math.round(saturation * 100),
    v: Math.round(value * 100),
    a: rgba.a,
  }
  return hsva
}

export const RGBAToStr = (rgba, isAlpha = true) => {
  if (!isAlpha || rgba.a === 1) {
    return `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`
  } else {
    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
  }
}

export const HSVAtoRGBA = (hsva) => {
  const saturation = hsva.s / 100
  const value = hsva.v / 100
  let chroma = saturation * value
  let hueBy60 = hsva.h / 60
  let x = chroma * (1 - Math.abs((hueBy60 % 2) - 1))
  let m = value - chroma

  chroma = chroma + m
  x = x + m

  const index = Math.floor(hueBy60) % 6
  const red = [chroma, x, m, m, x, chroma][index]
  const green = [x, chroma, chroma, x, m, m][index]
  const blue = [m, m, x, chroma, chroma, x][index]

  return {
    r: Math.round(red * 255),
    g: Math.round(green * 255),
    b: Math.round(blue * 255),
    a: hsva.a,
  }
}

export const RGBAToHex = (rgba) => {
  let R = rgba.r.toString(16)
  let G = rgba.g.toString(16)
  let B = rgba.b.toString(16)
  let A = ""

  if (rgba.r < 16) {
    R = "0" + R
  }

  if (rgba.g < 16) {
    G = "0" + G
  }

  if (rgba.b < 16) {
    B = "0" + B
  }

  if (rgba.a < 1) {
    const alpha = (rgba.a * 255) | 0
    A = alpha.toString(16)

    if (alpha < 16) {
      A = "0" + A
    }
  }

  return "#" + R + G + B + A
}

export const setHexCodeValue = (element, value) => {
  element.value = value
}

export const getPointerԼimit = (areaEl) => {
  const areaRect = areaEl.getBoundingClientRect()
  return {
    top: 0,
    bottom: parseInt(areaRect.height),
    left: 0,
    right: parseInt(areaRect.width),
  }
}

export const getPointerNewCoords = (event, area) => {
  const areaEl = area.current
  const areaBorder = getPointerԼimit(areaEl)
  const { x, y } = areaEl.getBoundingClientRect()
  let X = event.clientX - x
  let Y = event.clientY - y

  if (X < areaBorder.left) {
    X = areaBorder.left
  } else if (X > areaBorder.right) {
    X = areaBorder.right
  }
  if (Y < areaBorder.top) {
    Y = areaBorder.top
  } else if (Y > areaBorder.bottom) {
    Y = areaBorder.bottom
  }

  return [X, Y]
}

export const coordsToCoefficient = ([X, Y], area) => {
  const areaEl = area.current
  const areaRect = areaEl.getBoundingClientRect()
  return [X / areaRect.width, Y / areaRect.height]
}
