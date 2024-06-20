import { Request, Response } from 'express';
import Cargo from '../models/Cargo';

class CargoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, descricao, salario } = req.body;
    try {
      const document = new Cargo({ nome, descricao, salario });
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const objects = await Cargo.find().sort({ nome: 'asc' });
      return res.json(objects);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const object = await Cargo.findByIdAndDelete(id);
      if (object) {
        return res.json({ message: 'Registro excluído com sucesso!' });
      } else {
        return res.status(404).json({ message: 'Registro inexistente!' });
      }
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome, descricao, salario } = req.body;
    try {
      const document = await Cargo.findById(id);
      if (!document) {
        return res.status(404).json({ message: 'Cargo inexistente!' });
      }
      document.nome = nome;
      document.descricao = descricao;
      document.salario = salario;
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new CargoController();
