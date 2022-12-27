import React from "react";
import axios from "axios";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";

const LoginBox = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: grid;
  grid-auto-columns: 1fr 5fr;
  height: 100vh;
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
`;

const social = [
  {
    site: "Goolge",
    background: "#D33A2D",
    Children: () => (
      <>
        <img alt="구글" src={require("../img/google.png")} />
        <span>구글로 계속하기</span>
      </>
    ),
  },
  {
    site: "Naver",
    background: "#01C73C",
    Children: () => (
      <>
        <img alt="네이버" src={require("../img/naver.png")} />
        <span>네이버로 계속하기</span>
      </>
    ),
  },
  {
    site: "Kakao",
    background: "#FDD92B",
    Children: () => (
      <>
        <img alt="카카오" src={require("../img/kakao.png")} />
        <span>카카오로 계속하기</span>
      </>
    ),
    onClick: async () => {
      await axios
        .get("/login/getKakaoAuthUrl")
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
