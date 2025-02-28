"use client";

import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";
export default function ExperiencePreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);


  return (
    <div className="my-6">
      <h2
        className="text-center font-bold border-b py-2 text-xl mb-2"
        style={{
          color: optimizedColor,
        }}
      >
        Professional Experience
      </h2>
   

      {resumeInfo?.experience?.map((experience, id) => (
        <div key={id} className="my-5 ">
          <h2
            className="text-lg font-bold mb-1"
            // style={{
            //   color: optimizedColor,
            // }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-[16px] flex justify-between">
            <span>
              <span className="font-semibold">{experience?.companyName}</span>
              {experience?.city !== "" && " , "}
              {experience?.city}
              {experience?.state !== "" && " , "}
              {experience?.state}
            </span>
            <span>
              {experience?.startDate}
              <span className="text-[12px] font-bold">
                {experience.endDate !== "" && " To "}
              </span>
              {experience?.currentlyWorking ? "Present" : experience.endDate}{" "}
            </span>
          </h2>
          {/* <p className='text-xs my-2'>
              {experience.workSummery}
          </p> */}
          <div
            className="text-sm my-2 Summery "
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}
