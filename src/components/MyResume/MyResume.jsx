import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import Banner from "../Banner/Banner";
import contentStyle from "./../../Content.module.css";
import { HeaderContext } from "../../Context";
import useTitle from "../../hooks/useTitle";

function MyResume() {
  useTitle("Resume");
  const [content, setContent] = useState("");
  const headerContext = useContext(HeaderContext);

  useEffect(() => {
    fetch("/resume.md")
      .then((response) => response.text())
      .then((content) => setContent(content));

    headerContext.setMenuItemActive("my-resume");
  }, []);
  return (
    <>
      <Banner
        background="about-me"
        gradient={true}
        height={80}
        title="My resume"
        color="white"
      />
      <div className="container max-w-2xl py-20">
        <div className={contentStyle.content}>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  );
}

export default MyResume;
