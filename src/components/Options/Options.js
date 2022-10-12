import React from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Options = ({optiones, correctAnswer } ) => {
    const result = (e) =>{
        console.log(e)
        if(correctAnswer === e){
            toast.success("YAY! Correct Answer",{position: "top-center",})
        }
        else{
            toast.warn("Sorry! Wrong Answer",{position: "top-center"})
        }
    }
    return (
        <div>
            <div className='option-container'>
            <ToastContainer />
                <div className='mcq'>
                    <input type="radio" name="cheak" value={optiones} onChange={(e) => result(e.target.value)}/>
                    <label ><p>{optiones}</p></label>
                </div>
            </div>
        </div>
    );
};

export default Options;