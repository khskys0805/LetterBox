import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import API from "../../config";

const LoginBox = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-auto-columns: 1fr 5fr;
  padding: 0 36px;
`;

const LoginTitle = styled.span`
  font-size: 40px;
  text-align: center;
  align-self: center;
`;
const LoginButtons = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SocialButton = styled.button`
  cursor: pointer;
  all: unset;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const social = [
  {
    site: "Naver",
    background: "#01C73C",
    Children: () => (
      <>
        <img alt="네이버" src={require("../../img/naver.png")} />
        <span>네이버로 계속하기</span>
      </>
    ),
    onClick: () => {
      axios
        .get(API.NAVERLOGIN)
        .then((response) => window.open(response.data, "_self"))
        .catch((error) => console.log(error));
    },
  },
  {
    site: "Kakao",
    background: "#FDD92B",
    Children: () => (
      <SocialButton>
        <img alt="카카오" src={require("../../img/kakao.png")} />
        <div>카카오로 계속하기</div>
      </SocialButton>
    ),
    onClick: () => {
      axios
        .get(API.LOGIN)
        .then((response) => window.open(response.data, "_self"))
        .catch((error) => console.log(error));
    },
  },
];

export default function Login() {
  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginButtons>
        {social.map(({ site, background, Children, onClick }) => (
          <RoundButton
            key={site}
            Children={Children}
            background={background}
            onClick={onClick}
          />
        ))}
      </LoginButtons>
    </LoginBox>
  );
}
