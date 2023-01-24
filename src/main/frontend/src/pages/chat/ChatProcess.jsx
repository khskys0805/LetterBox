import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  column-gap: 20px;
  padding: 8px 0px;
`;

const ChatForm = styled.form`
  display: flex;
  justify-contents: center;
  align-items: center;
  column-gap: 8px;
  padding: 3px 15px;
  box-sizing: border-box;
  height: 58px;
  justify-content: space-around;
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

const HintOption = styled.button`
  all: unset;
  background: #ffcd4a;
  border-radius: 50px;
  padding: 8px 20px;
  width: 98px;
  cursor: pointer;
  text-align: center;
`;

const QuestionBottom = styled.div`
  position: fixed;
  bottom: 95px;
  width: 100%;
  left: 0;
  background: #f7f7f7;
`;
const questionMap = new Map([
  [0, "땡! 틀렸어! 1단계 힌트 볼래?"],
  [1, "또... 틀렸어! 2단계 힌트 볼래?"],
  [2, "이제.. 마지막 힌트야.. 3단계 힌트 볼래?"],
]);

const GetHint = ({ count, boxId, chatId }) => {
  const [hintState, setHintState] = useState("");
  useEffect(() => {
    axios
      .get(`/letterbox/${boxId}/letter/${chatId}/hint/${count}`, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((res) => {
        setHintState(res.data);
      });
  }, []);

  return (
    <QuestionText>
      {count}번째 힌트: {hintState}
    </QuestionText>
  );
};

export default function ChatProcess({ setRefresh, refresh, data }) {
  const [input, setInput] = useState("");
  const { boxId, chatId } = useParams();

  let hintNumber = 0;
  return (
    <>
      {data.answerList.map((an, index) => {
        if (index % 2 || hintNumber >= 3) {
          const show = an === "예" ? true : false;
          hintNumber = show ? hintNumber + 1 : hintNumber;

          return (
            <>
              <AnswerBox>
                <AnswerText>{an}</AnswerText>
              </AnswerBox>
              <QuestionBox>
                {show && hintNumber < 3 && (
                  <GetHint count={hintNumber} boxId={boxId} chatId={chatId} />
                )}

                {hintNumber >= 3 && (
                  <QuestionText>이제 더이상 볼 힌트가 없어...</QuestionText>
                )}

                <QuestionText> 다시 입력해줘</QuestionText>
              </QuestionBox>
            </>
          );
        } else {
          return (
            <>
              <AnswerBox>
                <AnswerText>{an}</AnswerText>
              </AnswerBox>
              <QuestionBox>
                <QuestionText>{questionMap.get(hintNumber)}</QuestionText>
              </QuestionBox>
            </>
          );
        }
      })}
      <QuestionBottom>
        <ChatForm
          onSubmit={async (event) => {
            event.preventDefault();
            await axios
              .get(
                `/letterbox/${boxId}/letter/${chatId}/compare?answer=${input}`,
                {
                  headers: { authorization: localStorage.getItem("jwt") },
                }
              )
              .then((res) => {
                setInput("");
              });
            setRefresh(!refresh);
          }}
        >
          {data.answerList.length % 2 && hintNumber < 3 ? (
            <>
              <HintOption
                onClick={() => {
                  setInput("예");
                }}
              >
                예
              </HintOption>
              <HintOption
                onClick={() => {
                  setInput("아니오");
                }}
              >
                아니오
              </HintOption>
            </>
          ) : (
            <>
              <ChatInput
                placeholder="답을 입력하세요"
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <ChatButton>
                <img alt="버튼" src={require("../../img/chatButton.png")} />
              </ChatButton>
            </>
          )}
        </ChatForm>
      </QuestionBottom>
    </>
  );
}
