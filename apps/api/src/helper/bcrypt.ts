import bcrypt from 'bcrypt'
export const hashPaswword = async (password: string):Promise<string> =>{
    const saltRoundes = 10;
    return await bcrypt.hash(password,saltRoundes)

}