import { Router } from "express";
import { controller_atualizar, controller_criacao, controller_deletar, controller_lista } from "../controllers/usuarioController.js";

const router = Router();

router.post('/', controller_criacao);

router.get("/", controller_lista);

router.put("/:id", controller_atualizar);

router.delete("/:id", controller_deletar);

export default router;