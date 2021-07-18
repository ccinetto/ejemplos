import { Router } from "../../deps.ts";
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
  findAllUsers,
} from "../handlers/index.ts";

export const router = new Router()
  //User routes
  .get("/api/users", findAllUsers)
  .get("/api/users/:userId", findUser)
  .delete("/api/users/:userId", deleteUser)
  .patch("/api/users", updateUser)
  .post("/api/users", createUser);
