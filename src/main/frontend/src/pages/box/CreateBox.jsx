import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import StopButton from "../../components/StopButton";
import API from "../../config";
import { MAINIMAGE, SCREEN_MAX_SIZE } from "../../constant";

const CreateBagBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 15px;
`;

const CreateBagImg = styled.img`
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

const CreateBagTitle = styled.p`
  text-align: center;
  font-size: 32px;
  @media only screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

export default function CreateBox() {
  const Create = () => <span>만들기</span>;
  const navigate = useNavigate();
  const [boxName, setBoxName] = useState("");

  return (
    <CreateBagBox>
      <CreateBagTitle>누구의 복주머니인가요?</CreateBagTitle>
      <CreateBagImg src={require(`../../img/${MAINIMAGE}`)} alt="배경" />
      <div>
        <BagInput
          placeholder="복주머니 이름"
          id="bagName"
          value={boxName}
          onChange={(event) => {
            setBoxName(event.target.value);
          }}
        />
        <BagInputLabel htmlFor="bagName">의 시간표</BagInputLabel>
      </div>
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
    </CreateBagBox>
  );
}
