// src/controllers/FuncionarioController.ts
import { Request, Response } from 'express';
import Funcionario from '../models/Funcionario';

class FuncionarioController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, idade, email, fone } = req.body;
    try {
      const document = new Funcionario({ nome, idade, email, fone });
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const objects = await Funcionario.find().sort({ nome: 'asc' });
      return res.json(objects);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const object = await Funcionario.findByIdAndDelete(id);
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
    const { id, nome, idade, email, fone } = req.body;
    try {
      const document = await Funcionario.findById(id);
      if (!document) {
        return res.status(404).json({ message: 'Funcionario inexistente!' });
      }
      document.nome = nome;
      document.idade = idade;
      document.email = email;
      document.fone = fone;
      const resp = await document.save();
      return res.json(resp);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default new FuncionarioController();

// Crie controllers para Mensalista e Cargo de maneira similar.
