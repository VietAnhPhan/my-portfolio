import { useContext, useEffect, useState } from "react";
import Markdown from "react-markdown";
import Banner from "./Banner/Banner";
import contentStyle from "./../Content.module.css";
import { HeaderContext } from "../Context";

function AboutMe() {
  const [content, setContent] = useState("");
  const headerContext = useContext(HeaderContext);

  useEffect(() => {
    fetch("/aboutMe.md")
      .then((response) => response.text())
      .then((content) => setContent(content));

    headerContext.setMenuItemActive("about-me");
  },[]);

  return (
    <>
      <Banner
        title="Viet Anh Phan"
        color="white"
        subtitle="SOFTWARE DEVELOPER (FRONT-END AND BACK-END DEVELOPER)"
        height={80}
        background="about-me"
        gradient={true}
        bannerUrl={"/profile/vietanh-banner-sweater.png"}
      ></Banner>
      <div className="container max-w-2xl py-20">
        <h2 className="text-5xl mb-6">About me</h2>
        <div className={contentStyle.content}>
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
