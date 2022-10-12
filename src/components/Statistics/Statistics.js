import React, { useContext } from 'react';
import './Statistics.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const charts = useLoaderData().data;
    
    return (
        <div className='statistics-container'>
            <h3>Question OF Quiz</h3>
            <div className='chart-container'>
                <ResponsiveContainer height={300}>
                    <LineChart  data={charts}>
                    <Line type="monotone"  dataKey={"total"} stroke="#82ca9d" />
                    <XAxis dataKey={"name"} />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;