import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import StopButton from "../../components/StopButton";

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
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(inputs.nickname);
  return (
    <>
      <div>
        <p>복을 보낼 닉네임을 정해주세요</p>
        <InputBox
          placeholder="닉네임 입력"
          onChange={(event) => {
            setNickname(event.target.value);
          }}
          value={nickname}
        />
      </div>
      {nickname ? (
        <RoundButton
          Children={Next}
          onClick={() => {
            setInputs({ ...inputs, nickname });
            navigate(`/question/${inputs.boxId}/hints`);
          }}
        />
      ) : (
        <StopButton text="닉네임을 입력해주세요" />
      )}
    </>
  );
}
