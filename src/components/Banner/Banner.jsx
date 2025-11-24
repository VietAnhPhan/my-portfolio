import styles from "./Banner.module.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Particle from "../utilities/Particles";
import animation from "./../../Animation.module.css";
import ListTag from "../ListTag";
import ScrollingArrow from "../utilities/ScrollingArrow";

function Banner(props) {
  return (
    <>
      <div
        className={`${styles.banner} ${
          props.height == 80 ? styles.banner80Height : styles.banner100Height
        } ${props.background == "portfolio" && styles.myPortfolioBg}
          ${props.background == "about-me" && styles.aboutMeBg}
         ${props.isFixed && styles.fixedBannerImage}`}
        style={{ backgroundImage: `url(${props.bannerUrl})` }}
      >
        <Particle />
        {props.gradient && props.height == 100 && (
          <div className={styles.gradient}></div>
        )}
        {props.gradient && props.height == 80 && (
          <div className={styles.gradientHeight80}></div>
        )}

        {/* Head text */}
        <div className={`${styles.headText} ${animation.appearUp} container`}>
          {props.title && (
            <h2
              className={`text-4xl lg:text-6xl  font-semibold ${
                props.color === "white" ? "text-white" : "text-blue-950"
              }`}
            >
              {props.title}
            </h2>
          )}

          {props.subtitle && (
            <p
              className={`pt-5  ${
                props.color === "white" ? "text-white" : "text-blue-950"
              }`}
            >
              {props.subtitle}
            </p>
          )}

          {props.description && <p className="pt-5">{props.description}</p>}

          {props.list && (
            <ul className="lg:flex flex flex-wrap justify-center gap-x-10 pt-5">
              {props.list.map((responsibility, i) => (
                <li key={i} className="flex items-center gap-x-1">
                  <CheckCircleOutlineOutlinedIcon /> {responsibility}
                </li>
              ))}
            </ul>
          )}
          <ListTag tags={props.tags} accesses={props.accesses} />
          {/* <ScrollingArrow /> */}
        </div>
      </div>
      {/* <div
        className={`flex justify-center relative ${
          props.height == 80 ? styles.minHeight80 : styles.minHeight100
        }`}
      ></div> */}
    </>
  );
}

export default Banner;
