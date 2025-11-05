import "./header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="pb-8 py-8">
      <ul className="flex justify-between gap-20">
        <Link className="font-bold text-3xl" to="/">&lt; Viet Anh Phan /&gt; </Link>

        <div className="flex gap-x-10 text-2xl">
          <Link to="/about-me">About me</Link>
          <Link to="/my-portfolio">My Portfolio</Link>
        </div>
      </ul>
    </header>
  );
};

export default Header;
