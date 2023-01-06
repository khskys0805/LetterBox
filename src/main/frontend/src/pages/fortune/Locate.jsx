import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

const LocateBox = styled.div`
  position: relative;
`;
const LocatePick = styled.div`
  width: 100%;
  height: 74%;
  position: absolute;
  top: 25%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const LocateCell = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

export default function Locate() {
  const { inputs, setInputs } = useOutletContext();
  const Next = () => <span>다음</span>;
  const navigate = useNavigate();
  const msg = Array.from({ length: 16 }, (_, idx) => idx);
  const [locate, setLocate] = useState();
  return (
    <>
      <LocateBox>
        <LocatePick>
          {msg.map((index) => {
            return (
              <LocateCell
                onClick={(event) => {
                  const arr = event.target.parentElement.children;
                  for (let index = 0; index < arr.length; index++) {
                    arr[index].style.background = "";
                  }
                  event.target.style.background = "yellow";
                  // setLocate();
                }}
              >
                {index}
              </LocateCell>
            );
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
          // setInputs({ ...inputs, locate });
          navigate("/result");
        }}
      />
    </>
  );
}
