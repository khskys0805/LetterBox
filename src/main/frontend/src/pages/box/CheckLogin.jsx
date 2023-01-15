import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function CheckLogin() {
  const { id } = useParams();
  const [userBoxId, setUserBoxId] = useState();
  const navigate = useNavigate();
  console.log(userBoxId === parseInt(id));
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/letterbox/my", {
          headers: { authorization: localStorage.getItem("jwt") },
        })
        .then((response) => {
          setUserBoxId(response.data.letterboxId);
          navigate(
            userBoxId === parseInt(id) ? `/box/${id}/user` : `/box/${id}/other`
          );
        })
        .catch((err) => navigate(`/box/${id}/other`));
    }
    fetchData();
  }, []);
  return <Outlet />;
}
