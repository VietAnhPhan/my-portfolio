import "./App.css";
import { useState } from "react";
import { Header } from "./header/header.jsx";
import { AuthContext } from "./Context";
import { Outlet } from "react-router";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  return (
    <>
      <AuthContext value={{ token, setToken }}>
        <div className="container mx-auto px-24">
          <Header />
          <Outlet />
        </div>
      </AuthContext>
    </>
  );
}

export default App;
