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

const ColorBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  row-gap: 20px;
  @media only screen and (max-width: 500px) {
    row-gap: 10px;
  }
`;

const ColorCell = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.bgColor};
  border-radius: 10px;
  border: 3px solid
    ${(props) => (props.bgColor === props.current ? "#C7BEE8" : "white")};
`;

export default function Nickname() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(inputs.nickname);
  const [pickColor, setPickColor] = useState("#FFAEAE");
  const colors = [
    "#FFAEAE",
    "#FFC79E",
    "#FFF599",
    "#BAE9C2",
    "#D0F4FF",
    "#AAC2FF",
    "#C5AAFF",
    "#FFC8F6",
  ];

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
      <ColorBox>
        {colors.map((color) => (
          <ColorCell
            current={pickColor}
            bgColor={color}
            key={color}
            onClick={() => {
              setPickColor(color);
            }}
          />
        ))}
      </ColorBox>
      {nickname ? (
        <RoundButton
          Children={Next}
          onClick={() => {
            setInputs({ ...inputs, nickname, bgColor: pickColor });
            navigate(`/question/${inputs.boxId}/hints`);
          }}
        />
      ) : (
        <StopButton text="닉네임을 입력해주세요" />
      )}
    </>
  );
}
