import { homeData } from "../data/homeData";
import wordBackground from "../wordBackground.module.css";
import { Link } from "react-router";

function FeatureProject(props) {
  return (
    <>
      <div className={`py-20 container`}>
        <div className={`${wordBackground.wordBackground} text-9xl lg:text-[270px]`}>Projects</div>
        {props.title && <h2 className="text-5xl">{props.title}</h2>}
        {props.style === "3-cols" && (
          <ul className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-12 pt-20">
            {homeData.projects.map((project, i) => (
              <li key={i} className="flex flex-col gap-y-3">
                <Link to={project.path}>
                  <div className="shadow-gray-300 shadow-xl rounded-xl border border-gray-300 border-b-0">
                    <img
                      className="rounded-xl w-full"
                      src={project.thumbnail}
                      alt={`${project.title} + thumbnail`}
                    />
                  </div>
                  <h3 className="font-bold text-2xl pt-8">{project.title}</h3>
                  <p className="text-lg">{project.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {props.style === "2-cols" && (
          <ul className="grid grid-cols-2 gap-x-12 pt-20">
            {homeData.projects.map((project, i) => (
              <li key={i} className="flex flex-col gap-y-3">
                <Link to={project.path}>
                  <div className="shadow-gray-300 shadow-xl rounded-xl border border-gray-300 border-b-0">
                    <img
                      className="rounded-xl w-full"
                      src={project.thumbnail}
                      alt={`${project.title} + thumbnail`}
                    />
                  </div>
                  <h3 className="font-bold text-2xl pt-3">{project.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default FeatureProject;
