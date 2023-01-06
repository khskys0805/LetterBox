import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../constant/max-style";

const QuestionBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const QuestionInside = styled.div`
  display: grid;
  grid-auto-columns: 8fr 2fr;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  align-content: space-around;
`;

export default function Question() {
  const [inputs, setInputs] = useState({
    nickName: "",
    hints: { first: "", second: "", thrid: "" },
    connect: "",
    content: { img: "", text: "" },
    locate: 0,
  });
  console.log(inputs);
  return (
    <QuestionBox>
      <QuestionInside>
        <Outlet context={{ inputs, setInputs }} />
      </QuestionInside>
    </QuestionBox>
  );
}
