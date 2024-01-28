import getEventByUserIdRepo from '@/repositories/events/getEventByUserIdRepo'

const getEventByUserIdAction = async (userId:number) => {
  try {
    const data = await getEventByUserIdRepo(userId)
    console.log(data);
    
    return{
        status:200,
        message: "success",
        data
    }
  } catch (error) {
    throw error
  }
}

export default getEventByUserIdAction