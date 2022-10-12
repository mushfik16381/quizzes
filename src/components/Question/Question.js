import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Ouestion.css'
import { useNavigate } from 'react-router-dom';
import Options from '../Options/Options';

const Question = ({ques}) => {
    const optioness = ques.options;
    
    // console.log(optioness)
    const {correctAnswer} = ques;
    const [res, setRes] = useState(false);
    

    return (
        <div className='qus-container'>
            <div className='qus-eye'>
                <h3>Quiz :  {ques.question}</h3>
                <button  className='icon-eye'>
                    { res? <FontAwesomeIcon icon={faClose} onClick={() => setRes(!res)} /> : <FontAwesomeIcon icon={faEye} onClick={() => setRes(!res)} /> }
                    </button>
            </div>
            <div className='ans-container'>
                {
                    optioness.map(optiones => <Options
                        key={optiones.id}
                        optiones={optiones}
                        correctAnswer={correctAnswer}
                    ></Options>)
                }
            </div>
            <p className='ans'><span className='correct'>Correct Ans:</span> {res? correctAnswer : ""}</p>
            
        </div>
    );
};

export default Question;