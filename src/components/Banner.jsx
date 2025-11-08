import styles from "./../Banner.module.css";

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
        }`}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
