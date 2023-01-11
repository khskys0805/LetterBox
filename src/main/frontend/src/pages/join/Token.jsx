import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Token() {
  const [serchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/login/oauth_kakao?code=${serchParams.get("code")}`)
      .then((res) => {
        localStorage.setItem("jwt", res.headers.authorization);
        navigate("/userbox");
      })
      .catch((err) => {
        console.log("로그인을 다시 시도해주세요");
        navigate("/auth");
      });
  }, []);
}
