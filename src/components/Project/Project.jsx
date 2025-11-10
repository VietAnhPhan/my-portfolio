import Markdown from "react-markdown";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./../../Content.module.css";
import Banner from "../Banner";
import {projects} from "../../data/projectData";
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import WordBackground from "../WordBackground";

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
      {/* <div className="flex justify-center">
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
      </div> */}
      <Banner
        title={projectData.name}
        subtitle={projectData.headline}
        list={projectData.responsibilities}
        background="portfolio"
        height={100}
        gradient={true}
        accesses = {projectData.access}
      ></Banner>

      <div className={`container max-w-2xl ${styles.content} my-8 sm:mt-20`}>
        <WordBackground word={projectData.name} />
        <Markdown>{markdownContent}</Markdown>
        <div className="text-center mt-5">
          <a href={projectData.url} target="_blank" className="bg-blue-600 px-7 py-3 rounded-full text-white inline-flex mb-12 hover:bg-blue-300">Visit site <ArrowOutwardOutlinedIcon /></a>
        </div>
      </div>
    </>
  );
}

export default Project;
