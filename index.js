import express, { request } from "express";
import { json } from "express";
import { v4 as uuidv4 } from "uuid";

const port = 8080;

const app = express(); //Доорхи кодыг цаанаа ажиллуулж байна гэсэн үг

let users = [];

app.use(json());

app.get('/', (request, response) => {
    response.send("Hello World")
})

app.post("/user/create", (request, response) => {
    const{ username, gender, age, email } = request.body
    console.log(username, gender, age, email, 'Body');
    users.push({
        username, gender, age, email, id: uuidv4()
    })
    console.log(users, 'users');
    response.send({
        success: true,
        message: "User created"
    })
})

// request-г ашиглахгүй үед _ гээд тэмдэглэчихэж болно
app.get("/user", (request, response) => {
    const filtered = users.find((value) => value.id === request.body.id)
    response.send(filtered)
})

app.get("/users", (_, response) => {
    response.send(users)
})


app.delete("/user/delete", (request, response) => {
    const { id } = request.body
    users = users.filter((user) => user.id !== id)
    response.send({
        success: true,
        message: "User deleted"
    })
})

app.put("/user/update", (request, response) => {
    const { id, username, email, age, gender } = request.body
    users.map((user) => {
        if (user.id === id) {
            user.username = username
            user.email = email
            user.age = age
            user.gender = gender
        }
    })
    response.send({
        success: true,
        message: "User Updated"
    })
})



// app.get('/user', (request, response) => {
//     const {username, password} = request.body
//     if(username.length < 5 && password.length > 8){
//         // console.log(username);
//         response.status(400).send({
//             success: false,
//             message: "5-аас их тэмдэгт хэрэгтэй"
//         })
        
//     }
//     console.log(request.body, "Reguest");
    
//     response.send({
//         success: true,
//         name: "sd",
//         gender: "male",
//     })
// })




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