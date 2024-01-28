// "use client"
// import { baseUrl } from '@/utils/config';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';
// import {eventList} from "../api/api"
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([{
//     id:""
//   }]);
//   const [category,setCategory] = useState({label:'All',value:''})
//   const router = useRouter();

//   const getEvents = async () => {
//     try {
//       const response = await eventList({category:param.category})
//       //await axios.get(`${baseUrl}/events?category=`);
//       setEvents(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getEvents();
//   }, []);

//   const handleCardClick = (eventId) => {
//     router.push(`/event-detail/${eventId}`);
//   };

//   return (
//     <section>
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-2xl font-bold mb-6">Music Events</h2>
//         <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-white rounded shadow p-4 transition-transform duration-300 transform hover:scale-105 cursor-pointer"
//               onClick={() => handleCardClick(event.id)}
//             >
//               <Image
//                 src={event.image}
//                 width={500}
//                 height={500}
//                 alt={`Event ${event.id}`}
//                 className="w-full h-40 object-cover mb-4"
//               />
//               <h3 className="text-xl font-bold mb-2">{event.title}</h3>
//               <p>
//                 <strong>Time:</strong> {event.dateTime} <br />
//                 <strong>Location:</strong> {event.location} <br />
//                 <strong>Price:</strong> {event.price}
//               </p>
//               <p>{event.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <Link href="/">
//             <button className="text-black px-6 py-2 border-solid border-2 border-[#e4e7eb] transition duration-300 mx-auto">
//               See more
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;
