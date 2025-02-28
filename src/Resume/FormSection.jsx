"use client";

import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import Experience from "./forms/Experience";
import Education from "./forms/Education";

import FeaturedSkills from "./forms/FeaturedSkills";
import Project from "./forms/Project";
import Custom from "./forms/Custom";
import ResumeSetting from "./forms/ResumeSetting";

export default function FormSection() {
  let { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="flex items-center h-[900px] sm:p-4  overflow-auto flex-col ">
      {/* <div className="w-full flex px-10 py-2">
        <button className="btn px-5 py-2 flex justify-center items-center gap-4">
          {" "}
          <i className="fa-solid fa-table-cells-large text-lg"></i> theme
        </button>
      </div> */}
      <div className="flex flex-col gap-3">
        {/* Personal Detail  */}
        <PersonalDetail />
        {/* Experience  */}
        <Experience />
        {/* Educational Detail  */}
        <Education />
        {/* Skills  */}
        <FeaturedSkills />
        {/* project */}
        <Project />
        {/* Custom */}
        <Custom />
        {/* ResumeSetting */}

        <ResumeSetting />
      </div>
    </div>
  );
}
