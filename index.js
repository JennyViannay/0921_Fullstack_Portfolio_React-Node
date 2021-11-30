import express from "express";
import { setupRoutes } from "./routes/index.js";

const app = express();
const port = 5002;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

setupRoutes(app)

app.listen(port, () => console.log(`Server is running on port ${port}`));