import express from "express";
import CachorroController from "../controllers/cachorroController.js";

const routes = express.Router();

routes.get("/cachorros", CachorroController.listarCachorros);
<<<<<<< HEAD
routes.get("/cachorros", CachorroController.listarCachorroPorRaca);
=======
routes.get("/cachorros/busca", CachorroController.listarCachorroPorRaca);
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
routes.get("/cachorros/:id", CachorroController.listarCachorroPorId);
routes.post("/cachorros", CachorroController.cadastrarCachorro);
routes.put("/cachorros/:id", CachorroController.atualizarCachorro);
routes.delete("/cachorros/:id", CachorroController.excluirCachorro);

export default routes;
