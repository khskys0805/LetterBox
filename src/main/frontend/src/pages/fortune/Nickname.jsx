import React from "react";
import styled from "styled-components";
import { INPUT_MAX_SIZE } from "../../constant/max-style";

const InputBox = styled.input`
  all: unset;
  background: #f7f7f7;
  width: 100%;
  border-radius: 50px;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 35px;
`;

export default function Nickname() {
  return (
    <div>
      <p>복을 보낼 닉네임을 정해주세요</p>
      <InputBox placeholder="닉네임 입력" />
    </div>
  );
}
