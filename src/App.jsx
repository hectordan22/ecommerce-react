
import { useState } from 'react'
import './App.css'

function App() {
const name = 'ecomerce'
const [saludo, setSaludo] = useState('')

const saluda = () => {
  setSaludo('Es un gusto que nos visites')
}
  return (
    <>
      <h1>Nuestro Proyecto de React {name}</h1>
      <h4>El saludo es el siguiente:</h4>
      <h4>{saludo}</h4>
      <button onClick={saluda}>Saluda</button>
    </>
  )
}
   
export default App
