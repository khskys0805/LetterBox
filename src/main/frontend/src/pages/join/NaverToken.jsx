import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../config";

export function NaverLogin() {
  const [serchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API.NAVERTOKEN(serchParams.get("code"), serchParams.get("state")))
      .then((res) => {
        localStorage.setItem("jwt", res.headers.authorization);
        navigate(-2);
      })
      .catch((err) => {
        alert("로그인을 다시 시도해주세요");
        navigate(-1);
      });
  }, []);
}
