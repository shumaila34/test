import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { outlineButton } from "../styled/Button";
import Rule from "./Rule";

const GamePlay = () => {
  const [Score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [ error , setError] = useState("");
  const [showRules, setShowRules] = useState(false)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min); // Ensures max is included  
  };
  const roleDice = () =>{
    if(!selectedNumber) {
      setError("You've not selected any Number")
      return
    };
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

   

    if(selectedNumber == randomNumber){
      setScore((prev) =>prev + randomNumber);
    }else{
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined)
  }
  const resetScore = () =>{
    setScore(0);
  }
  return (
    <MainContainer>
      <div className="top-section">
     <TotalScore  score ={Score}/>
     <NumberSelector 
     error={error}
     setError={setError}
     selectedNumber={selectedNumber}
     setSelectedNumber ={setSelectedNumber}
     />
     </div>
     <RoleDice currentDice={currentDice}
      roleDice={roleDice}
     />
     <div className="btns">
      <outlineButton
      onClick={ resetScore}
      >Reset</outlineButton>
      <Button onClick={() =>setShowRules((prev) =>!prev)}>Rules</Button>
     </div>
     {showRules && <Rule/>}
     <RulesContainer/>
    </MainContainer>
    
   
  );
};

export default GamePlay;
const MainContainer = styled.main`
padding-top:70px;
.top-section{
  justify-content: space-around;
  align-items:end;
  display:flex;
}
.btns{
  margin-top: 48px
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width:220px;
  align-items:center;
  gap: 10px;
}
  `;