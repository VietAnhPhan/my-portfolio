import Markdown from "react-markdown";
import { useParams } from "react-router";
import Container from "../../Container.module.css";
import Banner from "../../Banner.module.css";
import projects from "../../data/projectData";
import { useEffect, useState } from "react";
import styles from "../Project/Project.module.css";

function Project(prop) {
  const { project } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  const projectData = projects[project];

  useEffect(() => {
    fetch(`/projects/${project}.md`).then((project) =>
      project.text().then((text) => setMarkdownContent(text))
    );
  }, [project]);

  return (
    <>
      <title>{`${projectData.name} | ${prop.sitename}`}</title>
      <div className="flex justify-center">
        <div className={`${Container.container} ${Banner.headText} md:w-1/2`}>
          <h2>Latest Projects</h2>
          <h1 className={Banner.heading1}>{projectData.name}</h1>
          <p>{projectData.headline}</p>
          <ul>
            {projectData.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`${Banner.banner} flex justify-center relative ${Banner.myPortfolioBg}`}
      >
        <div className={Banner.gradient}></div>
      </div>
      <div className={`mx-auto max-w-2xl ${styles.project} mt-8 sm:mt-20`}>
        <Markdown>{markdownContent}</Markdown>
        <div className="text-center">
          <button className="sm:mt-20">Visit site</button>
        </div>
      </div>
    </>
  );
}

export default Project;
