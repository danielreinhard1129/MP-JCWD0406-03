import { IUser } from "@/typeweb/user.type";
import axios from "axios";

const useRegister = async(body:IUser) => {
    try {
        const register = await axios.post('http://localhost:8000/api/users/register',{
             firstName: body.firstName,
             lastName : body.lastName,
             
        })
        return register
    } catch (error) {
        console.log(error);
        
    }
}