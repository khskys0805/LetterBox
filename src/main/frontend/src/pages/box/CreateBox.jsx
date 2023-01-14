import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";
import { SCREEN_MAX_SIZE } from "../../constant/max-style";

const CreateBagBox = styled.div`
  max-width: ${SCREEN_MAX_SIZE}px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 36px;
  box-sizing: border-box;
`;

const CreateBagInfo = styled.div`
  position: relative;
`;

const CreateBagForm = styled.div`
  position: absolute;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  padding: 20px;
`;

const CreateBagImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BagInput = styled.input`
  all: unset;
  background: white;
  padding: 10px 10px;
  border-radius: 24px;
  max-width: 72%;
  margin-right: 5px;
  @media only screen and (max-width: 300px) {
    max-width: 70%;
    padding: 6px 10px;
    font-size: 12px;
  }
`;

const BagInputLabel = styled.label`
  color: white;
  & span {
    font-size: 24px;
  }

  & p {
    font-size: 48px;
    text-align: center;
    padding: 15px 0;
  }

  @media only screen and (max-width: 300px) {
    & span {
      font-size: 12px;
    }

    & p {
      font-size: 20px;
    }
  }
`;

const CreateBagTitle = styled.p`
  text-align: center;
  font-size: 32px;
  @media only screen and (max-width: 300px) {
    font-size: 20px;
  }
`;

export default function CreateBox() {
  const Create = () => <span>만들기</span>;
  const navigate = useNavigate();

  return (
    <CreateBagBox>
      <CreateBagInfo>
        <CreateBagImg
          src={require("../../img/luckyBag_inside.png")}
          alt="배경"
        />
        <CreateBagForm>
          <BagInput placeholder="복주머니 이름" id="bagName" />
          <BagInputLabel htmlFor="bagName">
            <span>의</span>
            <p>복주머니</p>
          </BagInputLabel>
        </CreateBagForm>
      </CreateBagInfo>
      <CreateBagTitle>누구의 복주머니인가요?</CreateBagTitle>
      <RoundButton
        Children={Create}
        onClick={() => {
          //복 보내기

          // 복주머니 생성
          axios
            .post(
              "/letterbox",
              { name: "연주니" },
              { headers: { authorization: localStorage.getItem("jwt") } }
            )
            .then((response) => {
              console.log(response);
              // navigate("/userBox");
            })
            .catch((err) => console.log(err));
          // 마이페이지
          //     axios
          //     .get("/me", {
          //       headers: { authorization: localStorage.getItem("jwt") },
          //     })
          //     .then((res) => console.log(res))
          //     .catch((err) => console.log(err));
          // }}
        }}
      />
    </CreateBagBox>
  );
}
