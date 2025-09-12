import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <BrowserRouter>
      <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:item' element={<ItemDetailContainer/>}/>
      <Route/>
      <Route/>
     </Routes>
     </BrowserRouter>

  {/* <ItemListContainer/> 
  <ItemDetailContainer/>  */}
    </> 
  )
}

export default App
