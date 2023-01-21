import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import API from "../../config";

export default function ServiceBox() {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetechData() {
      await axios
        .get(`${API.LETTERBOX}/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => setData());
    }
    fetechData();
  }, []);
  return (
    <>
      {data ? (
        <Outlet context={{ box: data }} />
      ) : (
        <>
          <span>올바르지 않는 접근입니다</span>
          <RoundButton
            Children={() => <span>홈으로 이동</span>}
            onClick={() => {
              navigate("/");
            }}
          />
        </>
      )}
    </>
  );
}
