import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Banner from "./Banner";

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
      <div className="container max-w-2xl flex gap-x-24">
        <h3>About me</h3>
        <div>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
