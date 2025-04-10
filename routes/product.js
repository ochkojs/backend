import express from "express";
import { createProduct, deleteProductById, getProduct, updateProductById } from "../controller/product.js";

export const productRouter = express.Router();

productRouter
    .get("/products", getProduct)
    .post("/product/create", createProduct)
    .put("/product/update", updateProductById)
    .delete("/product/delete", deleteProductById)