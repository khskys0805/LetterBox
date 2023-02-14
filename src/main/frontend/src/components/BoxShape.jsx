import React from "react";
import styled from "styled-components";
import { USERIMAGE } from "../constant";

const BoxShapeCover = styled.div`
  position: relative;
`;

const BoxShapePick = styled.div`
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

const CellShape = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20%;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: ${(props) => props.owner && "pointer"};
  }
`;

const BoxShapeImg = styled.img`
  width: 100%;
`;

export default function BoxShape({ messageList, onClick, owner }) {
  const msg = Array.from({ length: 35 }, (_, idx) => idx);
  const msgLocation = messageList.map((msg) => msg.location);
  const msgId = messageList.map((msg) => msg.letterId);
  const msgOpen = messageList.map((msg) => msg.open);

  return (
    <BoxShapeCover>
      <BoxShapeImg src={require(`../img/${USERIMAGE}`)} alt="배경" />
      <BoxShapePick>
        {msg.map((index) => {
          const find = msgLocation.indexOf(index);
          return (
            <>
              {find !== -1 ? (
                <CellShape
                  key={`index`}
                  owner={owner}
                  color={msgOpen[find] ? "red" : "#74809f"}
                  onClick={() => {
                    onClick(msgId[find], msgOpen[find]);
                  }}
                />
              ) : (
                <div key={`index`} />
              )}
            </>
          );
        })}
      </BoxShapePick>
    </BoxShapeCover>
  );
}
