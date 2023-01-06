import React from "react";
import styled from "styled-components";
import ImgButton from "../../components/ImgButton";
import RoundButton from "../../components/RoundButton";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";

const StorageBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  box-sizing: border-box;
`;

const ShareButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
`;

export default function UserBag() {
  return (
    <StorageBox>
      <img src={require("../../img/luckyBag_inside.png")} alt="배경" />
      <ShareButton>
        <ImgButton skill={"share"} />
        <span>공유하기</span>
      </ShareButton>
    </StorageBox>
  );
}
