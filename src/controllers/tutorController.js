import { tutor } from "../models/Tutor.js";

class TutorController {
  static async listarTutores(req, res) {
    const listaTutores = await tutor.find({});
    // get all
    res.status(200).json(listaTutores);
  }

  static async listarTutorPorId(req, res) {
    try {
      const id = req.params.id;
      const tutorEncontrado = await tutor.findById(id);
      res.status(200).json(tutorEncontrado);
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - Falha ao pesquisar tutor`,
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
        message: `${erro.message} - Falha ao cadastrar tutor`,
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
        message: `${erro.message} - Falha ao atualizar tutor`,
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
        message: `${erro.message} - Falha ao deletar tutor`,
      });
    }
  }
}

export default TutorController;
