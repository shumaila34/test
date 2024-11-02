import React from "react";
import styled from "styled-components";

const TotalScore = ({Score}) => {
  return (
    <Scorecontainer>
      <h1>{Score}</h1>
      <p>TotalScore</p>
    </Scorecontainer>
  );
};

export default TotalScore;
const Scorecontainer = styled.div`
  text-align: center;
  max-width: 100px;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
