import { Link } from "react-router-dom";
import bgImage from "../assets/ClosetBG.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-start px-6 bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 blur-sm "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      <div className="relative z-10 text-gray-900  ">
        
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Welcome to <span className="text-orange-500">Code Closet</span> 👋
        </h1>
        <p className="text-gray-800 text-lg max-w-2xl my-8">
          A personal collection of my coding projects - from chat-app to games
          to utilities. Explore them all in one place, built with React,
          Tailwind CSS, etc.
        </p>
        <div className="flex gap-4">
          <Link
            to="/closet"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition hover:shadow-2xl"
          >
            Explore Closet
          </Link>
          <Link
            to="/about"
            className="bg-white text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white transition hover:shadow-2xl"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
