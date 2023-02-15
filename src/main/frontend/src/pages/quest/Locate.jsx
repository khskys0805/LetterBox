import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import StopButton from "../../components/StopButton";
import API from "../../config";
import { THEME, USERIMAGE } from "../../constant";
import { useUserContext } from "../Context";

const LocateBox = styled.div`
  position: relative;
`;
const LocatePick = styled.div`
  width: 83%;
  height: 77%;
  position: absolute;
  top: 22.6%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 1fr);
  left: 16%;
  gap: 4px;
`;

const LocateCell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20%;
  &:hover {
    background: #b0c6ff;
  }
  background-color: ${(props) => props.current === props.number && "#B0C6FF"};
`;

const SelectedCellShape = styled.div`
  background-color: #74809f;
  border-radius: 20%;
`;

const SubmitButton = styled.button`
  all: unset;
  margin: 30px auto 0;
  cursor: pointer;
  background: ${THEME};
  border-radius: 50px;
  padding: 16px 0;
  width: 100%;
  color: white;
`;

export default function Locate() {
  const { inputs, setInputs } = useOutletContext();
  const navigate = useNavigate();
  const msg = Array.from({ length: 35 }, (_, idx) => idx);
  const [locate, setLocate] = useState();
  const ban = [];
  const { location } = useUserContext();

  return (
    <>
      <LocateBox>
        <LocatePick>
          {msg.map((index) => {
            if (ban.includes(index)) {
              return <div key={index} />;
            } else if (location.includes(index)) {
              return <SelectedCellShape key={index} />;
            } else {
              return (
                <LocateCell
                  current={locate}
                  number={index}
                  key={index}
                  onClick={() => {
                    setLocate(index);
                    setInputs({ ...inputs, letterlocation: index });
                  }}
                />
              );
            }
          })}
        </LocatePick>
        <img
          style={{ width: "100%" }}
          src={require(`../../img/${USERIMAGE}`)}
          alt="자리 선정"
        />
      </LocateBox>

      {locate ? (
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append("multipartFile", inputs.content.img);
            formData.append("encType", "multipart/form-data");
            let fileInfo = null;
            try {
              const fileUpload = await axios({
                method: "POST",
                url: "/s3/file",
                headers: {
                  "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
                },
                data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
              });
              fileInfo = fileUpload.data;
            } catch (error) {
              console.log("선택한 사진이 없습니다");
            }

            await axios
              .post(
                API.LETTER(inputs.boxId),
                {
                  name: inputs.name,
                  nickname: inputs.nickname,
                  hint1: inputs.hints.first,
                  hint2: inputs.hints.second,
                  hint3: inputs.hints.thrid,
                  content: inputs.content.text,
                  letterlocation: inputs.letterlocation,
                  file: fileInfo,
                  textColor: inputs.textColor,
                  backColor: inputs.bgColor,
                },
                { headers: { authorization: localStorage.getItem("jwt") } }
              )
              .then((res) => {
                navigate("/result");
              })
              .catch((err) => {
                console.log(err.config.data);
                alert("알 수 없는 에러가 발생했습니다");
              });
          }}
        >
          <SubmitButton type="submit">최종제출</SubmitButton>
        </form>
      ) : (
        <StopButton text="위치를 지정해주세요" />
      )}
    </>
  );
}
