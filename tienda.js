// variables

const cervezas = [ 
  {nombre:"Rubia" , precio:50, id: 101},
  {nombre:"Ipa" , precio:70, id: 102},
  {nombre:"Roja" , precio:55, id: 103},
  {nombre:"Negra" , precio:55, id: 104},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// variables DOM

const prodCervezas = document.getElementById("prodCervezas")
const compraCarrito = document.getElementById("compraCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const botonCompra = document.getElementById("btnCompra")

// funciones

const calcularTotalCarrito = ()=>{
  //calcula el total del carito
  let total = carrito.reduce((suma,elemento)=>{
    return suma + elemento.precio
  },0)
  return total
}

const mostrarTotal = ()=>{
  //Muestra el total del carrito
  const divTotal = document.getElementById("total")
  divTotal.innerText = `Total: $${calcularTotalCarrito()}`
}

const guardarCarrito = ()=>{
    //Guarda el carrito en el localStorage
  const carritoJSON = JSON.stringify(carrito)
  localStorage.setItem("carrito", carritoJSON)
}


const mostrarCarrito = ()=>{
  compraCarrito.innerHTML = ""
  carrito.forEach(prod=>{
    const li = document.createElement("li")
    li.innerHTML = `${prod.nombre} - $${prod.precio}`
    compraCarrito.appendChild(li)
  })
}
//Boton para vaciar el carrito
vaciarCarrito.innerHTML = `<div><button id="btn-vaciar">Vaciar Carrito</button> </div>`
document.getElementById("btn-vaciar").addEventListener("click", carritoVacio);

function carritoVacio(){
  carrito = []
  guardarCarrito()
  mostrarCarrito()
  mostrarTotal()
}

const agregarCarrito = (prod)=>{
  carrito.push(prod)
  mostrarCarrito()
  mostrarTotal()
  guardarCarrito()
}



function mostrarProd(){
  prodCervezas.innerHTML = ""
  cervezas.forEach(prod=>{
    // Crear
    const li = document.createElement("li")
    const div = document.createElement("div")
    const btn = document.createElement("button")


    // Modificar
    li.id = prod.id
    div.innerText = `${prod.nombre} - $${prod.precio}`
    btn.innerText = "Comprar"
    btn.addEventListener("click",()=>{
      agregarCarrito(prod)
    })

    // agregar al DOM
    li.appendChild(div)
    li.appendChild(btn)
    prodCervezas.appendChild(li)
  })
}

const comprar =(nombre)=>{
  const agradecimiento = document.getElementById("compraFinalizada")
  agradecimiento.innerText = `gracias por su compra, Vuelva pronto`
  carritoVacio()
}

 botonCompra.onclick = comprar

function inicializar(){
  mostrarProd()
  mostrarCarrito()
  mostrarTotal()
  carritoVacio()
}

// Ejecución de código

inicializar()


