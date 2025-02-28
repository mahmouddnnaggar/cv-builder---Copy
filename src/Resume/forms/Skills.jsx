"use client";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import aiImg from "../../assets/img/ai_star.png";
import Image from "next/image";
const formField = {
  skill: "",
};
export default function Skills() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [skillList, setSkillList] = useState([formField]);

  const handleChange = (event, index) => {
    const newEntries = skillList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setSkillList(newEntries);
  };
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      titleSkills: skillList,
    });
  }, [skillList]);
  return (
    <div className="">
      <h2 className="font-bold text-lg">SKILLS</h2>

      <div>
        {skillList.map((items, index) => {
          return (
            <div key={index}>
              <div className="grid w-full grid-cols-4  justify-center gap-3">
                <div className="col-span-4 flex flex-col">
                  <div className="flex justify-between py-1 items-center">
                    {" "}
                    <label className="label">Skills List</label>
                    <button
                      type="button"
                      className="flex justify-center items-center gap-1 text-sm rounded px-1 py-[2px] bg-[#efefef]"
                    >
                      {" "}
                      <Image
                        src={aiImg}
                        alt="aiImg"
                        width={20}
                        height={20}
                        className="object-cover"
                      />{" "}
                      AI Generate
                    </button>
                  </div>
                  <textarea
                    type="text"
                    name="description"
                    className="input-res max-w-full h-11 max-h-36"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="col-span-2"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
