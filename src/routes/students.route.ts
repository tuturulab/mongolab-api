import express from "express";
import student from "../controllers/student";

const router = express.Router();

router.get("/getStudents", student.getStudents);

export default router;
