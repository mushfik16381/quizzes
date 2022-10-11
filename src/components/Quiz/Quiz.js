import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, total, } = quiz 
    return (
        <div className='quiz-container'>
            <img className='img-fluid' src={logo} alt="" />
            <div className='quiz-text'>
                <h2>{name}</h2>
                <h2>{total}</h2>
                <button>Anggggg</button>
            </div>
        </div>
    );
};

export default Quiz;