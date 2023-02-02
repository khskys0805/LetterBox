import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import BoxShape from "../../components/BoxShape";
import API from "../../config";
import { useUserContext } from "../Context";

const LocateBox = styled.div`
  position: relative;
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
  align-items: center;
`;

const LocateCell = styled.div`
  width: 100%;
  border-radius: 4px;
  &:hover {
    background: repeating-linear-gradient(
      45deg,
      #ca2323,
      #4440 5px,
      #ed563f 12px,
      #ff1c1cbf 15px
    );
  }
`;

const LocateCellSelected = styled.div`
  background: gray;
`;
const CellShape = styled.img`
  object-fit: contain;
  width: 80%;
  &:hover {
    cursor: pointer;
  }
  visibility: ${(props) =>
    props.current === props.number ? "visible" : "hidden"};
`;
export default function Locate() {
  const { inputs, setInputs } = useOutletContext();
  const navigate = useNavigate();
  const msg = Array.from({ length: 20 }, (_, idx) => idx);
  const [locate, setLocate] = useState(0);
  const ban = [0, 4, 15, 19];
  const { location } = useUserContext();

  return (
    <>
      <LocateBox>
        <LocatePick>
          {msg.map((index) => {
            if (ban.includes(index)) {
              return <div key={index} />;
            } else if (location.includes(index)) {
              return <LocateCellSelected key={index} />;
            } else {
              return (
                <LocateCell
                  key={index}
                  onClick={() => {
                    setLocate(index);
                    setInputs({ ...inputs, letterlocation: index });
                  }}
                >
                  <CellShape
                    src={require("../../img/coin.png")}
                    current={locate}
                    number={index}
                  />
                </LocateCell>
              );
            }
          })}
        </LocatePick>
        <img
          style={{ width: "100%" }}
          src={require("../../img/luckyBag_inside.png")}
          alt="자리 선정"
        />
      </LocateBox>

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
            console.log(fileInfo, fileUpload);
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
              },
              { headers: { authorization: localStorage.getItem("jwt") } }
            )
            .then((res) => {
              console.log(res);
              navigate("/result");
            })
            .catch((err) => {
              console.log(err.config.data);
              alert("알 수 없는 에러가 발생했습니다");
            });
        }}
      >
        <button type="submit">최종최출</button>
      </form>
    </>
  );
}
