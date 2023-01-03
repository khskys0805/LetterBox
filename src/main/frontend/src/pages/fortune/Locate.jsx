import React from "react";
import styled from "styled-components";

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
  const msg = Array.from({ length: 16 }, (_, idx) => idx);
  return (
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
  );
}
