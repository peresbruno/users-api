import express, { json } from "express";
import cors from "cors";
import { routes } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(json());

routes(app);

app.listen(3000);
