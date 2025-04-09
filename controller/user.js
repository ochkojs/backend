import { v4 as uuidv4 } from "uuid";

let users = [];

export const userCreate = (request, response) => {
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
}

export const getUserById = (request, response) => {
    const { id } = request.params
    const filtered = users.find((value) => value.id === id)
    response.send(filtered)
}

export const getUsers = (_, response) => {
    response.send(users)
}



export const userDelete = (request, response) => {
    const { id } = request.body
    users = users.filter((user) => user.id !== id)
    response.send({
        success: true,
        message: "User deleted"
    })
}



export const userUpdate = (request, response) => {
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
}
