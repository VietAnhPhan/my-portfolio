import profile from "../../../public/IMG_8725.JPG";
import { homeData } from "../../data/homeData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home(props) {
  return (
    <div className="flex justify-between gap-16">
      <title>{`Homepage | ${props.sitename}`}</title>
      <div className="flex-1">
        <img src={profile} className="object-cover w-3xl" alt="My photo" />
      </div>
      <div className="flex flex-1 items-end">
        <div className="flex flex-col">
          <h1>{homeData.intro.title}</h1>
          <p>{homeData.intro.body}</p>
          <div>
            <LinkedInIcon fontSize="large"></LinkedInIcon>
            <GitHubIcon fontSize="large"></GitHubIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
