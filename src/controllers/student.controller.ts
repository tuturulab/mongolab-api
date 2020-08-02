import Students, { IStudents } from "../models/student";
import { Request, Response } from "express";
import student from "../models/student";

function getStudents(req: Request, res: Response) {
  student.find({}).then((docs: IStudents[]) => {
    res.status(200).json(docs);
  });
}

export default { getStudents };
