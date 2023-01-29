class ProductManager {
    productos;

    constructor() {
        this.productos = [];
    }

    getProduct() {
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
            }
        } catch (error) {
            console.log(error);
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
