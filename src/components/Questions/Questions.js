import React from 'react';
import './Questions.css'
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const que = useLoaderData().data;
    let quess = que.questions;
    let {name} =que;
    return (
        <div className='questions-container'>
            <h1>{name} Question are Here</h1>
            {
                quess.map(ques => <Question
                    key={ques.id}
                    ques={ques}
                ></Question>)
            }
        </div>
    );
};

export default Questions;