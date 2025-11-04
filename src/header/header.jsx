import "./header.css";
import { Link } from "react-router";

export const Header = () => {
  return (
    <header>
      <ul className="flex justify-center gap-20">
        <Link to="/">Viet Anh Phan</Link>

        <Link to="/about-me">About me</Link>

        <Link to="/my-porfolio">My Portfolio</Link>
      </ul>
    </header>
  );
};
