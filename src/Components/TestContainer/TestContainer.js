
import { TypingChallengeContainer } from '../TestContainerChallenge/TypingChallengeConatiner';
import {TryAgain} from "../TryAgain/TryAgain"
import './TestContainer.css'

export const TestContainer = ({handleInput,timestarted,timervalue
,triggertryagain,selecteddata,words,character,mistakes}) => {
   

    return (
        <div className="test-container">
           
            {
                timervalue>0
                    ? <div className="typing-challenge-cont">
                        <TypingChallengeContainer
                        handleInput={handleInput}
                        timestarted={timestarted}
                        timervalue={timervalue}
                        selecteddata={selecteddata}
                        words={words}
                       character={character}
                        mistakes={mistakes}
                
                        
                        />
                    </div>
                    : <div className="try-again-cont">
                     <TryAgain
                     triggertryagain={triggertryagain}
                     words={words}
                     character={character}
                      mistakes={mistakes}/>
                    </div>
            }            
        </div>
    )
}