import styled from "styled-components";
import { THEME } from "../../constant";
import { useNavigate } from "react-router-dom";

const HeaderCover = styled.header`
  padding: 0 15px;
  background-color: ${THEME};
`;

const HeaderInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 55px;
  object-fit: contain;
`;

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderCover>
      <HeaderInside>
        <LogoImg
          src={require("../../img/logo.png")}
          alt="로고"
          onClick={() => {
            navigate("/");
          }}
        />
        {localStorage.getItem("jwt") ? (
          <div
            onClick={() => {
              localStorage.removeItem("jwt");
              window.location.reload();
            }}
          >
            로그아웃
          </div>
        ) : (
          <div
            onClick={() => {
              localStorage.removeItem("jwt");
              navigate("/auth");
            }}
          >
            로그인
          </div>
        )}
      </HeaderInside>
    </HeaderCover>
  );
}
