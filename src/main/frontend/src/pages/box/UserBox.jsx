import axios from "axios";
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
`;

const TtitleNickname = styled.span`
  color: #dd403d;
`;

const TitleBoxType = styled.p`
  text-align: center;
`;

export default function UserBox() {
  const formData = new FormData();
  return (
    <StorageBox>
      <StorageTitle>
        <TtitleNickname>크리스마스 진심녀</TtitleNickname>
        <span>의</span>
        <TitleBoxType>복주머니</TitleBoxType>
      </StorageTitle>
      <img
        src={require("../../img/luckyBag_inside.png")}
        alt="배경"
        style={{ width: "100%" }}
      />
      <Share />
      <div>내 복주머니 공유하기</div>
      <form
        encType="multipart/form-data"
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(
              "/letterbox/1/letter",
              {
                name: "김연준",
                nickname: "연주니",
                hint1: "연재",
                hint2: "쌍둥이",
                hint3: "바보야",
                content: "안녕하세요",
                letterlocation: 1,
              },
              { headers: { authorization: localStorage.getItem("jwt") } }
            )
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              alert("다시 시도해주세요");
              console.log(err);
            });
        }}
      >
        제출하기
      </form>
      <div
        onClick={() => {
          axios
            .get("/letterbox/my", {
              headers: { authorization: localStorage.getItem("jwt") },
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((err) => console.log(err));
        }}
      >
        확인하기
      </div>
    </StorageBox>
  );
}
