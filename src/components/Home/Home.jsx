import profile from "/IMG_8725.JPG";
import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeatureProject from "./FeatureProject";

function Home(props) {
  return (
    <>
      <div className="bg-[#b3b3b3]">
        <div className="container mx-auto px-24 py-20">
          <div className="flex flex-row-reverse justify-between gap-x-20 ">
            <title>{`Homepage | ${props.sitename}`}</title>
            <div className="flex-3">
              <img
                src={profile}
                className="object-cover w-[560px] h-[660px]"
                alt="My photo"
              />
            </div>
            <div className="flex flex-4 items-end text-right">
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold text-white">
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

      <div className="container mx-auto px-24">
        <FeatureProject></FeatureProject>
      </div>
    </>
  );
}

export default Home;
