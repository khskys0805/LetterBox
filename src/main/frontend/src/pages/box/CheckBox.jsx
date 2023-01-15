import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function CheckBox() {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);
  useEffect(() => {
    axios
      .get("/letterbox/my", {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((response) => {
        response.data
          ? navigate(`/box/${response.data.letterboxId}/user`)
          : navigate("/box/create");
      })
      .catch((err) => navigate("/box/create"));
  }, []);
  return <Outlet />;
}
