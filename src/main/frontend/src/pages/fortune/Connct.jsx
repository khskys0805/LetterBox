import React from "react";
import styled from "styled-components";
const ConnectTitle = styled.p`
  line-height: 24px;
`;

const InputBox = styled.input`
  all: unset;
  background: #f7f7f7;
  width: 100%;
  border-radius: 50px;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 35px;
`;

export default function Connct() {
  return (
    <div>
      <ConnectTitle>
        상대가 정답을 맞추면 연락받을
        <br />
        연락처를 알려주세요
      </ConnectTitle>
      <InputBox placeholder="연락처 입력" />
    </div>
  );
}
