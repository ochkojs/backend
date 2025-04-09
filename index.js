import express, { request } from "express";
import { json } from "express";
import { v4 as uuidv4 } from "uuid";
import { userRouter } from "./routes/user.js";
import { productRouter } from "./routes/product.js";

const port = 8080;

const app = express(); //Доорхи кодыг цаанаа ажиллуулж байна гэсэн үг


app.use(json());

app.get('/', (request, response) => {
    response.send("Hello World")
})
app.use(userRouter, productRouter)

app.listen(port, ()=> {
    console.log(`Server running at http:/localhost:${port}`);
})