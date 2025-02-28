"use client";

import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";
export default function ProjectsPreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);

  return (
    <div className="my-6">
      <h2
        className="text-center py-2 border-b  font-bold text-xl mb-2"
        style={{
          color: optimizedColor,
        }}
      >
        projects
      </h2>
 

      {resumeInfo?.projects.map((projects, index) => (
        <div key={index} className="my-5">
          <h2 className="text-lg font-bold  flex justify-between items-center">
            {projects.projectName}
            <span className="font-medium text-sm">{projects?.date}</span>
          </h2>

          <p className="text-sm my-2">{projects?.description}</p>
        </div>
      ))}
    </div>
  );
}
