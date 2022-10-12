import React from 'react';
import Quizes from '../Quizes/Quizes';
import './Topics.css'

const Topics = () => {
    
    return (
        <div>
            <div className='banner-container'>
                <div className="overlay">
                <p className='banner-text'>A comprehensive database of more than 31 computer programming quizzes online, test your knowledge with computer programming quiz questions.</p>
                </div>
            </div>
            <div>
                <Quizes></Quizes>
            </div>
        </div>
    );
};

export default Topics;