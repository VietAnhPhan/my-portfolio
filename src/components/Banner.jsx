import styles from "./../Banner.module.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function Banner(props) {
  return (
    <>
      <div
        className={`${styles.banner} ${
          props.height == 80 ? styles.banner80Height : styles.banner100Height
        } ${
          props.background == "portfolio"
            ? styles.myPortfolioBg
            : styles.aboutMeBg
        } ${props.isFixed && styles.fixedBannerImage}`}
      >
        {props.gradient && <div className={styles.gradient}></div>}

        <div
          className={`flex justify-center relative ${
            props.height == 80 ? styles.minHeight80 : styles.minHeight100
          }`}
        >
          <div className={styles.headText}>
            {props.title && (
              <h2 className="text-4xl lg:text-6xl text-white font-semibold">
                {props.title}
              </h2>
            )}

            {props.subtitle && <p className="pt-5">{props.subtitle}</p>}

            {props.description && <p className="pt-5">{props.description}</p>}

            {props.list && (
              <ul className="lg:flex justify-center gap-x-10 pt-5">
                {props.list.map((responsibility, i) => (
                  <li key={i} className="flex items-center gap-x-1">
                    <CheckCircleOutlineOutlinedIcon /> {responsibility}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
