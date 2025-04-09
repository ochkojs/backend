import express from "express";
import { getUserById, getUsers, userCreate, userDelete, userUpdate } from "../controller/user.js";

export const userRouter = express.Router();

userRouter
    .get("/users", getUsers)
    .get("/user/:id", getUserById)
    .post("/user/create", userCreate)
    .put("/user/update", userUpdate)
    .delete("/user/delete", userDelete)