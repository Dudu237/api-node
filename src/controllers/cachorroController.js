import cachorro from "../models/Cachorro.js";

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    // get all
    res.status(200).json(listaCachorros);
  }

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
    try {
      const novoCachorro = await cachorro.create(req.body);
      res.status(201).json({
        message: "Cachorro inserido com sucesso.",
        cachorro: novoCachorro,
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
}

export default CachorroController;
