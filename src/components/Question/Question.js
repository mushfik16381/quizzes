import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Ouestion.css'

const Question = ({ques}) => {
    console.log(ques)
    return (
        <div className='qus-container'>
            <div className='qus-eye'>
                <h3>Quiz :  {ques.question}</h3>
                <span className='icon-eye'><FontAwesomeIcon icon={faEye} /></span>
            </div>
            <div className='ans-container'>
                <div className='mcq'>
                    <input type="radio" />
                    <label ><p>{ques.options[0]}</p></label>
                </div>
                <div className='mcq'>
                    <input type="radio" />
                    <label ><p>{ques.options[1]}</p></label>
                </div>
                <div className='mcq'>
                    <input type="radio" />
                    <label ><p>{ques.options[2]}</p></label>
                </div>
                <div className='mcq'>
                    <input type="radio" />
                    <label ><p>{ques.options[3]}</p></label>
                </div>
            </div>
            
        </div>
    );
};

export default Question;