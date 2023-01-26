import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

const InputBox = styled.input`
  all: unset;
  background: #f7f7f7;
  width: 100%;
  border-radius: 50px;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 35px;
`;

export default function Name() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [name, setName] = useState(inputs.name);
  return (
    <>
      <div>
        <p>보내는 사람의 이름을 입력해주세요</p>
        <InputBox
          placeholder="이름 입력"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
        />
      </div>
      <RoundButton
        Children={Next}
        onClick={() => {
          setInputs({ ...inputs, name });
          navigate(`/question/${inputs.boxId}/nickname`);
        }}
      />
    </>
  );
}
