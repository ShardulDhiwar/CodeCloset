import bgImage from "../assets/ClosetBG.jpg";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-start px-6 bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 blur-sm"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      <div className="relative z-10 max-w-3xl text-gray-900 bg-white/60 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-orange-500">
          About <span className="text-gray-900">Me</span>
        </h1>

        <p className="text-lg text-gray-800 mb-4">
          Hey 👋 I'm{" "}
          <span className="font-semibold text-orange-500">Shardul Dhiwar</span>,
          a passionate web developer who loves crafting modern and functional
          web applications. I enjoy bringing ideas to life through clean UI and
          efficient code.
        </p>

        <p className="text-lg text-gray-800 mb-4">
          I specialize in building full-stack applications using technologies
          like
          <span className="font-semibold text-orange-500"> React</span>,
          <span className="font-semibold text-orange-500"> Tailwind CSS</span>,
          <span className="font-semibold text-orange-500"> Node.js</span>, and{" "}
          <span className="font-semibold text-orange-500">Dialogflow</span>.
        </p>

        <p className="text-lg text-gray-800 mb-4">
          Code Closet is my personal space — a digital showcase of my journey as
          a developer. Each project inside reflects what I’ve learned and the
          problems I’ve solved along the way.
        </p>

        <p className="text-lg text-gray-700 italic">
          “Code is like art — every project tells a story.” 🎨
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            💼 Tech Stack
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-800">
            <li>⚛️ React</li>
            <li>💨 Tailwind CSS</li>
            <li>🧠 Dialogflow</li>
            <li>💻 Node.js</li>
            <li>🌐 Express.js</li>
            <li>🗄️ PostgreSQL</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/ShardulDhiwar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-500 transition hover:shadow-2xl"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
