import React, { useState } from "react";
import RoundButton from "../components/RoundButton";
import Connct from "./fortune/Connct";
import Hints from "./fortune/Hints";
import Nickname from "./fortune/Nickname";
import Content from "./fortune/Content";
import { useNavigate } from "react-router-dom";
import Complete from "./fortune/Complete";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../constant/max-style";
import Locate from "./fortune/Locate";

const QuestionBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const QuestionInside = styled.div`
  display: grid;
  grid-auto-columns: 8fr 2fr;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
`;

export default function Question() {
  const Next = () => <span>다음</span>;
  const step = [
    () => <Nickname />,
    () => <Hints />,
    () => <Connct />,
    () => <Content />,
    () => <Locate />,
  ];
  const [turn, setTurn] = useState(0);
  const navigate = useNavigate();
  return (
    <QuestionBox>
      <QuestionInside>
        {turn < 5 && (
          <>
            <div style={{ alignSelf: "center" }}>{step[turn]()}</div>
            <div style={{ alignSelf: "center" }}>
              {
                <RoundButton
                  Children={Next}
                  onClick={() => {
                    console.log(turn);
                    setTurn(turn + 1);
                    if (turn === 4) {
                      navigate("/result");
                    }
                  }}
                />
              }
            </div>
          </>
        )}
        {/* axios사용하여 url주소 넘기기  추가하면 지우기*/}
      </QuestionInside>
      {/* {turn === 4 && <Complete />} */}
    </QuestionBox>
  );
}
