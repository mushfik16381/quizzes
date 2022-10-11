import React from 'react';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, total, } = quiz 
    return (
        <div className='quiz-container'>
            <img className='img-fluid' src={logo} alt="" />
            <div className='quiz-text'>
                <p className='name'>{name}</p>
                <p>Qus:{total}</p>
                <button className='btn-quiz'>Let's Practice</button>
            </div>
        </div>
    );
};

export default Quiz;