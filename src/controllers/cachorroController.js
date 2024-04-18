import cachorro from "../models/Cachorro.js";

class CachorroController {
  static async listarCachorros(req, res) {
    const listaCachorros = await cachorro.find({});
    // get all
    res.status(200).json(listaCachorros);
  }
}

export default CachorroController;
