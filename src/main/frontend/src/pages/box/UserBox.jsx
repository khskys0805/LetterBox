import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  position: relative;
`;

const StorageTitle = styled.h2`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;

const TtitleNickname = styled.span`
  color: #dd403d;
`;

const LocatePick = styled.div`
  width: 90%;
  height: 70%;
  position: absolute;
  top: 25%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  clip-path: polygon(
    35% -8%,
    73% -1%,
    102% 30%,
    100% 70%,
    71% 100%,
    29% 100%,
    0% 70%,
    -2% 30%
  );
  left: 5%;
`;

const LocateCell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
`;

const LocateBox = styled.div`
  position: relative;
`;

const CellShape = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: blue;
  &:hover {
    background: red;
    cursor: pointer;
  }
`;

export default function UserBox({ userBox }) {
  console.log(userBox);
  const msg = Array.from({ length: 20 }, (_, idx) => idx);
  const msgLocation = userBox.letterList.map((msg) => msg.location);
  const msgId = userBox.letterList.map((msg) => msg.letter_id);
  const navigate = useNavigate();
  return (
    <StorageBox>
      <StorageTitle>
        <TtitleNickname>{userBox.name}</TtitleNickname>
        <span>의</span>
        <p>복주머니</p>
      </StorageTitle>
      <LocateBox>
        <img
          src={require("../../img/luckyBag_inside.png")}
          alt="배경"
          style={{ width: "100%" }}
        />
        <LocatePick>
          {msg.map((index) => {
            const find = msgLocation.indexOf(index);
            if (find !== -1) {
              return (
                <LocateCell
                  key={msgId[find]}
                  onClick={() => {
                    navigate(
                      `/box/${userBox.letterboxId}/message/${msgId[find]}`
                    );
                  }}
                >
                  <CellShape />
                </LocateCell>
              );
            } else {
              return <div />;
            }
          })}
        </LocatePick>
      </LocateBox>
      <Share />
    </StorageBox>
  );
}
