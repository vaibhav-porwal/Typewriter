import { ChallengeDetailsCard } from "../Challeges/ChallengeDetailsCard"
import "./TypingChallengeConatiner.css"
import { TypingChallenge } from "../TypingChallenge/TypingChallenge"

export const TypingChallengeContainer = ({handleInput,timestarted,timervalue,selecteddata,words,character,mistakes}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
              <ChallengeDetailsCard
              cardName="Charater"
              cardValue={character}
              
              />

                
                <ChallengeDetailsCard
              cardName="Words"
              cardValue={words}
              />
            
                <ChallengeDetailsCard
              cardName="Mistakes"
              cardValue={mistakes}
              />
            </div>

            {/* Typing Challenge */}
            <div className="type-challenge-cont">
         <TypingChallenge
         handleInput={handleInput}
         timestarted={timestarted}
         timervalue={timervalue}
         selecteddata={selecteddata}/>
            </div>
        </div>
    )
}