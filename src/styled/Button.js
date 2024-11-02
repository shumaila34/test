import styled from "styled-components";

  export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border-color: black;
    color: black;
    transition: background 0.4s ease-in;
  }
`;

export const outlineButton = styled(Button)`
  min-width: 220px;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border-color: black;
    color: black;
    transition: background 0.4s ease-in;
  }
`;



