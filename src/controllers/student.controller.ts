import Students, { IStudents } from "../models/student";
import { Request, Response } from "express";

// function createStudent(req: Request, res: Response) {}

function getStudents(req: Request, res: Response) {
  Students.find({}).then((docs: IStudents[]) => {
    res.status(200).json(docs);
  });
}

export default {  getStudents };
