import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div className="container mx-auto px-24">
          <div className="py-16 border-t-1 border-t-gray-950">
            <div className="">
              <div className="flex gap-x-36 ">
                <div className="">
                  <a href="/">
                    <h3 className="text-3xl font-bold">
                      {" "}
                      &lt; Viet Anh Phan /&gt;{" "}
                    </h3>
                  </a>
                  <p className="text-xl mt-3">
                    A full-stack web develper from South of Vietnam.
                  </p>
                </div>
                <div className="">
                  <h3 className="text-2xl">Pages</h3>
                  <Link to="/about-me">
                    <p className="text-lg mt-3">About me</p>
                  </Link>
                  <Link to="my-portfolio">
                    <p className="text-lg mt-3">My Portfolio</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between bg-black text-white px-5 py-3 mt-16">
              <p>&copy; 2025 Viet Anh Phan</p>
              <p>Built with React and TailwindCSS.</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Footer;
