import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import { SCREEN_MAX_SIZE } from "../constant/max-style";

const MainBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  box-sizing: border-box;
`;

export default function Main() {
  const navigate = useNavigate();
  const Login = () => <span>로그인</span>;
  const Bag = () => <span>내 복주머니 확인하기</span>;
  const user = localStorage.getItem("jwt");
  return (
    <MainBox>
      <img src={require("../img/luckyBag.png")} alt="로고" />
      {user ? (
        <RoundButton
          Children={Bag}
          onClick={() => {
            navigate("/box");
          }}
        />
      ) : (
        <RoundButton
          Children={Login}
          onClick={() => {
            navigate("/auth");
          }}
        />
      )}
    </MainBox>
  );
}
