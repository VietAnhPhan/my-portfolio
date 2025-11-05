import { homeData } from "../../data/homeData";

function FeatureProject() {
  return (
    <>
      <div className="py-20">
        <h2 className="text-5xl">Feature Projects</h2>
        <ul className="flex gap-x-12 pt-20">
          {homeData.projects.map((project, i) => (
            <li key={i} className="flex flex-col gap-y-3">
              <div className="shadow-gray-300 shadow-xl rounded-xl border border-gray-300 border-b-0">
                <img
                  className="rounded-xl"
                  src={project.thumbnail}
                  alt={`${project.title} + thumbnail`}
                />
              </div>
              <h3 className="font-bold text-2xl pt-3">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FeatureProject;
