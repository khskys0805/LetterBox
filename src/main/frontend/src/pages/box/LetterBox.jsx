import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";

const LetterBoxCover = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 36px;
  box-sizing: border-box;
  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
`;

const LetterBoxTitle = styled.h2`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;

const TtitleNickname = styled.span`
  color: #dd403d;
`;

const LetterBoxButton = styled.div`
  width: 100%;
`;

export default function LetterBox() {
  const Fortune = () => <span>복 선물하기</span>;
  const Bag = () => <span>내 복주머니 확인하기</span>;
  const navigate = useNavigate();
  const { box } = useOutletContext();

  return (
    <LetterBoxCover>
      <LetterBoxTitle>
        <TtitleNickname>{box.name}</TtitleNickname>
        <span>의</span>
        <p>복주머니</p>
      </LetterBoxTitle>
      <img
        src={require("../../img/luckyBag_inside.png")}
        alt="배경"
        style={{ width: "80%" }}
      />
      <LetterBoxButton>
        <RoundButton
          Children={Fortune}
          onClick={() => {
            navigate(`/question/${box.letterboxId}/nickname`);
          }}
        />
        <RoundButton
          Children={Bag}
          onClick={() => {
            navigate("/auth");
          }}
        />
      </LetterBoxButton>
    </LetterBoxCover>
  );
}
