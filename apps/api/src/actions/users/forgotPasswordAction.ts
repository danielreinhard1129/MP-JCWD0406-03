import { createRefreshToken, createToken } from "@/helper/jwt"
import { resetPassword } from "@/helper/nodemailer"
import { findUserByEmail } from "@/repositories/users/findUserByEmail"

export const forgotPasswordAction = async(email:string) => {
    try {
        const checkEmail = await findUserByEmail(email)
        if(!checkEmail) return {status:404, message: "Email is not found"}
        const resetToken = createToken({email})
        const refreshToken = createRefreshToken({ email })
        resetPassword(email,resetToken)
        return{
            status:200,
            message: "Success Send Email"
        }
    } catch (error) {
        throw error
    }
}