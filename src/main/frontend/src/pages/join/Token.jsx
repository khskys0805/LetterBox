import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUserContext } from "../Context";
import API from "../../config";

export default function Token() {
  const [serchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { back } = useUserContext();

  useEffect(() => {
    axios
      .get(API.LOGINTOKEN(serchParams.get("code")))
      .then((res) => {
        localStorage.setItem("jwt", res.headers.authorization);
        navigate("/box");
      })
      .catch((err) => {
        console.log("로그인을 다시 시도해주세요");
        navigate("/auth");
      });
  });
}
