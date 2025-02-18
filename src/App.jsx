import './App.css'
import NavBar from './componentes/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer/>}/>
          <Route exact path="/:id" element={<ItemDetail/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
