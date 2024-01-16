import { findUserById } from "@/repositories/users/findUserById";
import { uploadImageRepo } from "@/repositories/users/uploadImageRepo";

export const uploadImageAction = async(userId: number, path: string) => {
  try {
    const checkUserId = await findUserById(userId)
    if(!checkUserId) throw new Error(`userId ${userId} is not found`)
    await uploadImageRepo(userId,path)
    return{
      status:201,
      message: "Success upload image"
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
