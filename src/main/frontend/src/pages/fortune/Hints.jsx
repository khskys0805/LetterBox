import React from "react";
import styled from "styled-components";

const HintsTitle = styled.p`
  line-height: 24px;
`;

const HintsInput = styled.div`
  width: 100%;
  margin-top: 35px;
`;

const InputBox = styled.div`
  border-radius: 50px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  column-gap: 10px;
  margin: 0 auto 15px;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

export default function Hints() {
  return (
    <div>
      <HintsTitle>
        자신이 누구인지 나타내는
        <br />
        힌트를 차례로 3개로 적어주세요
      </HintsTitle>
      <HintsInput>
        <InputBox>
          <span>1.</span>
          <Input placeholder="첫번째 힌트 입력" />
        </InputBox>
        <InputBox>
          <span>2.</span>
          <Input placeholder="두번째 힌트 입력" />
        </InputBox>
        <InputBox>
          <span>3.</span>
          <Input placeholder="세번째 힌트 입력" />
        </InputBox>
      </HintsInput>
    </div>
  );
}
