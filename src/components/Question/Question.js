import React from 'react';
import './Ouestion.css'

const Question = ({ques}) => {
    // console.log(ques)
    return (
        <div className='qus-container'>
            <h3>{ques.question}</h3>
            <div className='ans-container'>
            <h3>{ques.options[0]}</h3>
            <h3>{ques.options[1]}</h3>
            <h3>{ques.options[2]}</h3>
            <h3>{ques.options[3]}</h3>
            </div>
            {/* <div>
            
            </div> */}
        </div>
    );
};

export default Question;