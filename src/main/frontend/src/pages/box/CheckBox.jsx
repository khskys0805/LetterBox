import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function CheckBox() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/letterbox", {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then(() => {
        navigate("/box/user");
      })
      .catch((err) => navigate("/box/create"));
  });
  return <Outlet />;
}
