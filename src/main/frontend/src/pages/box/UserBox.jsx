import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoxShape from "../../components/BoxShape";
import { SCREEN_MAX_SIZE } from "../../constant";
import Share from "./Share";

const StorageBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 36px;
  box-sizing: border-box;
  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
  position: relative;
  gap: 25px;
`;

const StorageTitle = styled.h2`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;

const TtitleNickname = styled.span`
  color: #8040e9;
`;

export default function UserBox({ userBox }) {
  const messageList = userBox.letterLists ? userBox.letterLists : [];
  const navigate = useNavigate();

  return (
    <StorageBox>
      <StorageTitle>
        <TtitleNickname>{userBox.name}</TtitleNickname>
        <span>의</span>
        <p>시간표</p>
      </StorageTitle>
      <BoxShape
        owner={true}
        messageList={messageList}
        onClick={(id, open) => {
          if (open) {
            navigate(`/box/${userBox.letterboxId}/message/${id}`);
          } else {
            alert("아직 확인하실 수 없습니다.");
          }
        }}
      />
      <Share name={userBox.name} />
    </StorageBox>
  );
}
