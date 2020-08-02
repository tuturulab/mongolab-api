import mongoose, { Schema, Document } from "mongoose";

export interface IStudents extends Document {
  FechaCreacion: Date;
  NombreApellido: string;
  CorreoElectronico: string;
  Sexo: string;
  Profesion: string;
}

const Studentschema: Schema = new Schema({
  FechaCreacion: { type: Date },
  NombreApellido: { type: String },
  CorreoElectronico: { type: String },
  Sexo: { type: String },
  Profesion: { type: String },
});

export default mongoose.model<IStudents>("students", Studentschema);
