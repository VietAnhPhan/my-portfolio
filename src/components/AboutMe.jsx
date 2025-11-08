import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Banner from "./Banner";
import contentStyle from "./../Content.module.css";

function AboutMe() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/aboutMe.md")
      .then((response) => response.text())
      .then((content) => setContent(content));
  });

  return (
    <>
      <Banner
        title="Viet Anh Phan"
        description="FRONT-END DEVELOPER & BACK-END DEVELOPER"
        height={80}
        background="aboutme"
        gradient={false}
      ></Banner>
      <div className="container max-w-2xl py-20">
        <h3 className="text-5xl shrink-0">About me</h3>
        <div className={contentStyle.content}>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
