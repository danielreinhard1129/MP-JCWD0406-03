import axios from "axios";

export const useKeepLogin = async(token:string) => {
    try {
        const {data} = await axios.get('http://localhost:8000/api/users/keep-login',{
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        return data
    } catch (error) {
        console.log(error); 
    }
}