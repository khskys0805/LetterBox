import React from "react";
import styled from "styled-components";

const ConnectTitle = styled.p`
  line-height: 24px;
`;

const InputBox = styled.textarea`
  all: unset;
  background: #f7f7f7;
  width: 100%;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  height: 360px;
  margin: 35px 0 15px;
`;

const ImageButton = styled.div`
  padding: 16px 25px;
  background: #f93a68;
  border-radius: 50px;
  color: white;
  width: 100%;
  box-sizing: border-box;
`;

export default function Content() {
  return (
    <div>
      <ConnectTitle>따듯한 말을 가득 담아 복을 보내주세요</ConnectTitle>
      <InputBox placeholder="내용 입력" />
      <ImageButton>갤러리에서 배경 이미지 선택</ImageButton>
    </div>
  );
}
