import { useState } from 'react'
import './App.css'
import NavBar from './componentes/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <body>
        <ItemListContainer nombre="Pablo" apellido="Sanchez" tienda="SnowLife"/>
      </body>
    </>
  )
}

export default App
