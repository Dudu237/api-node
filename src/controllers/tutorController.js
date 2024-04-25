<<<<<<< HEAD
import {tutor} from "../models/Tutor.js";

class TutorController {
  static async listarTutores(req, res) {
    const listatutores = await tutor.find({});
    // get all
    res.status(200).json(listatutores);
=======
import { tutor } from "../models/Tutor.js";

class TutorController {
  static async listarTutores(req, res) {
    const listaTutores = await tutor.find({});
    // get all
    res.status(200).json(listaTutores);
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
  }

  static async listarTutorPorId(req, res) {
    try {
      const id = req.params.id;
      const tutorEncontrado = await tutor.findById(id);
      res.status(200).json(tutorEncontrado);
    } catch (erro) {
      res.status(500).json({
<<<<<<< HEAD
        message: `${erro.message} - Falha ao pesquisar tutor `,
=======
        message: `${erro.message} - Falha ao pesquisar tutor`,
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      });
    }
  }

  static async cadastrarTutor(req, res) {
    try {
      const novoTutor = await tutor.create(req.body);
      res.status(201).json({
        message: "Tutor inserido com sucesso.",
        tutor: novoTutor,
      });
    } catch (erro) {
      res.status(500).json({
<<<<<<< HEAD
        message: `${erro.message} - Falha ao cadastrar tutor `,
=======
        message: `${erro.message} - Falha ao cadastrar tutor`,
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      });
    }
  }

  static async atualizarTutor(req, res) {
    try {
      const id = req.params.id;
      await tutor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Tutor atualizado" });
    } catch (erro) {
      res.status(500).json({
<<<<<<< HEAD
        message: `${erro.message} - Falha ao atualizar tutor `,
=======
        message: `${erro.message} - Falha ao atualizar tutor`,
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      });
    }
  }

  static async excluirTutor(req, res) {
    try {
      const id = req.params.id;
      await tutor.findByIdAndDelete(id);
      res.status(200).json({ message: "Tutor deletado" });
    } catch (erro) {
      res.status(500).json({
<<<<<<< HEAD
        message: `${erro.message} - Falha ao deletar tutor `,
=======
        message: `${erro.message} - Falha ao deletar tutor`,
>>>>>>> 1247fed1fa41c4855a7e15a420ec2118c33795b4
      });
    }
  }
}

export default TutorController;
