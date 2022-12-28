const fs = require("fs")
class ProductManager
{
    static id=0
    constructor(path)
    {
        this.path = path
    }
    addProduct=(title, description, price, thumbnail, code, stock)=>
    {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id : this.#getId()
        }
        const productList = this.getProducts()
        productList.push(product)
        try 
        {
            fs.writeFileSync(this.path, JSON.stringify(productList),"utf-8")
            console.log("File written succesfully")
        } catch (error) 
        {
            throw new Error(error);
        }

    }
    getProducts=()=>
    {
        if(fs.existsSync(this.path))
            {
            try {
                const products = JSON.parse([fs.readFileSync(this.path, "utf-8")])
                return products
            } catch (error) {
                throw new Error(error);
            }}
        else
        {
            return []
        }
    }
    getProductsById=(id)=>
    {
        const products = this.getProducts();
        if(products !== [])
        {
            try {
                const product = products.find(prod=>prod.id===id)
                return product ? product : "No se encontro el producto"
                
            } catch (error) {
                throw new Error(error);
            }
        }
        else
        {
            return "La lista se encuentra vacia"
        }
    }
    deletById=(id)=>
    {
        const products = this.getProducts()
        if(products !== []){
            const newProducts = products.filter(prod=>prod.id !== id)
            try {
                fs.writeFileSync(this.path, JSON.stringify(newProducts),"utf-8")
                console.log("Deleted File");
                
            } catch (error) {
                throw new Error(error)
            }
        }
        else
        {
            console.log("No hay productos");
        }
    }
    updateProduct=(id)=>
    {
        const products = this.getProducts();
        if(products!==[])
        {
            const product = products.find(prod => prod.id === id)
            if(product)
            {
                
            }
            else
            {
                console.log("No se encontro el producto")
            }
        }
        else
        {
            console.log("No hay productos");
        }
    }
    #getId = ()=>
    {
        ProductManager.id++;
        return ProductManager.id
    }

}

module.exports=ProductManager