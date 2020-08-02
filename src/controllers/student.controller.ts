import Student, { IStudents } from "../models/student";
import { Response } from "express";

function getStudents(req: Request, res: Response) {
  Student.find({}).then((docs: IStudents[]) => {
    res.status(200).json(docs);
  });
}

export default { getStudents };
