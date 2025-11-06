import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeatureProject from "./FeatureProject";

import styles from "./Home.module.css";

function Home(props) {
  return (
    <>
      <div className={`bg-[#b3b3b3] min-h-full ${styles.profileImage} flex items-end`}>
        <div className="container mx-auto px-24 py-20">
          <div className="grid grid-cols-2 gap-x-20 ">
            <title>{`Homepage | ${props.sitename}`}</title>
            <div className="col-start-1 flex items-end">
              <div className="flex flex-col text-right">
                <h1 className="text-6xl font-bold text-white">
                  {homeData.intro.title}
                </h1>
                <p className="text-xl mt-12">{homeData.intro.body}</p>
                <div className="mt-12 flex justify-end gap-x-3">
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
