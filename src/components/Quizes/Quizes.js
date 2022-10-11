import React from 'react';
import './quizes.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data;
    return (
        <div className='quizes-container'>
            <h3>Let's Play With Quiz</h3>
            <div className='quizes-main'>
            {
                quizes.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Quizes;