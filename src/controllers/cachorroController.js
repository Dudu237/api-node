import cachorro from "../models/Cachorro.js";
<<<<<<< HEAD
import {tutor} from "../models/Tutor.js"
=======
import { tutor } from "../models/Tutor.js";
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    // get all
    res.status(200).json(listaCachorros);
  }

  static async listarCachorroPorRaca(req, res) {
    const raca = req.query.raca;
    try {
<<<<<<< HEAD
      const cachorroPorRaca = await cachorro.find ({ raca: raca });
      res.status(200).json(cachorroPorRaca);
    } catch (erro) {
      res.status(500).json({
        message: $(erro.message) - "Falha ao pesquisar cachorro por raca",
=======
      const cachorroPorRaca = await cachorro.find({ raca: raca });
      res.status(200).json(cachorroPorRaca);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao pesquisar cachorro por raça`,
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      });
    }
  }

<<<<<<< HEAD
 
=======
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
  static async listarCachorroPorId(req, res) {
    try {
      const id = req.params.id;
      const cachorroEncontrado = await cachorro.findById(id);
      res.status(200).json(cachorroEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao pesquisar cachorro `,
      });
    }
  }

  static async cadastrarCachorro(req, res) {
    const novoCachorro = req.body;
    try {
      const tutorEncontrado = await tutor.findById(novoCachorro.tutor);
<<<<<<< HEAD
      const cachorroCompleto = {...novoCachorro, tutor:{ ...tutorEncontrado._doc}};
=======
      const cachorroCompleto = {
        ...novoCachorro,
        tutor: { ...tutorEncontrado._doc },
      };
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      const cachorroCriado = await cachorro.create(cachorroCompleto);
      res.status(201).json({
        message: "Cachorro inserido com sucesso.",
        cachorro: cachorroCriado,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao cadastrar cachorro `,
      });
    }
  }

  static async atualizarCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Cachorro atualizado" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao atualizar cachorro `,
      });
    }
  }

  static async excluirCachorro(req, res) {
    try {
      const id = req.params.id;
      await cachorro.findByIdAndDelete(id);
      res.status(200).json({ message: "Cachorro deletado" });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao deletar cachorro `,
      });
    }
  }
}

export default CachorroController;
