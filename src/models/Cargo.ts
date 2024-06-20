import mongoose, { Schema, Document } from 'mongoose';

export interface ICargo extends Document {
  nome: string;
  descricao: string;
  salario: number;
}

const CargoSchema: Schema = new Schema({
  nome: { type: String, required: true, maxlength: 50 },
  descricao: { type: String, required: true },
  salario: { type: Number, required: true }
});

export default mongoose.model<ICargo>('Cargo', CargoSchema);
