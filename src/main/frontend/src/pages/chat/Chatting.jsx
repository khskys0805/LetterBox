import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import axios from "axios";

const ChattingBox = styled.div`
  background: #f7f7f7;
  padding: 40px 15px 12px;
  margin-bottom: 40px;
  height: calc(100vh - 205px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  margin-top: 35px;
`;

const ChattingQA = styled.section`
  height: 100%;
  overflow: auto;
`;

const QuestionBox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AnswerBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const QuestionText = styled.p`
  background: #ffcd4a;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 10px;
  max-width: 70%;
`;

const AnswerText = styled.p`
  background: #d9d9d9;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  max-width: 70%;
  margin-bottom: 24px;
`;

const QuestionHint = styled.div`
  background: #ffcd4a;
  border-radius: 50px;
  padding: 8px 20px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
`;

const ChatForm = styled.form`
  display: flex;
  justify-contents: center;
  align-items: center;
  column-gap: 8px;
`;
const ChatInput = styled.input`
  all: unset;
  width: 100%;
  background: #d9d9d9;
  border-radius: 50px;
  padding: 12px 24px;
  &&::placeholder {
    color: #888888;
  }
`;
const ChatButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const HintOption = styled.p`
  width: 98px;
  border-right: 1px solid black;
  cursor: pointer;
  &&:last-child {
    border: none;
  }
  padding: 1px 0;
`;

const QuestionCorrect = styled.p`
  background: #ffcd4a;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 10px;
  max-width: 70%;
`;

export default function Chatting() {
  const CloseButton = () => <span>닫기</span>;
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`/letterbox/${1}/letter/${1}`, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((res) => setData(res.data));
    axios
      .get(`/letterbox/1/letter/1/hints`, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((res) => setData(res.data));
    console.log(localStorage.getItem("jwt"));
  }, []);
  console.log(data);
  return (
    <>
      {data ? (
        <>
          <ChattingBox>
            <ChattingQA>
              <QuestionBox>
                <QuestionText>{data.nickname}가 누구인 거 같애?</QuestionText>
              </QuestionBox>
              <AnswerBox>
                {data.answerList.map((answer) => (
                  <AnswerText>{answer}</AnswerText>
                ))}
              </AnswerBox>
              <QuestionBox>
                <QuestionText>땡! 틀렸어! 1단계 힌트 볼래?</QuestionText>
                <QuestionHint>
                  <HintOption>예</HintOption>
                  <HintOption>아니오</HintOption>
                </QuestionHint>
              </QuestionBox>
              <QuestionBox>
                <QuestionCorrect>정답이야! 대단한걸! </QuestionCorrect>
              </QuestionBox>
            </ChattingQA>
            <ChatForm>
              <ChatInput
                placeholder="답을 입력하세요"
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <ChatButton
                type="button"
                onClick={async () => {
                  axios
                    .get(`letterbox/${1}/letter/${1}/compare?answer=김연준`, {
                      headers: { authorization: localStorage.getItem("jwt") },
                    })
                    .then((res) => console.log(res));
                }}
              >
                <img alt="버튼" src={require("../../img/chatButton.png")} />
              </ChatButton>
            </ChatForm>
          </ChattingBox>
          <RoundButton Children={CloseButton} />
        </>
      ) : (
        <div>로딩중</div>
      )}
    </>
  );
}
