
import axios from 'axios';
import { baseUrl } from '@/utils/config';

export async function eventList(){
    let res = await axios.get(`${baseUrl}/events?category=`)
    return res.data.data
    }


