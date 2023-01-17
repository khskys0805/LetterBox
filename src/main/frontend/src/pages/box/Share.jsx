import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ShareBox = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: relative;
`;

const ShareOptions = styled.li`
  @media only screen and (max-width: 300px) {
    & img {
      width: 40px;
      object-fit: cover;
    }
  }
`;

const ShareUrl = styled.div`
  background: black;
  color: white;
  position: absolute;
  top: -55%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 10px 8px;
  border-radius: 6px;
  @media only screen and (max-width: 300px) {
    width: 80%;
    text-align: center;
    font-size: 12px;
  }
`;

export default function Share() {
  const title = "내 복주머니 보내기";
  const sendUrl = window.location.href;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [copy, setCopy] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setCopy(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [copy]);
  return (
    <ShareBox>
      <ShareOptions
        onClick={() => {
          if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
              kakao.init("99304b0d884f05332d0672be26b74689");
            }

            kakao.Link.sendDefault({
              objectType: "feed",
              content: {
                title: title,
                description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
                imageUrl: require("../../img/luckyBag_inside.png"),
                link: {
                  mobileWebUrl: sendUrl,
                  webUrl: sendUrl,
                },
              },
            });
          }
        }}
      >
        <img src={require("../../img/kakaotalk.png")} alt="카카오톡 공유" />
      </ShareOptions>
      <ShareOptions
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${title}&url=${sendUrl}`
          );
        }}
      >
        <img src={require("../../img/twitter.png")} alt="트위터 공유" />
      </ShareOptions>
      <ShareOptions
        onClick={() => {
          window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
        }}
      >
        <img src={require("../../img/facebook.png")} alt="페이스북 공유" />
      </ShareOptions>
      <ShareOptions
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(sendUrl);
            setCopy(sendUrl);
          } catch (e) {
            alert("복사에 실패하였습니다");
          }
        }}
      >
        <img src={require("../../img/link.png")} alt="url 복사" />
        {copy && <ShareUrl>url이 복사되었습니다.</ShareUrl>}
      </ShareOptions>
    </ShareBox>
  );
}
