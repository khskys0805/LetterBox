import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/join/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./style/Base";
import Token from "./pages/join/Token";
import PrivateRoute from "./PrivateRoute";
import Messages from "./pages/Messages";
import Chatting from "./pages/chat/Chatting";
import Complete from "./pages/fortune/Complete";
import Nickname from "./pages/fortune/Nickname";
import Question from "./pages/Question";
import Hints from "./pages/fortune/Hints";
import Content from "./pages/fortune/Content";
import Locate from "./pages/fortune/Locate";
import CreateBox from "./pages/box/CreateBox";
import { UserContextProvider } from "./pages/Context";
import Name from "./pages/fortune/Name";
import CheckBox from "./pages/box/CheckBox";
import CheckLogin from "./pages/box/CheckLogin";
import ServiceBox from "./pages/box/ServiceBox";
import Canvas from "./components/Canvas";
import CanvasTest from "./components/CanvasTest";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
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
              <Route path="/box" element={<CheckBox />}>
                <Route path="/box/create" element={<CreateBox />} />
              </Route>
            </Route>
            <Route element={<ServiceBox />}>
              <Route element={<PrivateRoute />}>
                <Route element={<Question />}>
                  <Route path="/question/:id/name" element={<Name />} />
                  <Route path="/question/:id/nickname" element={<Nickname />} />
                  <Route path="/question/:id/hints" element={<Hints />} />
                  <Route path="/question/:id/content" element={<Content />} />
                  <Route path="/question/:id/locate" element={<Locate />} />
                </Route>
              </Route>
              <Route path="/box/:id" element={<CheckLogin />} />
            </Route>
            <Route path="/canvastest" element={<CanvasTest />} />
          </Routes>
        </UserContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
