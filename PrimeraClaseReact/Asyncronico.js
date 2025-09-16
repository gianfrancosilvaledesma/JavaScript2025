const misProductos = [
    {id: "1", nombre: "Cerveza Rubia", precio: 300, img:"../public/img/cerveza-rubia-resized.webp"},
    {id: "2", nombre: "Cerveza Roja", precio: 250, img:"../public/img/una-cerveza-roja-resized.png"},
    {id: "3", nombre: "Cerveza Negra", precio: 310, img:"../public/img/una-cerveza-negra-resized.png"},
    {id: "4", nombre: "Cerveza Ipa", precio: 900, img:"../public/img/una-cerveza-ipa-resized.png"},
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item=> item.id === id)
            resolve(producto)
        }, )
    })
}