import { Link } from "react-router";
import logo from "/logo/vietanh-logo-white-bg.png";
import styles from "../Header/header.module.css";

function Footer() {
  return (
    <>
      <footer className="container mx-auto px-8 sm:mt-14">
        <div className="py-16 border-t-1 border-t-gray-950">
          <div className="">
            <div className="lg:flex gap-x-36 ">
              <div className="">
                <a href="/">
                  <img
                    src={logo}
                    alt="Viet Anh logo"
                    className={styles.logoImg}
                  />
                </a>
                <p className="text-xl mt-3">
                  A full-stack web developer from South of Vietnam.
                </p>
              </div>
              <div className="">
                <h3 className="text-2xl">Pages</h3>
                <Link to="/about-me">
                  <p className="text-lg mt-3">About me</p>
                </Link>
                <Link to="my-portfolio">
                  <p className="text-lg mt-3">My Portfolio</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between bg-black text-white px-5 py-3 mt-16">
            <p>&copy; {new Date().getFullYear()} Viet Anh Phan</p>
            <p>Built with React and TailwindCSS.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
