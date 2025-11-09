import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeatureProject from "../FeatureProject";

import styles from "../../Hero.module.css";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Home(props) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#0d47a1",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "top-left",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 70,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className={`${styles.background} flex items-end`}>
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
