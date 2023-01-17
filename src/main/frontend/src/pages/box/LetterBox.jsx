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
  justify-content: center;
  padding: 36px;
  box-sizing: border-box;
`;

const LetterBoxTitle = styled.h2`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;

const TtitleNickname = styled.span`
  color: #dd403d;
`;

export default function LetterBox() {
  const Fortune = () => <span>복 선물하기</span>;
  const Bag = () => <span>내 복주머니 만들기</span>;
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
          <img src={require("../../img/luckyBag_inside.png")} alt="배경" />
          <RoundButton
            Children={Fortune}
            onClick={() => {
              navigate("/question/nickname");
            }}
          />
          <RoundButton
            Children={Bag}
            onClick={() => {
              navigate("/auth");
            }}
          />
        </>
      ) : (
        "로딩중"
      )}
    </LetterBoxCover>
  );
}
