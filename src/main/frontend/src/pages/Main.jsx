import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import { MAINIMAGE, SCREEN_MAX_SIZE } from "../constant";

const MainBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 36px;
  box-sizing: border-box;
`;

export default function Main() {
  const navigate = useNavigate();
  const Login = () => <span>로그인</span>;
  const Bag = () => <span>내 시간표 확인하기</span>;
  const user = localStorage.getItem("jwt");
  return (
    <MainBox>
      <img src={require(`../img/${MAINIMAGE}`)} alt="로고" />
      {user ? (
        <>
          <RoundButton
            Children={Bag}
            onClick={() => {
              navigate("/box");
            }}
          />
          <RoundButton
            Children={() => <span>로그아웃</span>}
            onClick={() => {
              localStorage.removeItem("jwt");
              window.location.replace("/");
            }}
          />
        </>
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
