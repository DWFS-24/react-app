import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {

  const [ list, setList ] = useState([ 'sandia', 'fresa', 'mango', 'Pera', 'naranja' ])

  const handleClick = () => {
    setList([ 'Pimientos', 'Tomate', 'Cebolla', 'ajo' ])
  }

  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => handleClick()} >Actualizar</button>
      <List elements={list} />

    </>
  )
}

export default App
