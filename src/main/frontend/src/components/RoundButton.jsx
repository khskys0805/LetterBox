import React from "react";
import styled from "styled-components";
import { THEME } from "../constant";

const ButtonBox = styled.div`
  width: 100%;
  background: ${(props) => (props.background ? props.background : THEME)};
  border-radius: 50px;
  padding: 16px 0;
  color: ${(props) => (props.color ? props.color : "white")};
  display: flex;
  align-items: center;
  column-gap: 6px;
  justify-content: center;
  cursor: pointer;
  margin: 30px auto 0;
`;

export default function RoundButton(props) {
  const { Children, background, onClick } = props;

  return (
    <ButtonBox background={background} onClick={onClick}>
      <Children />
    </ButtonBox>
  );
}
