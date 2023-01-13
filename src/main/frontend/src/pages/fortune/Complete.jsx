import React from "react";
import styled from "styled-components";

const CompleteBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 55px;
  box-sizing: border-box;
  & > div {
    height: 50%;
    position: relative;
    text-align: center;
  }
`;

const CompleteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
`;

const LuckyLetter = styled.strong`
  color: #da2e2a;
`;

const CompleteStrongText = styled.p`
  font-size: 20px;
`;

const CompleteImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Complete() {
  return (
    <CompleteBox>
      <div>
        <CompleteImg src={require("../../img/luckyBag_small.png")} alt="로고" />
      </div>
      <CompleteText>
        <CompleteStrongText>
          <LuckyLetter>&#31119;</LuckyLetter>을 성공적으로 보냈습니다!
        </CompleteStrongText>
        <div>
          상대가 정답을 맞히면
          <br /> 회원가입 시 입력된 이메일로 전송됩니다&#58;&#41;
        </div>
      </CompleteText>
    </CompleteBox>
  );
}
