import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgButton from "../../components/ImgButton";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";
import Share from "./Share";

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

export default function UserBox() {
  const [showShare, setShowShare] = useState(false);
  useEffect(() => {
    axios
      .get("/letterbox", {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <StorageBox>
      <img src={require("../../img/luckyBag_inside.png")} alt="배경" />
      <ShareButton
        onClick={() => {
          setShowShare(true);
        }}
      >
        <ImgButton skill={"share"} />
        <div>공유하기</div>
      </ShareButton>
      {showShare && <Share setShowShare={setShowShare} />}
    </StorageBox>
  );
}
