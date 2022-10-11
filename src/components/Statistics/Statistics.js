import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const cart = useLoaderData().data;
    const {name, total} = cart([])
    console.log(cart[0].name);
    return (
        <div>
            <LineChart width={500} height={400} data={cart}>
            <Line type="monotone"  dataKey={total} stroke="#82ca9d" />
            <XAxis dataKey={cart[0].name} />
            <YAxis />
            </LineChart>
        </div>
    );
};

export default Statistics;