import express from "express";
import { json } from "express";

const port = 8080;

const app = express(); //Доорхи кодыг цаанаа ажиллуулж байна гэсэн үг

app.use(json());

app.get('/', (request, response) => {
    response.send("Hello World")
})

app.get('/user', (request, response) => {
    const {username, password} = request.body
    if(username.length < 5 && password.length > 8){
        // console.log(username);
        response.status(400).send({
            success: false,
            message: "5-аас их тэмдэгт хэрэгтэй"
        })
        
    }
    console.log(request.body, "Reguest");
    
    response.send({
        success: true,
        name: "sd",
        gender: "male",
    })
})

// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text-plain");
//     const movie = {
//         title: "Carjackers",
//         raiting: "7/10"
//     }
//     // console.log(JSON.parse(movie), 'json')
//     response.end(`${movie.title} + ${movie.raiting}`)
// })

app.listen(port, ()=> {
    console.log(`Server running at http:/localhost:${port}`);
})