import express from "express";
import cachorros from "./cachorroRoutes.js";
import tutores from "./tutorRoutes.js"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));
<<<<<<< HEAD
  app.use(express.json(), cachorros, tutores)
=======
  app.use(express.json(), cachorros, tutores);
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
};

export default routes;
