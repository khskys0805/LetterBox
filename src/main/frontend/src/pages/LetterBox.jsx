import React from "react";
import { useNavigate } from "react-router-dom";
import RoundButton from "../components/RoundButton";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../constant/max-style";

const LetterBoxCover = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  box-sizing: border-box;
`;

export default function LetterBox() {
  const Fortune = () => <span>복 선물하기</span>;
  const Bag = () => <span>내 복주머니 만들기</span>;
  const navigate = useNavigate();
  return (
    <LetterBoxCover>
      <img src={require("../img/luckyBag_inside.png")} alt="배경" />
      <RoundButton
        Children={Fortune}
        onClick={() => {
          navigate("/question/nickname");
        }}
      />
      <RoundButton
        Children={Bag}
        onClick={() => {
          navigate("/auth");
        }}
      />
      {/* <RoundButton Children={} onClick={()=>{console.log("dfs")}}/> */}
    </LetterBoxCover>
  );
}
