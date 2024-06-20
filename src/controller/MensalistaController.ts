import { Request, Response } from 'express';
import Mensalista from '../models/Mensalista';

class MensalistaController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, idade, email, fone, salario } = req.body;
    try {
      const document = new Mensalista({ nome, idade, email, fone, salario });
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const objects = await Mensalista.find().sort({ nome: 'asc' });
      return res.json(objects);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const object = await Mensalista.findByIdAndDelete(id);
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
    const { id, nome, idade, email, fone, salario } = req.body;
    try {
      const document = await Mensalista.findById(id);
      if (!document) {
        return res.status(404).json({ message: 'Mensalista inexistente!' });
      }
      document.nome = nome;
      document.idade = idade;
      document.email = email;
      document.fone = fone;
      document.salario = salario;
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new MensalistaController();