import { v4 as uuidv4 } from "uuid";

let products = [];

export const createProduct = (request, response) => {
    const{ totalPrice, foodOrderItems, status } = request.body
    console.log(totalPrice, foodOrderItems, status, "Body" );
    products.push({
        user: uuidv4(), totalPrice, foodOrderItems, status, createdAt: new Date(), createdAt: new Date(), id: uuidv4()
    })
    console.log(products, "product");
    response.send({
        success: true,
        message: "Product added"
    })
}

export const updateProductById = (request, response) => {
    const {id, totalPrice, foodOrderItems, status } = request.body;
    products.map((product) => {
        if(product.id == id){
            product.totalPrice = totalPrice
            product.foodOrderItems = foodOrderItems
            product.status = status
            product.updatedAt = new Date()
        }
    })
    response.send({
        success: true,
        message: "Product Updated"
    })
}

export const getProduct = (_, response) => {
    response.send(products)
}
