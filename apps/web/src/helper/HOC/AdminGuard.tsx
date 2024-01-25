import { useAppSelector } from '@/lib/hooks'
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

export const PromoterGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.dataUser.role.name);
    useEffect(() =>{
        if(role === "customer" || !role){
            return redirect("/")
        }
    },[])
    if(!role){
      return(
        <p>loading...</p>
      )
    }
    return <Component {...props}/>
  }
}