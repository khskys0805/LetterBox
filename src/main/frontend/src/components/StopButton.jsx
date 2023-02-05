import React from "react";
import styled from "styled-components";

const ButtonBox = styled.div`
  width: 100%;
  background: ${(props) => (props.background ? props.background : "#a2a194")};
  border-radius: 50px;
  padding: 16px 0;
  color: ${(props) => (props.color ? props.color : "white")};
  display: flex;
  align-items: center;
  column-gap: 6px;
  justify-content: center;
  margin: 30px auto 0;
`;

export default function StopButton({ text, background }) {
  return <ButtonBox background={background}>{text}</ButtonBox>;
}
