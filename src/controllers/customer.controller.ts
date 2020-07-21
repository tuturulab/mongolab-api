import Customers, { ICustomer } from '../models/customer';
import { Request, Response } from 'express';

function createCustomer(req: Request, res: Response) {
  // const customer = req.body

}

function getCustomers(req: Request, res: Response) {
  Customers.find({}).then((docs: ICustomer[]) => {
    res.status(200).json(docs);
  });
}

export default { createCustomer, getCustomers }