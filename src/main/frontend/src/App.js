import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/join/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./style/Base";
import Token from "./pages/join/Token";
import PrivateRoute from "./PrivateRoute";
import Messages from "./pages/letter/Messages";
import Chatting from "./pages/letter/Chatting";
import Complete from "./pages/quest/Complete";
import Nickname from "./pages/quest/Nickname";
import Question from "./pages/quest/Question";
import Hints from "./pages/quest/Hints";
import Content from "./pages/quest/Content";
import Locate from "./pages/quest/Locate";
import CreateBox from "./pages/box/CreateBox";
import { UserContextProvider } from "./pages/Context";
import Name from "./pages/quest/Name";
import CheckBox from "./pages/box/CheckBox";
import CheckLogin from "./pages/box/CheckLogin";
import ServiceBox from "./pages/box/ServiceBox";
import ServiceEnd from "./pages/box/ServiceEnd";
import { Header } from "./pages/nav/Header";
import { NaverLogin } from "./pages/join/NaverToken";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <main
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          height: "calc(100vh - 55px)",
        }}
      >
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/auth"
              element={
                localStorage.getItem("jwt") ? (
                  <Navigate replace to="/box" />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/kakao/login"
              element={
                localStorage.getItem("jwt") ? (
                  <Navigate replace to="/box" />
                ) : (
                  <Token />
                )
              }
            />
            <Route path="/naver/login" element={<NaverLogin />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/box/:boxId/chatting/:chatId"
                element={<Chatting />}
              />
              <Route path="/result" element={<Complete />} />
              <Route
                path="/box/:boxId/message/:chatId"
                element={<Messages />}
              />
            </Route>
            <Route path="/box" element={<CheckBox />}>
              <Route element={<ServiceEnd />}>
                <Route path="/box/create" element={<CreateBox />} />
              </Route>
            </Route>

            <Route element={<ServiceBox />}>
              <Route element={<PrivateRoute />}>
                <Route element={<ServiceEnd />}>
                  <Route element={<Question />}>
                    <Route path="/question/:id/name" element={<Name />} />
                    <Route
                      path="/question/:id/nickname"
                      element={<Nickname />}
                    />
                    <Route path="/question/:id/hints" element={<Hints />} />
                    <Route path="/question/:id/content" element={<Content />} />
                    <Route path="/question/:id/locate" element={<Locate />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/box/:id" element={<CheckLogin />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
