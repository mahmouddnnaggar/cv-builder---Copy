"use client";

import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";
export default function EducationPreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);


  return (
    <div className="my-6">
      <h2
        className="text-center py-2 border-b font-bold text-xl mb-2"
        style={{
          color: optimizedColor,
        }}
      >
        Education
      </h2>
      {/* <hr
        style={{
          borderColor: optimizedColor,
        }}
      /> */}

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className="my-6">
          <h2 className="text-lg font-bold  mb-1">
            {education.universityName}
          </h2>
          <h2 className="text-[15px]  flex justify-between ">
            <span className="font-medium ">
              {education?.degree}
              {education?.major != "" && " -"}{" "}
              <span>
                {education?.major}
                {education?.major != "" && " GPA"}
              </span>
            </span>
            <span>{education?.startDate}</span>
          </h2>
          <p className="text-sm my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}
