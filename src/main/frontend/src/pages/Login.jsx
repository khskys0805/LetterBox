import React from "react";
import axios from "axios";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";

const LoginBox = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const LoginTitle = styled.h2``;
const LoginButton = styled.div``;

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
    onClick: () => {
      axios
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
      <LoginButton>
        {social.map(({ site, background, Children }) => (
          <RoundButton key={site} Children={Children} background={background} />
        ))}
      </LoginButton>
    </LoginBox>
  );
}
