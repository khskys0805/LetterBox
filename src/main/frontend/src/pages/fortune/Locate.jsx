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
  grid-template-columns: repeat(4, 1fr);
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
  const msg = Array.from({ length: 16 }, (_, idx) => idx);
  const [locate, setLocate] = useState(inputs.locate);
  const ban = [0, 3, 12, 15];
  return (
    <>
      <LocateBox>
        <LocatePick>
          {msg.map((index) => {
            if (ban.includes(index)) {
              return <div />;
            } else {
              return (
                <LocateCell
                  key={index}
                  number={index}
                  current={locate}
                  onClick={() => {
                    console.log(ban.includes(index) ? "34" : "no");
                    setLocate(index);
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
          setInputs({ ...inputs, locate });
          navigate("/result");
        }}
      />
    </>
  );
}
