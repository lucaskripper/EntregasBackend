const ProductManager = require('./clases')
const ListaProductos = new ProductManager()

const hola = ListaProductos.getProducts()
console.log(hola)
ListaProductos.addProduct("Play Station 5", "La play 5", 50000, "link", 011, 5)
console.log(hola)
ListaProductos.addProduct("Play Station 5", "La play 5", 50000, "link", 011, 5)
console.log(hola)
ListaProductos.addProduct("Play Station 4", "La play 4", 50000, "link", 010, 5)
console.log(hola);