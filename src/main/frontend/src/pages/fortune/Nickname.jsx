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

export default function Nickname() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [nickName, setNickName] = useState(inputs.nickName);
  return (
    <>
      <div>
        <p>복을 보낼 닉네임을 정해주세요</p>
        <InputBox
          placeholder="닉네임 입력"
          onChange={(event) => {
            setNickName(event.target.value);
          }}
          value={nickName}
        />
      </div>
      <RoundButton
        Children={Next}
        onClick={() => {
          setInputs({ ...inputs, nickName });
          navigate("/question/hints");
        }}
      />
    </>
  );
}
