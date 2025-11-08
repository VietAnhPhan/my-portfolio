import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeatureProject from "./FeatureProject";

import styles from "./Home.module.css";

function Home(props) {
  return (
    <>
      <div
        className={`bg-[#b3b3b3] min-h-[500px] lg:min-h-screen ${styles.profileImage} flex items-end`}
      >
        <div className="container mx-auto lg:py-20">
          <div className="md:grid md:grid-cols-3 gap-x-20 ">
            <title>{`${props.sitename}`}</title>
            <div className="col-span-2 flex items-end">
              <div className="flex flex-col px-8 py-8 text-left lg:text-right">
                <h1 className="text-3xl lg:text-8xl font-bold text-white">
                  {homeData.intro.title1}
                </h1>
                <p className="lg:text-5xl text-white font-light">
                  {homeData.intro.title2}
                </p>
                <p className="lg:text-5xl text-white font-light">
                  {homeData.intro.title3}
                </p>

                <p className="lg:text-xl lg:mt-12">{homeData.intro.body}</p>
                <div className="lg:mt-12 flex justify-end gap-x-3">
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
        </div>
      </div>

      {/* <div className="container mx-auto px-24"> */}
      <FeatureProject title="Feature Projects" style="3-cols"></FeatureProject>
      {/* </div> */}
    </>
  );
}

export default Home;
