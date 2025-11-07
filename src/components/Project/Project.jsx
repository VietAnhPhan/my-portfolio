import Markdown from "react-markdown";
import { useParams } from "react-router";
import Container from "../../Container.module.css";
import Banner from "../../Banner.module.css";
import projects from "../../data/projectData";
import { useEffect, useState } from "react";

function Project() {
  const { project } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");
  console.log(markdownContent);
  useEffect(() => {
    fetch(`/projects/${project}.md`).then((project) =>
      project.text().then((text) => setMarkdownContent(text))
    );
  }, [project]);

  return (
    <>
      <div className="flex justify-center">
        <div className={`${Container.container} ${Banner.headText} md:w-1/2`}>
          <h2>Latest Projects</h2>
          <h1 className={Banner.heading1}>{projects[project].name}</h1>
          <p>{projects[project].headline}</p>
          <ul>
            {projects[project].responsibilities.map((responsibility, i) => (
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
      <div className={`${Container.container}`}>
        <Markdown>{markdownContent}</Markdown>
      </div>
    </>
  );
}

export default Project;
