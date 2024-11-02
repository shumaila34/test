import { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({setCurrentDice , currentDice}) => {
  

  return (
    <DiceContainer>
      <div className='dice' onClick={() => generateRandomNumber(1, 6)}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
