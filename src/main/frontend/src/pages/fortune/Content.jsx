import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import { useEffect } from "react";
import StopButton from "../../components/StopButton";

const ConnectTitle = styled.p`
  line-height: 24px;
`;

const InputBox = styled.textarea.attrs((props) => ({
  style: {
    color: props.color,
  },
}))`
  all: unset;
  width: 100%;
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  height: 360px;
  position: relative;
  z-index: 10;
  max-height: 300px;
`;

const ImageInput = styled.div`
  width: 100%;
  padding: 16px 20px;
  background: #da2e2a;
  border-radius: 50px;
  color: white;
  box-sizing: border-box;
  & input {
    display: none;
  }
`;

const InputImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const InputCover = styled.div`
  position: relative;
  margin: 35px 0 15px;
  background: #f7f7f7;
`;

const InputColor = styled.input`
  all: unset;
`;

const SelectButton = styled.div`
  width: 100%;
  padding: 16px 20px;
  background: #da2e2a;
  border-radius: 50px;
  color: white;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ContentColor = styled.div``;

export default function Content() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const [content, setContent] = useState(inputs.content);
  const [file, setFile] = useState("");
  const [color, setColor] = useState("#000000");
  const [selectcolor, setselectCorlor] = useState(false);

  return (
    <>
      <div>
        <ConnectTitle>따듯한 말을 가득 담아 복을 보내주세요</ConnectTitle>
        <InputCover>
          <InputBox
            placeholder="내용 입력"
            onChange={(event) => {
              setContent({ text: event.target.value });
            }}
            value={content.text}
            color={color}
          />
          <InputImg src={file} />
        </InputCover>
        {content.img ? (
          <SelectButton
            onClick={() => {
              setContent({ ...content, img: "" });
              setFile("");
            }}
          >
            이미지 취소하기
          </SelectButton>
        ) : (
          <ImageInput>
            <label htmlFor="image">갤러리에서 배경 이미지 선택</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(event) => {
                setContent({ ...content, img: event.target.files[0] });
                setFile(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </ImageInput>
        )}
        <ContentColor>
          <SelectButton
            onClick={() => {
              setselectCorlor(!selectcolor);
            }}
          >
            <label htmlFor="color">색 선택</label>
            <InputColor
              type="color"
              id="color"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
                setInputs({ ...inputs, textColor: color });
              }}
            />
          </SelectButton>
        </ContentColor>
      </div>
      {content ? (
        <RoundButton
          Children={Next}
          onClick={() => {
            setInputs({ ...inputs, content });
            navigate(`/question/${inputs.boxId}/locate`);
          }}
        />
      ) : (
        <StopButton text="내용을 입력해주세요" />
      )}
    </>
  );
}
