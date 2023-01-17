import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import API from "../../config";
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
  const [file, setFile] = useState();
  console.log(file);
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
        style={{ width: "100%" }}
      />
      <Share />
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(event) => {
          setFile(event);
        }}
      />
      <form
        encType="multipart/form-data"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData();
          formData.append("multipartFile", file);
          formData.append("encType", "multipart/form-data");
          axios({
            method: "POST",
            url: "/s3/file",
            headers: {
              "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
            },
            data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
          })
            .then((response) => {
              console.log(response);
              alert("상품 등록이 완료되었습니다");
            })
            .catch(() => {
              alert("알 수 없는 오류가 발생했습니다.");
            });
        }}
      >
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <button type="submit">확인하기</button>
      </form>
    </StorageBox>
  );
}
