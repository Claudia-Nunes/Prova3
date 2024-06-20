import mongoose, { Schema, Document } from 'mongoose';

export interface IFuncionario extends Document {
  nome: string;
  idade: number;
  email: string;
  fone: string;
  salario: number;
  area: string;
}

const ddds = [
  11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,
  61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99
];

const FuncionarioSchema: Schema = new Schema({
  nome: { type: String, required: true, maxlength: 50 },
  idade: { type: Number, min: 14, max: 999, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validate: {
      validator: function(v: string) {
        return /@(adm|fiscal|dev)\.xpto\.tec\.br$/.test(v);
      },
      message: (props: any) => `${props.value} não é um e-mail válido da empresa!`
    }
  },
  fone: {
    type: String,
    required: true,
    match: /^[0-9]{10,11}$/,
    validate: {
      validator: function(v: string) {
        const ddd = parseInt(v.substring(0, 2));
        return ddds.includes(ddd);
      },
      message: (props: any) => `${props.value} não é um DDD válido!`
    }
  },
  salario: { type: Number, required: true },
  area: { type: String, required: true }
});

export default mongoose.model<IFuncionario>('Funcionario', FuncionarioSchema);