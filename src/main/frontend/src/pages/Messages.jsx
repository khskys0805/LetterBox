import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Canvas from "../components/Canvas";
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
  position: relative;
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

const MessageImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const MessageText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export default function Messages() {
  const Pick = () => <span>누군지 맞추기</span>;
  const Close = () => <span>닫기</span>;
  const navigate = useNavigate();
  const { boxId, chatId } = useParams();
  const [data, setData] = useState();
  const [imgData, setImgData] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`/letterbox/${boxId}/letter/${chatId}`, {
          headers: { authorization: localStorage.getItem("jwt") },
        })
        .then((res) => {
          setData(res.data);
          console.log(res);
          setImgData(res.data.file.fileurl);
        })
        .catch(() => {
          setData();
          // localStorage.removeItem("jwt");
          // navigate("/");
        });
    }
    fetchData();
  }, []);
  const img = new Image();
  img.src = imgData;
  img.alt = "배경이미지";
  return (
    <MessagesBox>
      {data ? (
        <>
          <MessageSender>
            <MessageSenderForm>from. </MessageSenderForm>
            <MessageSenderName>{data.nickname}</MessageSenderName>
          </MessageSender>
          <MessagePaper>
            <MessageImg src={imgData} />
            <MessageText>{data.content}</MessageText>
          </MessagePaper>
          <div>
            <RoundButton
              Children={Pick}
              onClick={() => navigate(`/box/${boxId}/chatting/${chatId}`)}
            />
            <RoundButton
              Children={Close}
              onClick={() => {
                navigate(`/box/${boxId}`);
              }}
            />
          </div>
        </>
      ) : (
        <div> 로딩중</div>
      )}
    </MessagesBox>
  );
}
