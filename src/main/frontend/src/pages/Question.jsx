import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../constant/max-style";
import Nickname from "./fortune/Nickname";
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
  const navigate = useNavigate();
  const [move, setMove] = useState("/question/nickname");
  function logic(event) {
    event.preventDefault();
    setMove("/question/nickname");
    event.returnValue = "";
  }
  useEffect(() => {
    function watchReload() {
      window.addEventListener("beforeunload", async (event) => {
        logic(event);
      });
    }
    watchReload();
    return () => {
      window.removeEventListener("beforeunload", (event) => {
        logic(event);
        console.log("Df");
      });
    };
  });

  useEffect(() => {
    navigate(move);
  }, [move]);

  console.log(inputs.nickName);
  return (
    <QuestionBox>
      <QuestionInside>
        <Outlet context={{ inputs, setInputs }} />
      </QuestionInside>
    </QuestionBox>
  );
}
