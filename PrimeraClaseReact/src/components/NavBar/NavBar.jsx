import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
 <>
   <header>
        <h1 className='texto'>Cerveceria LA CARBONERA</h1>
        <nav>
            <ul>
                <li>Cervezas</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/> 
     </header>
        
        </>
        
  )
}

export default NavBar