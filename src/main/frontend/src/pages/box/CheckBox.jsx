import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import API from "../../config";

export default function CheckBox() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API.MYPAGE, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((response) => {
        console.log(response);
        response.data
          ? navigate(`/box/${response.data.letterboxId}`)
          : navigate("/box/create");
      })
      .catch((err) => {
        localStorage.removeItem("jwt");
      });
  }, []);
  return <Outlet />;
}
