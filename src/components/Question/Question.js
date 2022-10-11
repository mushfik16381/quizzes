import React from 'react';

const Question = ({ques}) => {
    console.log(ques)
    return (
        <div>
            <h3>{ques.question}</h3>
        </div>
    );
};

export default Question;