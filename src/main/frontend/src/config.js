const API = {
  MYPAGE: "/letterbox/my",
  CREATEBOX: "/letterbox",
  LETTERBOX: "/letterbox",
  LOGIN: "/login/getKakaoAuthUrl",
  LOGINTOKEN(CODE) {
    return `/login/oauth_kakao?code=${CODE}`;
  },
  LETTER(ID) {
    return `/letterbox/${ID}/letter`;
  },
};

export default API;
