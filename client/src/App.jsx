import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import ForgetPassword from "./component/ForgetPassword";
import Otp from "./component/Otp";
import NewPassword from "./component/NewPassword";
import Profile from "./component/Profile";
import Admin from "./component/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/getOtp" element={<Otp />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
