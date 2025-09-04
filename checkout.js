const carrito = JSON.parse(localStorage.getItem("carrito")) || []

const resumenCarrito = document.getElementById("resumenCarrito")
const totalCheckout = document.getElementById("totalCheckout")
const mensajeFinal = document.getElementById("mensajeFinal")
const form = document.getElementById("checkoutForm")

// Mostrar carrito en checkout
function mostrarResumen(){
  resumenCarrito.innerHTML = ""
  let total = 0
  carrito.forEach(prod=>{
    const li = document.createElement("li")
    li.innerText = `${prod.nombre} - $${prod.precio}`
    resumenCarrito.appendChild(li)
    total += prod.precio
  })
  totalCheckout.innerText = `Total a pagar: $${total}`
}
mostrarResumen()

// Procesar compra
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  
  const nombre = document.getElementById("nombre").value
//   const email = document.getElementById("email").value
//   const direccion = document.getElementById("direccion").value

  mensajeFinal.innerText = `✅ Gracias ${nombre}! Tu compra fue realizada con éxito.`

  // Vaciar carrito
  localStorage.removeItem("carrito")
})
