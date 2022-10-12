import React, { useContext } from 'react';
import './Statistics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const charts = useLoaderData().data;
    console.log(charts)
    
    return (
        <div className='statistics-container'>
            <h3>Question OF Quiz</h3>
            <LineChart width={500} height={400} data={charts}>
            <Line type="monotone"  dataKey={"total"} stroke="#82ca9d" />
            <XAxis dataKey={"name"} />
            <YAxis />
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;