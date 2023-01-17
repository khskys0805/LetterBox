import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LetterBox from "./LetterBox";
import UserBox from "./UserBox";

export default function CheckLogin() {
  const { id } = useParams();
  const [userBox, setUserBox] = useState();
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/letterbox/my", {
          headers: { authorization: localStorage.getItem("jwt") },
        })
        .then((response) => {
          setUserBox(response.data);
          parseInt(id) === response.data.letterboxId && setOwner(true);
        })
        .catch((err) => setOwner(false));
    }
    fetchData();
  }, []);
  return <>{owner ? <UserBox userBox={userBox} /> : <LetterBox />}</>;
}
