import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import StopButton from "../../components/StopButton";
import API from "../../config";
import { MAINIMAGE, SCREEN_MAX_SIZE } from "../../constant";

const CreateBoxCover = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 15px;
  gap: 20px;
`;

const CreateBoxImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`;

const BagInput = styled.input`
  all: unset;
  background: white;
  padding: 10px 10px;
  border-radius: 24px;
  max-width: 72%;
  margin-right: 5px;
  text-align: center;
  box-shadow: 4px 4px 10px 0px #00000040;
  @media only screen and (max-width: 300px) {
    max-width: 70%;
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const BagInputLabel = styled.label`
  font-size: 28px;

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const CreateBoxTitle = styled.p`
  text-align: center;
  font-size: 32px;
  margin-top: 25px;
  @media only screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

const CreateBoxName = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

export default function CreateBox() {
  const Create = () => <span>만들기</span>;
  const navigate = useNavigate();
  const [boxName, setBoxName] = useState("");

  return (
    <CreateBoxCover>
      <CreateBoxTitle>누구의 복주머니인가요?</CreateBoxTitle>
      <CreateBoxImg src={require(`../../img/${MAINIMAGE}`)} alt="배경" />
      <CreateBoxName>
        <BagInput
          placeholder="복주머니 이름"
          id="bagName"
          value={boxName}
          onChange={(event) => {
            setBoxName(event.target.value);
          }}
        />
        <BagInputLabel htmlFor="bagName">의 시간표</BagInputLabel>
      </CreateBoxName>
      {boxName ? (
        <RoundButton
          Children={Create}
          onClick={() => {
            axios
              .post(
                API.LETTERBOX,
                { name: boxName },
                { headers: { authorization: localStorage.getItem("jwt") } }
              )
              .then((response) => {
                navigate(`/box/${response.data.letterboxId}`);
              })
              .catch((err) => {
                alert("다시 시도해주세요");
                localStorage.removeItem("jwt");
              });
          }}
        />
      ) : (
        <StopButton text="만들기" />
      )}
    </CreateBoxCover>
  );
}
