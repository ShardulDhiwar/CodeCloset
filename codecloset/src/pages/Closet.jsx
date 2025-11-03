import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Closet = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">🗄️ My CodeCloset</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                    to={`/project/${project.id}`}
                    key={project.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-amber-700 transition-shadow duration-300 p-6 flex flex-col">
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className="rounded-xl h-48 w-full object-cover mb-4"
                    />    
                    <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                    <p className="text-gray-600 text-sm mb-3">{project.shortDesc}</p>
                    <div>
                        {project.tags.map((tag, index) => (
                            <span
                                index={index}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>    
              </Link>
            ))} 
            </div>

    </div>
  );
};

export default Closet;

