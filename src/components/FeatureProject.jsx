import { homeData } from "../data/homeData";
import { Link } from "react-router";
import animation from "./../Animation.module.css";
import WordBackground from "./WordBackground/WordBackground";
import { projects } from "../data/projectData";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { Fragment } from "react";

function FeatureProject(props) {
  return (
    <>
      <div className={`py-10 lg:py-20 container`}>
        <WordBackground word="Projects" />
        {props.title && <h2 className="text-4xl lg:text-5xl">{props.title}</h2>}
        {props.style === "3-cols" && (
          <ul className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-12 pt-10 lg:pt-20">
            {homeData.projects.map((project, i) => (
              <li key={i} className={`${animation.moveUp} flex-1`}>
                <Link
                  to={project.path}
                  className="flex flex-col gap-y-3 justify-between"
                >
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
          <ul className="grid grid-cols-1 gap-x-12 gap-y-12 pt-20">
            {Object.keys(projects).map((key, i) => (
              <Fragment key={i}>
                {i % 2 == 0 && (
                  <li className="lg:flex items-center gap-x-8 gap-y-3">
                    <div className="shadow-gray-300 shadow-xl hover:shadow-lg rounded-xl border border-gray-300 border-b-0">
                      <Link to={`/my-portfolio/${projects[key].pageUrl}`}>
                        <img
                          className="rounded-xl w-full"
                          src={projects[key].thumbnail}
                          alt={`${projects[key].name} + thumbnail`}
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <Link to={`/my-portfolio/${projects[key].pageUrl}`}>
                        <h3 className="font-bold text-4xl pt-3">
                          {projects[key].name}
                        </h3>
                      </Link>
                      <p className="text-xl">{projects[key].headline}</p>
                      <ul className="text-xl flex flex-col gap-y-1 text-slate-500">
                        {projects[key].responsibilities.map(
                          (responsiblity, i) => (
                            <li key={i}>
                              <CheckCircleOutlineOutlined /> {responsiblity}
                            </li>
                          )
                        )}
                      </ul>
                      <Link
                        to={`/my-portfolio/${projects[key].pageUrl}`}
                        className="bg-sky-600 py-4 px-6 rounded-full text-white font-medium hover:bg-sky-500 w-fit"
                      >
                        View details
                      </Link>
                    </div>
                  </li>
                )}

                {i % 2 != 0 && (
                  <li className="flex lg:flex-row sm:flex-col-reverse items-center gap-x-8 gap-y-3">
                    <div className="flex flex-col gap-y-6 text-right">
                      <Link to={`/my-portfolio/${projects[key].pageUrl}`}>
                        <h3 className="font-bold text-4xl pt-3">
                          {projects[key].name}
                        </h3>
                      </Link>
                      <p className="text-xl">{projects[key].headline}</p>
                      <ul className="text-xl flex flex-col gap-y-1 text-slate-500">
                        {projects[key].responsibilities.map(
                          (responsiblity, i) => (
                            <li key={i}>
                              <CheckCircleOutlineOutlined /> {responsiblity}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="flex justify-end">
                        <Link
                          to={`/my-portfolio/${projects[key].pageUrl}`}
                          className="bg-sky-600 py-4 px-6 rounded-full text-white font-medium hover:bg-sky-500 w-fit"
                        >
                          View details
                        </Link>
                      </div>
                    </div>
                    <div className="shadow-gray-300 shadow-xl hover:shadow-lg rounded-xl border border-gray-300 border-b-0">
                      <Link to={`/my-portfolio/${projects[key].pageUrl}`}>
                        <img
                          className="rounded-xl w-full"
                          src={projects[key].thumbnail}
                          alt={`${projects[key].name} + thumbnail`}
                        />
                      </Link>
                    </div>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        )}
        <div className="text-right uppercase mt-5">
          <a
            className="text-right font-medium text-pink-600"
            href="/my-portfolio"
          >
            See All Projects
          </a>
        </div>
      </div>
    </>
  );
}

export default FeatureProject;
