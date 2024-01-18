import prisma from "@/prisma"

export const findUserById = async(userId:number) => {
    try {
        const result = await prisma.user.findUnique({
            where:{
                id: userId
            },
            include:{
                role:true
            }
        })
        return result
    } catch (error) {
        throw error
    }
}