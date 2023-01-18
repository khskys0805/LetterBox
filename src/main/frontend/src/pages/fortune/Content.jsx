import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

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

const ImageInput = styled.div`
  padding: 16px 25px;
  background: #da2e2a;
  border-radius: 50px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  & input {
    display: none;
  }
`;

export default function Content() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [content, setContent] = useState(inputs.content);
  const [file, setFile] = useState("");
  return (
    <>
      <div>
        <ConnectTitle>따듯한 말을 가득 담아 복을 보내주세요</ConnectTitle>
        <InputBox
          placeholder="내용 입력"
          onChange={(event) => {
            setContent({ text: event.target.value });
          }}
          value={content.text}
        />
        <ImageInput>
          <label htmlFor="image">
            {content.img ? "이미지 제목" : "갤러리에서 배경 이미지 선택"}
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(event) => {
              setContent({ ...content, img: event.target.files[0] });
            }}
          />
        </ImageInput>
      </div>
      <RoundButton
        Children={Next}
        onClick={() => {
          setInputs({ ...inputs, content });
          navigate("/question/locate");
        }}
      />
    </>
  );
}
