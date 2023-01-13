import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function CheckBox() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/letterbox/my", {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((response) => {
        response.data ? navigate("/box/user") : navigate("/box/create");
        console.log(response.data);
      })
      .catch((err) => navigate("/box/create"));
  }, []);
  return <Outlet />;
}
