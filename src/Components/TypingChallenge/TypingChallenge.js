import './TypingChallenge.css';

export const TypingChallenge = ({handleInput,timestarted,timervalue,selecteddata}) => {
    console.log(timervalue);
 const val ="01:00"
    return (
        
        <div className="typing-challenge">
            <div className="timer-container">
            {
                timestarted ?
                <p className ="timer"> 00:{timervalue<=10?`0${timervalue-1}`:timervalue-1} </p>
                :
                <p className ="timer"> {val}</p>
            
            }
                <p className="timer-info">Start typing</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
           <textarea
         className="textarea"
        disabled={true}
        value={selecteddata}
            />
                </div>
                <div className="textarea-right">
                <textarea
                onChange={(e)=>handleInput(e.target.value)} 
         className="textarea"
        placeholder="start here"
            />
                </div>
            </div>
        </div>
    )
}