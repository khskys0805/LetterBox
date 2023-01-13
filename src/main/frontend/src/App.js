import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/join/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./style/Base";
import Token from "./pages/join/Token";
import PrivateRoute from "./PrivateRoute";
import Messages from "./pages/Messages";
import Chatting from "./pages/Chatting";
import Complete from "./pages/fortune/Complete";
import Nickname from "./pages/fortune/Nickname";
import Question from "./pages/Question";
import Hints from "./pages/fortune/Hints";
import Content from "./pages/fortune/Content";
import Locate from "./pages/fortune/Locate";
import CreateBox from "./pages/box/CreateBox";
import UserBox from "./pages/box/UserBox";
import LetterBox from "./pages/LetterBox";
import { UserContextProvider } from "./pages/Context";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/kakao/login" element={<Token />} />
            <Route element={<PrivateRoute />}>
              <Route element={<Question />}>
                <Route path="/question/nickname" element={<Nickname />} />
                <Route path="/question/hints" element={<Hints />} />
                <Route path="/question/content" element={<Content />} />
                <Route path="/question/locate" element={<Locate />} />
              </Route>
              <Route path="/chatting" element={<Chatting />} />
              <Route path="/result" element={<Complete />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/createBox" element={<CreateBox />} />
              <Route path="/userbox" element={<UserBox />} />
            </Route>
            <Route path="/box" element={<LetterBox />} />
          </Routes>
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
