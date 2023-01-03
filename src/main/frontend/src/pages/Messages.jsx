import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../components/RoundButton";
import { SCREEN_MAX_SIZE } from "../constant/max-style";

const MessagesBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  padding: 0 28px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
`;
const MessagePaper = styled.div`
  height: 50%;
  background: #f6f6f6;
  border-radius: 50px;
  padding: 34px;
`;

const MessageSender = styled.h2`
  font-size: 24px;
  text-align: center;
`;
const MessageSenderForm = styled.span`
  text-transform: uppercase;
`;

const MessageSenderName = styled.span`
  text-transform: uppercase;
`;

export default function Messages() {
  const Pick = () => <span>누군지 맞추기</span>;
  const Close = () => <span>닫기</span>;
  const navigate = useNavigate();

  return (
    <MessagesBox>
      <MessageSender>
        <MessageSenderForm>from.</MessageSenderForm>
        <MessageSenderName> 크리스마스 진심녀</MessageSenderName>
      </MessageSender>
      <MessagePaper>해피뉴이어 새해복 많이 받어</MessagePaper>
      <div>
        <RoundButton Children={Pick} onClick={() => navigate("/question")} />
        <RoundButton Children={Close} />
      </div>
    </MessagesBox>
  );
}
