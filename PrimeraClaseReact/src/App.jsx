
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App=()=> {
  

  return (
     <>
     <BrowserRouter>
      <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </> 
  )
}

export default App
