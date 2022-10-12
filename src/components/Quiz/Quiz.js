import { useNavigate } from 'react-router-dom';
import './Quiz.css'


const Quiz = ({quiz}) => {
    const {logo, name, total, id} = quiz;
    
    const navigate = useNavigate();
    const handaleNavigate = () => {
        navigate(`/questions/${id}`)
    }

    return (
            <div className='quiz-container'>
            <img className='img-fluid' src={logo} alt="" />
            <div className='quiz-text'>
                <p className='name'>{name}</p>
                <p>Qus:{total}</p>
                <button className='btn-quiz' onClick={handaleNavigate}>Let's Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;