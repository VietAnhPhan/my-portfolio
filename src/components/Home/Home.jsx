import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeatureProject from "../FeatureProject";
import styles from "../../Hero.module.css";
import animation from "../../Animation.module.css";
import Particle from "../utilities/Particles";
import ScrollingArrow from "../utilities/ScrollingArrow";
import useTitle from "../../hooks/useTitle";

function Home() {
  useTitle("Home");
  return (
    <>
      <div className={`${styles.background} flex items-end`}>
        <Particle />
        <div className="container mx-auto lg:py-20 mb-9 lg:mb-0">
          <div className="md:grid md:grid-cols-3 gap-x-20 ">
            <div className="col-span-2 flex items-end">
              <div
                className={`flex flex-col text-left lg:text-right ${animation.appearUp}`}
              >
                {/* Introduction text*/}
                <h1 className="text-6xl 2xl:text-8xl font-bold text-white">
                  {homeData.intro.title1}
                </h1>
                <p className="text-3xl 2xl:text-5xl text-white font-light uppercase">
                  {homeData.intro.title2}
                </p>
                <p className="text-3xl 2xl:text-5xl text-white font-light">
                  {homeData.intro.title3}
                </p>
                <p className="text-2xl 2xl:text-xl lg:mt-6 text-white">
                  {homeData.intro.body}
                </p>

                {/* Icons */}
                <div className="lg:mt-12 flex justify-end gap-x-3 text-white">
                  <a href="https://www.linkedin.com/in/anhphanweb/">
                    <LinkedInIcon fontSize="large"></LinkedInIcon>
                  </a>
                  <a href="https://github.com/vietAnhPhan/">
                    <GitHubIcon fontSize="large"></GitHubIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <ScrollingArrow />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto px-24"> */}
      <FeatureProject title="Feature Projects" style="3-cols"></FeatureProject>
      {/* </div> */}
    </>
  );
}

export default Home;
