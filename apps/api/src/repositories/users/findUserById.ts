import prisma from "@/prisma"

export const findUserById = async(userId:number) => {
    try {
        const result = await prisma.user.findUnique({
            where:{
                id: userId
            }
        })
        return result
    } catch (error) {
        throw error
    }
}