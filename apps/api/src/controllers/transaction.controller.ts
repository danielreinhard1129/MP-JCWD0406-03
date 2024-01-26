import { createTransactionAction } from '@/actions/transaction/createTransactionAction';
import { allTransactionAction } from '@/actions/transaction/getAllTransactionAction';
import { getByIdTransactionAction } from '@/actions/transaction/getByIdTransactionAction';
import sendProofOfPaymentAction from '@/actions/transaction/sendProofOfPaymentAction';
import { updateTransactionAction } from '@/actions/transaction/updateTransactionAction';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async getAllTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await allTransactionAction();
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const addResult = await createTransactionAction(data);
      res.status(addResult.status).send(addResult);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  async getByIdTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await getByIdTransactionAction(parseInt(id, 0));
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async sendProofOfPayment(req: Request, res: Response, next: NextFunction){
    try {
      const{id} = req.params
      const image = req.file?.filename
      const result = await sendProofOfPaymentAction(parseInt(id,0),image as string)
    } catch (error) {
      
    }
  }
  async updateTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const result = await updateTransactionAction(id, req.body);
      res.status(result.status).send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
