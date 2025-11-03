import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectLayout = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">
          The project you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to Closet
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        {/* BackButton */}
        <Link
          to="/"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Back to Closet
        </Link>

        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
        <p className="text-gray-700 mb-8">{project.shortDesc}</p>

        {/* Action Buttons */}

        <div className="mb-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 mx-2 rounded-2xl text-sm hover:bg-gray-500"
          >
            Github Repo
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 mx-2 rounded-2xl text-sm hover:bg-blue-500"
          >
            Live Demo
          </a>

          <Link
            to={`/project/${project.id}/info`}
            className="bg-green-600 text-white px-4 py-2 mx-2 rounded-2xl text-sm hover:bg-green-500"
          >
            More Info
          </Link>
        </div>

        {/*Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Long Description  */}
          <div className="bg-white shadow rounded-2xl p-6 mb-8 w-1/2 h-80">
            <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
            <p className="text-gray-700 text-xl italic">{project.longDesc}</p>
            <p className="text-gray-700 text-l italic m-2.5">-Shardul Dhiwar</p>
          </div>
          {/* Images Section */}
          <div className="flex-1 space-y-6">
            <img
              src={project.images[0]}
              alt={`${project.name} screenshot`}
              className="rounded-2xl shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
