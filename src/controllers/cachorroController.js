import cachorro from "../models/Cachorro.js";

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    // get all
    res.status(200).json(listaCachorros);
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
}

export default CachorroController;
