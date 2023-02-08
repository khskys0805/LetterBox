import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { END_DATE } from "../../constant/max-style";

export default function ServiceEnd() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const id = setInterval(() => {
      const diff = new Date(END_DATE) - new Date();
      setShow(diff >= 0 ? true : false);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      {show ? (
        <Outlet />
      ) : (
        <div>
          <div>더 이상 서비스를 이요하실 수 없습니다</div>
          <div>감사합니다</div>
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로 이동
          </div>
        </div>
      )}
    </>
  );
}
