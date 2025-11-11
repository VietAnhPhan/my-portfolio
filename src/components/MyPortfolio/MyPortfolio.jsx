import Container from "../../Container.module.css";
// import styles from "../../Banner.module.css";
import FeatureProject from "../FeatureProject";
import Banner from "../Banner/Banner";
import { tags } from "../../data/projectData";
// import bannerBackground from "/my-portfolio-banner.png";

function MyPortfolio() {
  return (
    <>
      {/* <div
        className={`${Banner.banner} flex justify-center relative ${Banner.myPortfolioBg}`}
      >
        <div className={Banner.gradient}></div>
        <div className={`${Container.container} ${Banner.headText} md:w-1/2`}>
          <h2>Latest Projects</h2>
          <h1 className={Banner.heading1}>
            Here are some of the things <br />
            I've been working on.
          </h1>
          <p>
            Here is where I keep track of all the things I've been doing over
            the years, whether it's new businesses I've been building out,
            client projects or just experiments.
          </p>
        </div>
      </div> */}

      <Banner
        title="Latest Projects"
        subtitle="Here are some of the things I've been working on."
        description="Here is where I keep track of all the things I've been doing over
            the years, whether it's new businesses I've been building out,
            client projects or just experiments."
        background="portfolio"
        height={100}
        gradient={true}
        isFixed={true}
        tags={tags}
        bannerUrl={"/banners/my-portfolio-banner.png"}
      ></Banner>

      <FeatureProject style="2-cols"></FeatureProject>
    </>
  );
}

export default MyPortfolio;
