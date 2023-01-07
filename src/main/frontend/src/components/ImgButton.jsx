import React from "react";
import styled from "styled-components";

const ImgButtonBox = styled.div`
  position: relative;
`;

const ButtonSkill = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function ImgButton({ skill }) {
  console.log(skill);
  return (
    <ImgButtonBox>
      <img src={require("../img/border.png")} alt="배경" />
      <ButtonSkill src={require(`../img/${skill}.png`)} alt="기능" />
    </ImgButtonBox>
  );
}
