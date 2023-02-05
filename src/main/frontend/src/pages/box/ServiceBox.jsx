import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import API from "../../config";
import { useUserContext } from "../Context";

export default function ServiceBox() {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { setLocation } = useUserContext();

  useEffect(() => {
    function fetechData() {
      axios
        .get(`${API.LETTERBOX}/${id}`)
        .then((response) => {
          setData(response.data);
          const messageList = response.data.letterLists
            ? response.data.letterLists
            : [];
          setLocation(messageList.map(({ location }) => location));
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
          <span>올바르지 않는 접근이거나 로딩중입니다</span>
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
