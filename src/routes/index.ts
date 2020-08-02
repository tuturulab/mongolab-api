import express from "express";
import customers from "./customer.route";
import students from "./students.route";

const router = express.Router();

router.use("/customers", customers);
router.use("/students", students);

export default router;
