import React from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Options = ({optiones, correctAnswer } ) => {
    // console.log(optioness)
    const result = (e) =>{
        console.log(e)
        if(correctAnswer === e){
            toast("Wow so easy!")
        }
        else{
            toast("Wow so easy!")
        }
    }
    return (
        <div>
            <div className='option-container'>
                <div className='mcq'>
                    <input type="radio" name="cheak" value={optiones} onChange={(e) => result(e.target.value)}/>
                    <label ><p>{optiones}</p></label>
                </div>
            </div>
        </div>
    );
};

export default Options;