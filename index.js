const ProductManager = require('./clases')
const ListaProductos = new ProductManager("./productList.json")

ListaProductos.addProduct("Iphone", "Telefono", 2000, "Fotito", "123", "10")
ListaProductos.addProduct("Iphone2", "Telefono", 3000, "Fotito", "124", "10")
const productos = ListaProductos.getProducts()
// console.log("Todos los productos")
// console.log(productos)
// const producto = ListaProductos.getProductsById(1)
// console.log("Un producto");
// console.log(producto)