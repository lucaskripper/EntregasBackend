class ProductManager
{
    products
    static id=0;
    constructor()
    {
        this.products = []
        
    }
    addProduct = (title, description, price, thumbnail, code, stock)=>
    {
        let include = false;
        if(this.products.length > 0)
        {
            this.products.map((product)=>
            {
                if(product.code === code)
                {
                    include=true;
                    return;
                }
            })
        } 
        if(include === false){
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.#getId()
        }
        this.products.push(product);
        return("Producto Agregado correctamente")
        }else{
            console.log("error: ya existe un producto con ese codigo")
        }

    }
    getProducts = () =>
    {
        return this.products;
    }
    getProductById = (id)=>
    {
        const product=this.products.find((product)=>
        {
            product.id===id;
        })
        return product
    }
    #getId=()=>
    {
        ProductManager.id++;
        return ProductManager.id;
    }

}

module.exports=ProductManager