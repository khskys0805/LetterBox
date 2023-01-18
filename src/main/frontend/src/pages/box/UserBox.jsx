import React from "react";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";
import Share from "./Share";

const StorageBox = styled.div`
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

const StorageTitle = styled.h2`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;

const TtitleNickname = styled.span`
  color: #dd403d;
`;

export default function UserBox({ userBox }) {
  return (
    <StorageBox>
      <StorageTitle>
        <TtitleNickname>{userBox.name}</TtitleNickname>
        <span>의</span>
        <p>복주머니</p>
      </StorageTitle>
      <img
        src={require("../../img/luckyBag_inside.png")}
        alt="배경"
        style={{ width: "80%" }}
      />
      <Share />
    </StorageBox>
  );
}
