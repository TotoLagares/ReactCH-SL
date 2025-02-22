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

// (Hecho) Faltó agregar un link en el nombre de la tienda para volver a la ruta raíz,
//  (Hecho)y te recomiendo incluir un botón "Ver detalle" o algo más intuitivo para el usuario. 
// Al acceder al detalle de un producto, la ruta debería ser del tipo "/item/id". 
// Además, no estás aplicando correctamente el patrón contenedor/vista. ItemListContainer debería encargarse de obtener los datos y pasarlos a ItemList, y luego este a Item (que falta y debería ser la vista de cada card). Lo mismo ocurre con ItemDetailContainer, por lo que te sugiero repasar este patrón viendo las clases nuevamente. 
// También faltó agregar ItemCount como hijo de ItemDetail. 
// (Hecho) Me gustó mucho que hayas hecho un script para manejar las funciones que consultan la API, aunque sería ideal moverlo a una carpeta "api" o "utils" para que esté mejor organizado.
// (Hecho) mejorar estilos