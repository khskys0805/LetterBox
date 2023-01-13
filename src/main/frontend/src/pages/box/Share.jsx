import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ShareBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Share({ setShowShare }) {
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
  const [copy, setCopy] = useState();
  console.log(copy);
  return (
    <ShareBox>
      <div
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
        카카오톡
      </div>
      <div
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?text=${title}&url=${sendUrl}`
          );
        }}
      >
        트위터
      </div>
      <div
        onClick={() => {
          window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
        }}
      >
        페이스북
      </div>
      <button
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(sendUrl);
            setCopy(sendUrl);
          } catch (e) {
            alert("복사에 실패하였습니다");
          }
        }}
      >
        복사
      </button>
      <input readOnly placeholder={sendUrl} />
      <button
        onClick={() => {
          setShowShare(false);
        }}
      >
        닫기
      </button>
    </ShareBox>
  );
}
