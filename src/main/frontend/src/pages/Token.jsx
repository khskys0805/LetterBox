import React, { useState } from "react";
import axios from "axios";

export default function Token() {
  const params = window.location.search;
  const [jwtToken, setJwtToken] = useState();
  console.log(jwtToken);
  return (
    <>
      <button
        onClick={() => {
          axios
            .get(`/login/oauth_kakao${params}`)
            .then((res) => setJwtToken(res.headers.authorization))
            .catch((err) => console.log(err));
        }}
      >
        Token
      </button>
      <button
        onClick={() => {
          axios
            .get("/me", {
              headers: { authorization: jwtToken },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }}
      >
        me
      </button>
    </>
  );
}
