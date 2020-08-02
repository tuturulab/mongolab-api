import mongoose, { Schema, Document } from "mongoose";

export interface ICustomer extends Document {
  Nombre: string;
  Apellido: string;
}

const schema: Schema = new Schema({
  Nombre: { type: String },
  Apellido: { type: String },
});

export default mongoose.model<ICustomer>("customers", schema);
