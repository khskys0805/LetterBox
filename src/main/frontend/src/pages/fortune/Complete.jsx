import React from "react";
import styled from "styled-components";

const CompleteText = styled.div`
  font-size: 24px;
`;

const LuckyLetter = styled.strong`
  color: #da2e2a;
`;

export default function Complete() {
  return (
    <>
      <img src={require("../../img/luckyBag_small.png")} alt="로고" />
      <CompleteText>
        <LuckyLetter>&#31119;</LuckyLetter>을 성공적으로 보냈습니다!
      </CompleteText>
    </>
  );
}
