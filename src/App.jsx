import "./App.css";
import { useState } from "react";
import { AuthContext, HeaderContext } from "./Context";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [menuItemActive, setMenuItemActive] = useState("");

  return (
    <>
      <AuthContext value={{ token, setToken }}>
        <HeaderContext value={{ menuItemActive, setMenuItemActive }}>
          <Header />

          <Outlet />
        </HeaderContext>
        <Footer />
      </AuthContext>
    </>
  );
}

export default App;
