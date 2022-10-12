import { useState } from "react"
import "./App.css"
import { Input } from "./Input"
import * as Styled from "./styled"

function App() {
  const colorList = ["red", "#6262f5", "green", "cyan", "#123456"]
  const [initialColor, setInitialColor] = useState("#123456")

  const change = (updatedColor) => {
    setInitialColor(updatedColor)
  }

  const changeEnd = (updatedColor) => {
    setInitialColor(updatedColor)
  }

  return (
    <div className="App">
      <Input
        color={initialColor}
        colorList={colorList}
        onChange={change}
        onChangeEnd={changeEnd}
      />
      <Styled.ColorView color={initialColor}></Styled.ColorView>
    </div>
  )
}

export default App
