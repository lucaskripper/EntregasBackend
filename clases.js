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
                const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
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
                return product ? product : null
                
            } catch (error) {
                throw new Error(error);
            }
        }
        else
        {
            return null
        }
    }
    deletById=(id)=>
    {
        const products = this.getProducts()
        try {
            products = products.filter(prod=>prod.id != id)
            fs.writeFileSync(this.path, JSON.stringify(products),"utf-8")
            console.log("Updated File");

        } catch (error) {
            throw new Error(error)
        }
    }
    #getId = ()=>
    {
        ProductManager.id++;
        return ProductManager.id
    }

}

module.exports=ProductManager