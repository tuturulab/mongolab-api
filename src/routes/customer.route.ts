import express from "express";
import CustomerController from "../controllers/customer.controller";

const router = express.Router();

router.post("/create", CustomerController.createCustomer);
router.get("/getCostumers", CustomerController.getCustomers);

export default router;
