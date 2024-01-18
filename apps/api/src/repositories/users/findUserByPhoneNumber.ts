import prisma from "@/prisma"

export const findUserByPhoneNumber = async(phoneNumber:string) => {
    try {
        const result = await prisma.user.findUnique({
            where:{
                phoneNumber
            },
            include:{
                role: true
            }
        })
        return result
    } catch (error) {
        throw error
    }
}