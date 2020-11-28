import Students, { IStudents } from "../models/student";
import { Request, Response } from "express";

function createStudent(req: Request, res: Response) {
  let student = new Students();
  student.NombreApellido = req.body.NombreApellido;
  student.FechaCreacion = req.body.FechaCreacion;
  student.Profesion = req.body.Profesion;
  student.Sexo = req.body.Sexo;
  student.CorreoElectronico = req.body.CorreoElectronico;

  student.save((err, studentStored) => {
    if (err) res.status(500).send({ message: `Error on save student: ${err}` });
    res.status(200).send({ student: studentStored });
  });
  
  res.send('POST request to the homepage')

}

function getStudents(req: Request, res: Response) {
  Students.find({}).then((docs: IStudents[]) => {
    res.status(200).json(docs);
  });
}

export default { getStudents, createStudent };
