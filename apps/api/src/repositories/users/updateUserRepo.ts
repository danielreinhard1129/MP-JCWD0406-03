import prisma from "@/prisma"
import { IUser } from "@/typeapi/user.type"

export const updateUserRepo = async(id:number, data:IUser) => {
    try {
        const result = await prisma.user.update({
            where: {
                id
            },
            data:{
                
            }
        })
    } catch (error) {
        throw error
    }
}