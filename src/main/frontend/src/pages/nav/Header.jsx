import styled from "styled-components";
import { THEME } from "../../constant";

const HeaderCover = styled.header`
  padding: 15px;
  background-color: ${THEME};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function Header() {
  return (
    <HeaderCover>
      <div>로그인</div>
    </HeaderCover>
  );
}
