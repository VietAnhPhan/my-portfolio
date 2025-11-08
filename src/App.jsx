import "./App.css";
import { useState } from "react";
import { AuthContext } from "./Context";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  return (
    <>
      <AuthContext value={{ token, setToken }}>
        <Header />

        <Outlet />

        <Footer />
      </AuthContext>
    </>
  );
}

export default App;
