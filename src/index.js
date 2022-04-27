import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Button from "./button"

function soma(a, b) {
    alert(a + b)
}

function App() {
    return (
        <div className="App">
            Hello World
            <Button onClick={() => soma(10, 20)} name="Raphael" />
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)