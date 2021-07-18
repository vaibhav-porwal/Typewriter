
import './Tryagain.css';
export const TryAgain = ({triggertryagain,  words,
    character,
     mistakes}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p><b>Characters :</b>{character}</p>
                <p><b>Speed :</b>{words/5}wpm</p>
                <p><b>Mistakes :</b>{mistakes}</p>
            </div>

            <button  onClick = {()=>triggertryagain()} className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}