import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const quess = useLoaderData().data.questions
    return (
        <div>
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