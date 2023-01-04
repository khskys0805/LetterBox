import React from "react";
import axios from "axios";
export default function Token() {
  const params = window.location.search;
  console.log(params.slice(6));
  return (
    <button
      onClick={() => {
        // axios
        //   .get(`/login/oauth_kakao`, {
        //     params: { code: params.slice(6) },
        //   })
        axios
          .get(`/login/oauth_kakao${params}`)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }}
    >
      Token
    </button>
  );
}
