import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import API from "../../config";
import { SCREEN_MAX_SIZE } from "../../constant";

const MessagesBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  height: 100%;
`;
const MessagePaper = styled.div`
  height: 50%;
  background: #f6f6f6;
  border-radius: 50px;
  padding: 34px;
  color: ${(props) => props.color};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
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
  const navigate = useNavigate();
  const { boxId, chatId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API.MESSAGE(boxId, chatId), {
          headers: { authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert("잘못된 접근입니다");
          navigate("/box");
        });
    }
    fetchData();
  }, []);

  return (
    <MessagesBox>
      {data ? (
        data.open ? (
          <>
            <MessageSender>
              <MessageSenderForm>from. </MessageSenderForm>
              <MessageSenderName>{data.nickname}</MessageSenderName>
            </MessageSender>
            <MessagePaper color={data.textColor} img={data.file.fileurl}>
              {data.content}
              {/* <img src={data.file.fileurl} /> */}
            </MessagePaper>
            <div>
              <RoundButton
                Children={() => <span>누군지 맞추기</span>}
                onClick={() => navigate(`/box/${boxId}/chatting/${chatId}`)}
              />
              <RoundButton
                Children={() => <span>닫기</span>}
                onClick={() => {
                  navigate(`/box/${boxId}`);
                }}
              />
            </div>
          </>
        ) : (
          <MessagePaper>아직 확인하실 수 없습니다</MessagePaper>
        )
      ) : (
        <div> 로딩중</div>
      )}
    </MessagesBox>
  );
}
