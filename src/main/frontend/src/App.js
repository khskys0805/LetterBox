import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatting from "./pages/Chatting";
import Complete from "./pages/fortune/Complete";
import Nickname from "./pages/fortune/Nickname";
import Question from "./pages/Question";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { GlobalStyle } from "./style/Base";
import Messages from "./pages/Messages";
import Storage from "./pages/Storage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Login />} />
          {/* <Route path="/" element={<Chatting />} /> */}
          <Route path="/question" element={<Question />} />
          {/* <Route path="/result" element={<Complete />} /> */}
          <Route path="/messages" element={<Messages />} />
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
