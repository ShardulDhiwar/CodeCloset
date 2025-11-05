import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id); // ✅ ID is a string

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
        <h2 className="text-2xl font-semibold">Project not found 😢</h2>
        <Link to="/" className="text-orange-500 underline mt-4">
          Back to Closet
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="bg-orange-100 px-8 pt-5">
        {/* BackButton */}
        <Link
          to={`/project/${project.id}`}
          className="text-orange-500 text-xl hover:underline mb-4 inline-block"
        >
          ← Back to Project
        </Link>

        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-6 text-center underline">
          {project.name}
        </h1>
        <p className="text-gray-700  text-center mb-0">{project.shortDesc}</p>
      </div>

      <div className="min-h-screen bg-orange-100 pt-5 pb-10 px-6">
        <div className="max-w-4xl mx-auto bg-orange-50 rounded-2xl shadow-md p-8 space-y-8">
          {/* Image */}
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={`${project.name} preview`}
              className="rounded-xl shadow-md w-full object-cover"
            />
          )}

          {/* About */}
          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              📄 About
            </h2>
            <p className="text-gray-600 leading-relaxed">{project.longDesc}</p>
          </section>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                ✨ Features
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Project Structure */}
          {project.structure && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                📁 Project Structure
              </h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto">
                {project.structure}
              </pre>
            </section>
          )}

          {/* Setup Instructions */}
          {project.setup && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                ⚙️ Setup Instructions
              </h2>

              {/* Backend */}
              {project.setup.backend && (
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Backend
                  </h3>
                  <ul className="list-disc ml-6 text-gray-600 space-y-1">
                    {project.setup.backend.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Frontend */}
              {project.setup.frontend && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Frontend
                  </h3>
                  <ul className="list-disc ml-6 text-gray-600 space-y-1">
                    {project.setup.frontend.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Usage */}
          {project.usage && project.usage.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🧠 Usage
              </h2>
              <ol className="list-decimal ml-6 text-gray-600 space-y-1">
                {project.usage.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                🧰 Technologies Used
              </h2>
              <ul className="list-disc ml-6 text-gray-600 space-y-1">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                GitHub Repo
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
