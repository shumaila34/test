import React from "react";
import styled from "styled-components";

const RulesContainer = styled.div`
  /* Your styles here */
`;

const Rule = () => {
  return (
    <RulesContainer>
      <div>
        <p>Click on Dice image</p>
        <p>After clicking on the dice, if the selected number matches the dice number, you will get the same points as the dice roll.</p>
        <p>If you get 2 guesses, then 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rule;
