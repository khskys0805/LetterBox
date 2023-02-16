import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import { END_DATE, THEME } from "../../constant";

const ServiceEndCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  & p {
    font-size: 28px;
    color: #8040e9;
  }
`;

const ServiceEnding = styled.div`
  font-size: 24px;
  margin-top: 20px;
`;

export default function ServiceEnd() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const id = setInterval(() => {
      const diff = END_DATE() - new Date();
      setShow(diff >= 0 ? true : false);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {show ? (
        <Outlet />
      ) : (
        <ServiceEndCover>
          <div>
            <p>더 이상 서비스를</p>
            <p>이용하실 수 없습니다</p>
            <ServiceEnding>감사합니다</ServiceEnding>
          </div>
          <RoundButton
            Children={() => <span>홈으로 이동</span>}
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로 이동
          </RoundButton>
        </ServiceEndCover>
      )}
    </>
  );
}
