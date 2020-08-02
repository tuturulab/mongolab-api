import { IStudents } from "../models/student";
import { Response } from "express";
import student from "../models/student";

function getStudents(res: Response) {
  student.find({}).then((docs: IStudents[]) => {
    res.status(200).json(docs);
  });
}

export default { getStudents };
