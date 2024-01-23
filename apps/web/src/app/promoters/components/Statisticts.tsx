import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', events: 5, registrations: 15, transactions: 10 },
  { month: 'Feb', events: 8, registrations: 10, transactions: 15 },
  { month: 'Mar', events: 7, registrations: 10, transactions: 4 },
  { month: 'Apr', events: 4, registrations: 15, transactions: 4 },
  { month: 'Mei', events: 2, registrations: 5, transactions: 4 },
];

const parseDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

const Statisticts = () => {
  return (
    <div className="grid  grid-cols-2">
      <div className="border-r-2">
        <h1 className="font-bold text-xl p-2 mb-2"> {'->'} Data per Year</h1>
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="events" stroke="#8884d8" />
          <Line type="monotone" dataKey="registrations" stroke="#82ca9d" />
          <Line type="monotone" dataKey="transactions" stroke="#ffc658" />
        </LineChart>
      </div>
      <div>
        <h1 className="font-bold text-xl p-2 mb-2"> {'->'} Data per Month</h1>
        <LineChart width={700} height={300} data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="events" stroke="#8884d8" />
          <Line type="monotone" dataKey="registrations" stroke="#82ca9d" />
          <Line type="monotone" dataKey="transactions" stroke="#ffc658" />
        </LineChart>
      </div>
      <div className="col-span-2 flex justify-center border-t-2">
        <div>
          <h1 className="font-bold text-xl p-2 mb-2"> {'->'} Data per Day</h1>
          <LineChart width={700} height={300} data={data}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="events" stroke="#8884d8" />
            <Line type="monotone" dataKey="registrations" stroke="#82ca9d" />
            <Line type="monotone" dataKey="transactions" stroke="#ffc658" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Statisticts;
