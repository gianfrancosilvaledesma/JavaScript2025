

const cervezas = [ 
  {nombre:"Rubia" , precio:50, id: 101},
  {nombre:"Ipa" , precio:70, id: 102},
  {nombre:"Roja" , precio:55, id: 103},
  {nombre:"Negra" , precio:55, id: 104},
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || []
//Para ver lo que tiene el carrito en el storage
console.log("Carrito cargado del storage:", carrito)
// variables DOM

const prodCervezas = document.getElementById("prodCervezas")
const compraCarrito = document.getElementById("compraCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")
const botonCompra = document.getElementById("btnCompra")
const botonInfo = document.getElementById("btnInfo")
const botonCheckout= document.getElementById("btnCheckout")

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
//boton que se conecta a una api y nos da info sobre cervecerias
const url = `https://api.openbrewerydb.org/v1/breweries?per_page=5`;
const listaCervecerias = document.getElementById("listaCervecerias")

const info = () => {
  fetch(url)
      .then(response => {
        return response.json()
     })
    .then(data => {
      listaCervecerias.innerHTML = "" // limpiar antes
      data.forEach(c => {
        const li = document.createElement("li")
        li.innerHTML = `
          <strong>${c.name}</strong> (${c.brewery_type}) <br>
          ${c.city}, ${c.country} 
        `
        listaCervecerias.appendChild(li)
      })
    })
    .catch(error => {
      console.error("Error en la API:", error)
      alert("No se pudieron cargar los datos de la API.")
    })
}
botonInfo.innerText="Mostrar Cervecerias Especiales"
document.getElementById("btnInfo").addEventListener("click", info)

// const info= ()=>{
//   fetch(url)
// .then(response => response.json())
// .then(data => {
//   console.log((data));
// })
// .catch(error =>{
//   alert("Esta api dio error", error)
// })}
// botonInfo.innerText="Info Francia"
// botonInfo.addEventListener("click",info)


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

const quitarDelCarrito = (prod)=>{
  const index = carrito.findIndex(item => item.id === prod.id);
  if (index !== -1) {
    carrito.splice(index, 1); // quita 1 elemento en esa posición
    }
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
    const btn2= document.createElement("button")
    //const letra= document.createElement("p")


    // Modificar
    li.id = prod.id
    div.innerText = `${prod.nombre} - $${prod.precio}`
    btn.innerText = "+";
    //letra.innerText = "o"
    btn2.innerText = "-";

       btn.classList.add("btn-mas")
    btn2.classList.add("btn-menos")

    btn.addEventListener("click",()=>{
      agregarCarrito(prod)
      Toastify({
         text: `Agregado ${prod.nombre} al carrito`,
        duration: 3000,
        newWindow: true,
         close: false,
        gravity: "bottom",
        position: "right",
        stopOnFocus: false,
        style: {
          background: "linear-gradient(to left, tomato, gold)",
        }
      }).showToast();
    })

     btn2.addEventListener("click", () => {
      quitarDelCarrito(prod); // deberías definir esta función
      Toastify({
        text: `Quitado ${prod.nombre} del carrito`,
        duration: 3000,
        close: false,
        gravity: "bottom",
        position: "right",
        style: {
          background: "linear-gradient(to right, red, gray)",
        }
      }).showToast();
    });
 
    // agregar al DOM
    li.appendChild(div)
    li.appendChild(btn)
    //li.appendChild(letra)
    li.appendChild(btn2)
    prodCervezas.appendChild(li)
  })
}

const comprar = async()=>{
  const agradecimiento = document.getElementById("compraFinalizada")
agradecimiento.innerText = "Procesando su compra en el sistema...";
await new Promise (resolve => setTimeout(resolve,5000));
const carritoComprado = JSON.parse(localStorage.getItem('carrito')) || [];
  agradecimiento.innerText = `Gracias por su compra, usted selecciono: ${carritoComprado.map(prod => prod.nombre)}, proceda al checkout por favor.`
  botonCheckout.disabled = false
}

 botonCompra.addEventListener("click",()=>{
 if(carrito.length === 0){
  alert("Elije algun producto");
}
else 
  comprar();
})

botonCheckout.addEventListener("click", ()=>{
  window.location.href = "checkout.html"
  })

function inicializar(){
  mostrarProd()
  mostrarCarrito()
  mostrarTotal()
}

// Ejecución de código

inicializar()


