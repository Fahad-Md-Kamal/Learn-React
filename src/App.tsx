import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/login/Login";
import Layout from "./components/Layout";
import SignUp from "./components/signup/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
