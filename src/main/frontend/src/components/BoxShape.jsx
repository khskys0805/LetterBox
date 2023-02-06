import React from "react";
import styled from "styled-components";

const BoxShapeCover = styled.div`
  position: relative;
`;

const BoxShapePick = styled.div`
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

const BoxShapeCell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
`;

const CellShape = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  &:hover {
    cursor: ${(props) => props.owner && "pointer"};
  }
`;

const BoxShapeImg = styled.img`
  width: 100%;
`;

export default function BoxShape({ messageList, onClick, owner }) {
  const msg = Array.from({ length: 20 }, (_, idx) => idx);
  const msgLocation = messageList.map((msg) => msg.location);
  const msgId = messageList.map((msg) => msg.letterId);
  const msgOpen = messageList.map((msg) => msg.open);

  return (
    <BoxShapeCover>
      <BoxShapeImg src={require("../img/luckyBag_inside.png")} alt="배경" />
      <BoxShapePick>
        {msg.map((index) => {
          const find = msgLocation.indexOf(index);
          return (
            <div key={index}>
              {find !== -1 && (
                <BoxShapeCell>
                  <CellShape
                    owner={owner}
                    src={require(msgOpen[find]
                      ? "../img/coin.png"
                      : "../img/noCoin.png")}
                    onClick={() => {
                      onClick(msgId[find], msgOpen[find]);
                    }}
                  />
                </BoxShapeCell>
              )}
            </div>
          );
        })}
      </BoxShapePick>
    </BoxShapeCover>
  );
}
