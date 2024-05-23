
import { useState } from 'react'
import './App.css'
import Header  from './components/header.jsx'

function App() {
 const name = 'ecomerce'
const [saludo, setSaludo] = useState('')

 const saluda = () => {
    setSaludo('Es un gusto que nos visites')
 }
  return (
    <>
    <Header/>
     <h1>Nuestro Proyecto de React {name}</h1>
      <h4>{saludo}</h4>
     <button onClick={saluda}>Saluda</button>
    </>
  )
}

export default App
