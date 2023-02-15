import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ChatProcess from "./ChatProcess";
import API from "../../config";
import { THEME } from "../../constant";

const ChattingBox = styled.div`
  background: #f7f7f7;
  padding: 40px 15px 12px;
  margin-bottom: 72px;
  height: calc(100vh - 205px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
`;

const QuestionBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const QuestionText = styled.p`
  background: ${THEME};
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 10px;
  max-width: 70%;
`;

export default function Chatting() {
  const CloseButton = () => <span>닫기</span>;
  const [data, setData] = useState();
  const { boxId, chatId } = useParams();
  const [refresh, setRefresh] = useState(false);
  const chatRef = useRef();
  const navigate = useNavigate();
  const [correct, setCorrect] = useState(false);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API.MESSAGE(boxId, chatId), {
          headers: { authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
          setCorrect(res.data.correct);
          setData(res.data);
        });
    }
    fetchData();
  }, [refresh]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [data]);

  return (
    <>
      <ChattingBox ref={chatRef}>
        {data ? (
          <>
            <QuestionBox>
              <QuestionText>{data.nickname}가 누구인 거 같애?</QuestionText>
            </QuestionBox>
            <ChatProcess
              setRefresh={setRefresh}
              refresh={refresh}
              data={data}
              correct={correct}
            />
          </>
        ) : (
          <div>로딩중</div>
        )}
      </ChattingBox>
      <RoundButton
        Children={CloseButton}
        onClick={() => {
          navigate(`/box/${boxId}`);
        }}
      />
    </>
  );
}
