import styles from "./header.module.css";
import { Link } from "react-router";
import logoWhiteBG from "/logo/vietanh-logo-white-bg.png";
import logoBlackBG from "/logo/vietanh-logo-black-bg.png";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useRef } from "react";

const Header = () => {
  const largeScreenMenuItems = useRef("");
  const smallScreenMenuItems = useRef("");
  const header = useRef(null);
  const logo = useRef(null);
  const dropdownMenu = useRef(null);

  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.tagName !== "path" && e.target.tagName !== "svg") {
        smallScreenMenuItems.current.classList.add("hidden");
        header.current.classList.add("absolute");
        header.current.classList.remove("bg-[#1d1e21]");
        logo.current.src = logoWhiteBG;
        dropdownMenu.current.classList.add("text-white");
      }
    };

    window.onscroll = () => {
      const headerHeight = header.current.offsetHeight;
      if (window.scrollY >= headerHeight) {
        header.current.classList.add(styles.sticky);
      }
      else{
        header.current.classList.remove(styles.sticky);
      }
    };
  }, []);

  function handleClick() {
    if (smallScreenMenuItems.current.classList.contains("hidden")) {
      smallScreenMenuItems.current.classList.remove("hidden");
      smallScreenMenuItems.current.classList.add("flex");
      header.current.classList.remove("absolute");
      header.current.classList.add("bg-[#1d1e21]");
      logo.current.src = logoBlackBG;
      dropdownMenu.current.classList.add("text-white");
    } else {
      smallScreenMenuItems.current.classList.add("hidden");
      header.current.classList.add("absolute");
      header.current.classList.remove("bg-[#1d1e21]");
      logo.current.src = logoWhiteBG;
      dropdownMenu.current.classList.remove("text-white");
    }
  }

  return (
    <header
      className="flex flex-col lg:justify-center absolute min-w-full z-100 py-8"
      ref={header}
    >
      <div className="container mx-auto lg:px-24">
        <ul className="flex justify-between items-center gap-20">
          <Link className="font-bold text-3xl" to="/">
            <img
              src={logoWhiteBG}
              alt="Viet Anh logo"
              className={styles.logoImg}
              ref={logo}
            />
          </Link>

          <div
            className={`hidden lg:flex gap-x-10 lg:text-2xl text-white bg-black rounded-full py-1 px-3 ${styles.fw300}`}
            ref={largeScreenMenuItems}
          >
            <Link to="/about-me">About me</Link>
            <Link to="/my-portfolio">My Portfolio</Link>
            <Link to="/my-resume">My Resume</Link>
          </div>

          <div className="lg:hidden" onClick={handleClick} ref={dropdownMenu}>
            <MenuOutlinedIcon />
          </div>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`container hidden py-8 text-white ${styles.fw300} justify-center gap-x-10`}
        ref={smallScreenMenuItems}
      >
        <Link to="/about-me">About me</Link>
        <Link to="/my-portfolio">My Portfolio</Link>
      </div>
    </header>
  );
};

export default Header;
