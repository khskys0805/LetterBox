import styled from "styled-components";
import { THEME } from "../../constant";
import { useNavigate } from "react-router-dom";

const HeaderCover = styled.header`
  padding: 15px;
  background-color: ${THEME};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function Header() {
  const navigate = useNavigate();

  return (
    <HeaderCover>
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
    </HeaderCover>
  );
}
