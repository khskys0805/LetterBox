import React from "react";
import styled from "styled-components";
import { BUTTON_MAX_SIZE } from "../constant/max-style";

const ButtonBox = styled.div`
  width: 100%;
  background: ${(props) => (props.background ? props.background : "#FFCD4A")};
  border-radius: 50px;
  padding: 16px 0;
  color: ${(props) => (props.color ? props.color : "white")};
  display: flex;
  align-items: center;
  column-gap: 6px;
  justify-content: center;
  margin: 30px auto 0;
  cursor: pointer;
`;

export default function RoundButton(props) {
  const { Children, background, onClick } = props;

  return (
    <ButtonBox background={background} onClick={onClick}>
      <Children />
    </ButtonBox>
  );
}
