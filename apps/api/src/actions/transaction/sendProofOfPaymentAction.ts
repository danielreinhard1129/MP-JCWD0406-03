import { getByIdTransactionRepo } from '@/repositories/transactions/getByIdTransactionRepo';
import sendProofOfPaymentRepo from '@/repositories/transactions/sendProofOfPaymentRepo';

const sendProofOfPaymentAction = async(id:number,image:string) => {
  try {
    const setPaymentProof = await sendProofOfPaymentRepo(id,image)
    
    
  } catch (error) {
    console.log(error);
    throw error
  }
}

export default sendProofOfPaymentAction