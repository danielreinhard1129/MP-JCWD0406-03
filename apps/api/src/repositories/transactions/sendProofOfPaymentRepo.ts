import prisma from '@/prisma'

const sendProofOfPaymentRepo = (id:number, imageUrl:string) => {
  try {
    const result = prisma.transaction.update({
        where: {
            id
        },
        data:{
            paymentProof: imageUrl
        }
    })
    return result
  } catch (error) {
    
  }
}

export default sendProofOfPaymentRepo