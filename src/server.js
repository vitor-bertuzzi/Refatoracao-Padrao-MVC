import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "../src/routes/usuarioRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor MySQL rodando em http://localhost:${PORT}`);
});
