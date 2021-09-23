import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
} from "../controllers/user-controller.js";

export const userRoutes = (app) => {
  app.get("/users", getUsers);
  app.get("/users/:id", getUser);
  app.post("/users", postUser);
  app.put("/users/:id", putUser);
  app.delete("/users/:id", deleteUser);
};
