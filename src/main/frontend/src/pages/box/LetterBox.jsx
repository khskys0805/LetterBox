import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";
import axios from "axios";
import API from "../../config";

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
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetechData() {
      await axios
        .get(`${API.LETTERBOX}/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => navigate("/"));
    }
    fetechData();
  }, []);

  return (
    <LetterBoxCover>
      {data ? (
        <>
          <LetterBoxTitle>
            <TtitleNickname>{data.name}</TtitleNickname>
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
                navigate(`/question/${id}/nickname`);
              }}
            />
            <RoundButton
              Children={Bag}
              onClick={() => {
                navigate("/auth");
              }}
            />
          </LetterBoxButton>
        </>
      ) : (
        "로딩중"
      )}
    </LetterBoxCover>
  );
}
