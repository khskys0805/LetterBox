const API = {
  MYPAGE: "/letterbox/my",
  LETTERBOX: "/letterbox",
  LOGIN: "/login/getKakaoAuthUrl",
  LOGINTOKEN(CODE) {
    return `/login/oauth_kakao?code=${CODE}`;
  },
  LETTER(ID) {
    return `/letterbox/${ID}/letter`;
  },
  ANSWER(BOX, LETTER, INPUT) {
    return `/letterbox/${BOX}/letter/${LETTER}/compare?answer=${INPUT}`;
  },
  MESSAGE(BOX, LETTER) {
    return `/letterbox/${BOX}/letter/${LETTER}`;
  },
  NAVERLOGIN: "/login/getNaverAuthUrl",
  NAVERTOKEN(CODE, STATE) {
    return `/login/oauth_naver?code=${CODE}&&state=${STATE}`;
  },
};

export default API;
