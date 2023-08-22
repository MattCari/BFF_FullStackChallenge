import express, { Application } from "express";
import userRoutes from "./routes/user.routes";
import { handleErrors } from "./errors";
import sessionRoutes from "./routes/session.routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173/'
}))
app.use("/users/", userRoutes);
app.use("/login/", sessionRoutes);
app.use(handleErrors);

export { app };
