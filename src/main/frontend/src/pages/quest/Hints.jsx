import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import StopButton from "../../components/StopButton";

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
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [hints, setHints] = useState(inputs.hints);

  return (
    <>
      <div>
        <HintsTitle>
          자신이 누구인지 나타내는
          <br />
          힌트를 차례로 3개로 적어주세요
        </HintsTitle>
        <HintsInput>
          <InputBox>
            <span>1.</span>
            <Input
              placeholder="첫번째 힌트 입력"
              value={hints.first}
              onChange={(event) => {
                setHints({ ...hints, first: event.target.value });
              }}
            />
          </InputBox>
          <InputBox>
            <span>2.</span>
            <Input
              placeholder="두번째 힌트 입력"
              value={hints.second}
              onChange={(event) => {
                setHints({ ...hints, second: event.target.value });
              }}
            />
          </InputBox>
          <InputBox>
            <span>3.</span>
            <Input
              placeholder="세번째 힌트 입력"
              value={hints.thrid}
              onChange={(event) => {
                setHints({ ...hints, thrid: event.target.value });
              }}
            />
          </InputBox>
        </HintsInput>
      </div>

      {hints.first && hints.second && hints.thrid ? (
        <RoundButton
          Children={Next}
          onClick={() => {
            setInputs({ ...inputs, hints });
            navigate(`/question/${inputs.boxId}/content`);
          }}
        />
      ) : (
        <StopButton text="힌트를 입력해주세요" />
      )}
    </>
  );
}
