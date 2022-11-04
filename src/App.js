import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Guest from "./pages/guest/Guest";
import NotFound from "./pages/notfound/NotFound";
import ProtectedLogin from "./auth/ProtectedLogin";
import CreateQuiz from "./pages/createquiz/CreateQuiz";
import EditQuiz from "./pages/editquiz/EditQuiz";
import ListQuiz from "./pages/listquiz/ListQuiz";
import DoQuiz from "./pages/doquiz/DoQuiz";

function App() {
  const token = useSelector((state) => state.token.tokens);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/guest" element={<Guest></Guest>} />
          {/* Login Auth */}
          <Route element={<ProtectedLogin token={token} />}>
            <Route path="/" element={<Home></Home>} />
            <Route path="/createquiz" element={<CreateQuiz></CreateQuiz>} />
            <Route path="/editquiz/:path" element={<EditQuiz></EditQuiz>} />
            <Route path="/listquiz" element={<ListQuiz></ListQuiz>} />
            <Route path="/doquiz/:path" element={<DoQuiz></DoQuiz>} />
          </Route>
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
