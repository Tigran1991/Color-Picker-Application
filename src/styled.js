import styled from "styled-components"

export const ColorInputWrapper = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => props.color};
`

export const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  left: 60px;
  width: 280px;
  height: 300px;
  border-radius: 3px;
  border: 1px solid grey;
  background-color: ${(props) => props.color};
`

export const ColorView = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 400px;
  width: 200px;
  height: 200px;
  border: 1px solid #333;
  background-color: ${(props) => props.color};
`

export const ColorAreaWrapper = styled.div`
  display: flex;
  position: relative;
  height: 42%;
  backgroud-color: #123456;
`

export const AreaPointer = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  z-index: 1000;
  border: 2px solid white;
  outline: 1px solid grey;
  margin: -2px 0 0 -2px;
  border-radius: 50%;
  background: ${(props) => `hsl(${props.color}, 100%, 50%)`};
`

const ColorAreaBackground = `
display: flex;
position: absolute;
  width: 100%;
  height: 100%;
`

export const BgMain = styled.div`
  ${ColorAreaBackground}
  background-color: ${(props) => `hsl(${props.color}, 100%, 50%)`};
`

export const BgWhite = styled.div`
  ${ColorAreaBackground}
  background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
`

export const BgBlack = styled.div`
  ${ColorAreaBackground}
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 58%;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  background-color: #fff;
`

export const ColorRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 11px;
  border: 1px solid grey;
  border-radius: 3px;
  position: relative;
`

export const Pointer = styled.div`
  width: 4px;
  height: 14px;
  position: absolute;
  left: ${(props) => `${props.left}px`};
  z-index: 1000;
  border: 1px solid white;
  border-radius: 1px;
  outline: 1px solid grey;
  margin: 0 0 0 -4px;
`

export const BgRange = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 16.66%,
    #0f0 33.33%,
    #0ff 50%,
    #00f 66.66%,
    #f0f 83.33%,
    #f00 100%
  );
`

export const ColorOpacityWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 11px;
  border: 1px solid grey;
  border-radius: 3px;
  position: relative;
`

export const BgMainGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `linear-gradient(to right,transparent 0%, ${props.color} 100%)`};
`

export const BgLattice = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 16px 16px;
  background-position: 0px -2px, 0px 6px, 8px -10px, -8px -2px;
`

export const ColorHexCodeWrapper = styled.input`
  display: flex;
  width: 70%;
  height: 20px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #bbb;

  :hover {
  }

  &:focus {
    outline: none;
    border: 1px solid #4da6ff;
  }
`

export const ColorListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 20px;
`

export const ColorListItem = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  border: 1px solid grey;
  background-color: ${(props) => props.color};
`
