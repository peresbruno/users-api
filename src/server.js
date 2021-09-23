import express, { json } from "express";
import cors from "cors";
import { routes } from "./routes/index.js";
const app = express();

routes(app);

app.use(cors());
app.use(json());
app.listen(3000);
