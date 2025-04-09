//npm pro

import express, { request, response } from "express"
import { json } from "express";
import { v4 as uuidv4 } from "uuid";

const port = 8081;

const app = express();


app.use(json());

app.get("/", (request, response) => {
    response.send("Hello Product Page")
})



app.listen(port, ()=> {
    console.log(`Server running at http:/localhost:${port}`);
})