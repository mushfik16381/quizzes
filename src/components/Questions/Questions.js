import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const question = useLoaderData().data
    console.log(question)
    return (
        <div>
            <h3>Question is here</h3>
        </div>
    );
};

export default Questions;