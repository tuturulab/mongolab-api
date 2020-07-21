import express from 'express';
import customers from './customer.route';

const router = express.Router();

router.use('/customers', customers);

export default router;