const fs = require("fs")

class ProductManager {
    productos;

    constructor() {
        this.productos = [];
    }

    getProduct() {

        let obtenerProductos = JSON.parse(fs.readFileSync("productos.json", "utf-8"))
        return console.log(this.productos);
    }

    getProductById(id) {
        let productoConID = this.productos.find((e) => {
            return e.id === id;
        });
        if (productoConID) {
            return console.log(productoConID);
        } else {
            return console.error("el ID del producto ingresado no existe");
        }
    }

    addProduct(tittle, description, price, thumbnail, code, stock, id) {
        try {
            if (this.productos.find((e) => e.code === code)) {
                throw new Error("el codigo ya existe");
            } else {
                this.productos.push(new Productos(tittle,description,price,thumbnail,code,stock,(id = this.productos.length + 1)));
                console.log("PRODUCTO AGREGADO CON EXITO");

                let carpetaProductos = JSON.stringify(this.productos)

                fs.writeFileSync("productos.json", carpetaProductos)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    updateProduct(id,cambio,valor){
        
        this.productos.forEach((el)=>{
            if(el.id === id){
                el[cambio] = valor
                console.log("valor cambiado")
                let carpetaProductos = JSON.stringify(this.productos)
                fs.writeFileSync("productos.json", carpetaProductos)
            }
        })

    }

    deleteProduct(id){
       const indice = this.productos.findIndex((el)=>{
            return el.id === id

        })
            if(indice === -1){
               return  console.log(" imposible eliminar por que no existe el objeto con ese ID")
            }else{
            this.productos.splice(indice,1)
            let carpetaProductos = JSON.stringify(this.productos)
            fs.writeFileSync("productos.json", carpetaProductos)
            console.log("objeto eliminado")
        }
        
    }
}

class Productos {
    constructor(tittle, description, price, thumbnail, code, stock, id) {
        this.tittle = tittle;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = id;
    }
}

let newProduct = new ProductManager();

newProduct.getProduct();
newProduct.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);
newProduct.getProductById(1);
newProduct.getProductById(2);
newProduct.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
);
newProduct.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc1243",
    25
);
newProduct.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "prueba5",
    25
);
newProduct.updateProduct(1,"thumbnail","imagen nueva")

newProduct.deleteProduct(1)