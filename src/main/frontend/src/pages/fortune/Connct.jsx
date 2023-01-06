import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

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
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [connect, setConnect] = useState(inputs.connect);

  return (
    <div>
      <ConnectTitle>
        상대가 정답을 맞추면 연락받을
        <br />
        연락처를 알려주세요
      </ConnectTitle>
      <InputBox
        placeholder="연락처 입력"
        value={connect}
        onChange={(event) => {
          setConnect(event.target.value);
        }}
      />
      <RoundButton
        Children={Next}
        onClick={() => {
          setInputs({ ...inputs, connect });
          navigate("/question/content");
        }}
      />
    </div>
  );
}
