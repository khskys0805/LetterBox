import React, { useState } from "react";
import styled from "styled-components";
import ImgButton from "../../components/ImgButton";
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

const ShareBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ShareModel = () => {
  return (
    <ShareBox>
      네이버
      <div>카카오톡</div>
      <div>line</div>
      <div>url 복사</div>
    </ShareBox>
  );
};

export default function UserBox() {
  const [showShare, setShowShare] = useState(false);

  return (
    <StorageBox>
      <img src={require("../../img/luckyBag_inside.png")} alt="배경" />
      <ShareButton
        onClick={() => {
          setShowShare(!showShare);
        }}
      >
        <ImgButton skill={"share"} />
        <div>공유하기</div>
      </ShareButton>
      {showShare && <ShareModel />}
    </StorageBox>
  );
}
