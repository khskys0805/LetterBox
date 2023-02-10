import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { SCREEN_MAX_SIZE } from "../../constant";

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
  align-content: space-around;
`;

export default function Question() {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    hints: { first: "", second: "", thrid: "" },
    content: "",
    letterlocation: 0,
    boxId: id,
    textColor: "#000000",
  });
  const navigate = useNavigate();

  useEffect(() => {
    function watchReload() {
      window.addEventListener("beforeunload", async (event) => {
        logic(event);
      });
    }
    watchReload();
    return () => {
      window.removeEventListener("beforeunload", watchReload);
    };
  }, []);

  const [move, setMove] = useState(`/question/${id}/name`);
  function logic(event) {
    event.preventDefault();
    setMove(`/question${id}/name`);
    event.returnValue = "";
  }

  useEffect(() => {
    navigate(move);
  }, [move]);

  return (
    <QuestionBox>
      <QuestionInside>
        <Outlet context={{ inputs, setInputs }} />
      </QuestionInside>
    </QuestionBox>
  );
}
