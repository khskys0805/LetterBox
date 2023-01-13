import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

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
`;

const LocateCell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  &:hover {
    background: blue;
    cursor: pointer;
  }
  background: ${(props) => props.current === props.number && "blue"};
`;

export default function Locate() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const msg = Array.from({ length: 20 }, (_, idx) => idx);
  const [locate, setLocate] = useState(0);
  const ban = [0, 4, 20, 24];
  return (
    <>
      <LocateBox>
        <LocatePick>
          {msg.map((index) => {
            if (ban.includes(index)) {
              return <div key={index} />;
            } else {
              return (
                <LocateCell
                  key={index}
                  number={index}
                  current={locate}
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
          src={require("../../img/luckyBag_inside.png")}
          alt="자리 선정"
        />
      </LocateBox>
      <RoundButton
        Children={Next}
        onClick={() => {
          axios
            .post(
              "/letterbox/3/letter",
              {
                name: inputs.name,
                nickname: inputs.nickname,
                hint1: inputs.hints.first,
                hint2: inputs.hints.second,
                hint3: inputs.hints.thrid,
                content: inputs.content.text,
                // file: "",
              },
              { headers: { authorization: localStorage.getItem("jwt") } }
            )
            .then((response) => {
              console.log(response);
              navigate("/result");
            })
            .catch((err) => alert("다시 시도해주세요"));
        }}
      />
    </>
  );
}
