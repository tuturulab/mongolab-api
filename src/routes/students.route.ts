import express from "express";
import student from "../controllers/getStudents";

const router = express.Router();

router.get("/getStudents", student.getStudents);

export default router;
