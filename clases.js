const fs = require("fs")
class ProductManager
{
    static id=0
    productList
    constructor(path)
    {
        this.path = path
        this.productList=[]
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
        if(fs.existsSync(this.path)){
            this.productList=this.getProducts()
            this.productList.push(product)
            try {
                fs.writeFileSync(this.path, JSON.stringify(this.productList),"utf-8")
                console.log("File written succesfully")
            } catch (error) {
                throw new Error(error);
            }
        }else
        {
            try {
                fs.writeFileSync(this.path, JSON.stringify(product),"utf-8")
                console.log("File written succesfully")
            } catch (error) {
                throw new Error(error);
            }
        }

    }
    getProducts=()=>
    {
        try {
            const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            return products
        } catch (error) {
            throw new Error(error);
        }
    }
    getProductsById=(id)=>
    {
        try {
            const products = [] 
            products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
            return products.find(prod=>prod.id===id)
            
        } catch (error) {
            throw new Error(error);
        }
    }
    #getId = ()=>
    {
        ProductManager.id++;
        return ProductManager.id
    }

}

module.exports=ProductManager