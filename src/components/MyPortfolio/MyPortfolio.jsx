import Container from "../../Container.module.css";
import Banner from "../../Banner.module.css";
function MyPortfolio() {
  return (
    <>
      <div className={`${Banner.banner} flex justify-center relative`}>
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
      </div>
    </>
  );
}

export default MyPortfolio;
