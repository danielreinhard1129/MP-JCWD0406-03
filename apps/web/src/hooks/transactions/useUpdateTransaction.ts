import { axiosInstance } from "@/helper/axios";
import { ITransaction } from "@/typeweb/transaction.type";
import { baseUrl } from "@/utils/config";
import { useEffect, useState } from "react";


const useUpdateTransaction = (id:number, body:ITransaction) => {
    const [data, setData] = useState<ITransaction>();

    useEffect(() => {
      updateTransaction();
    }, []);
    const updateTransaction = async () => {
      try {
        const { data } = await axiosInstance.patch(baseUrl + `/transaction/${id}`,{
            data:body
        });
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    return data as ITransaction;
}

export default useUpdateTransaction