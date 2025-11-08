import styles from "./header.module.css";
import { Link } from "react-router";
import logo from "/logo/vietanh-logo-white-bg.png";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <div className="container mx-auto px-8 lg:px-24 absolute pb-8 py-8">
          <ul className="flex justify-between items-center gap-20">
            <Link className="font-bold text-3xl" to="/">
              <img src={logo} alt="Viet Anh logo" className={styles.logoImg} />
            </Link>

            <div
              className={`flex gap-x-10 lg:text-2xl text-white ${styles.fw300}`}
            >
              <Link to="/about-me">About me</Link>
              <Link to="/my-portfolio">My Portfolio</Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
