import React from "react";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";

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
  return (
    <>
      <ChattingBox>
        <ChattingQA>
          <QuestionBox>
            <QuestionText>크리스마스 진심녀가 누구인 것 같아?</QuestionText>
          </QuestionBox>
          <AnswerBox>
            <AnswerText>장현아</AnswerText>
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
          <ChatInput placeholder="답을 입력하세요" />
          <ChatButton>
            <img alt="버튼" src={require("../img/chatButton.png")} />
          </ChatButton>
        </ChatForm>
      </ChattingBox>
      <RoundButton Children={CloseButton} />
    </>
  );
}
