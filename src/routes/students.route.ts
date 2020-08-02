import express from "express";
import StudentController from "../controllers/student.controller";

const router = express.Router();

// router.post("/createStudent", StudentController.createStudent);
router.get("/getStudents", StudentController.getStudents);

export default router;
