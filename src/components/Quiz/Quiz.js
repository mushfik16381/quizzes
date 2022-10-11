import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, total, id} = quiz 
    return (
        <div className='quiz-container'>
            <img className='img-fluid' src={logo} alt="" />
            <div className='quiz-text'>
                <p className='name'>{name}</p>
                <p>Qus:{total}</p>
                <Link to={`/questions/${id}`}>
                <button className='btn-quiz'>Let's Practice</button></Link>
            </div>
        </div>
    );
};

export default Quiz;