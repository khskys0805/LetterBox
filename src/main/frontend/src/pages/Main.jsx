import React from "react";
import { useNavigate } from "react-router-dom";
import RoundButton from "../components/RoundButton";

export default function Main() {
  const navigate = useNavigate();
  const Fortune = () => <span>복 선물하기</span>;
  const Bag = () => <span>내 복주머니 만들기</span>;
  return (
    <div>
      <RoundButton
        Children={Fortune}
        onClick={() => {
          navigate("/question");
        }}
      />
      <RoundButton Children={Bag} />
    </div>
  );
}
