"use client";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import aiImg from "../../assets/img/ai_star.png";
import Image from "next/image";

export default function Education() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [educationalList, setEducationalList] = useState([{
  universityName: "",
  degree: "",
  major: "",
  startDate: "",
  endDate: "",
  description: "",
}]);

  const handleChange = (event, index) => {
    const newEntries = educationalList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const RemoveEducation = () => {
    setEducationalList((educationalList) => educationalList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationalList,
    });
  }, [educationalList]);

  return (
    <div className="form-container">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add Your educational details</p>

      <div>
        {educationalList.map((items, index) => {
          return (
            <div key={index}>
              <div className="grid w-full grid-cols-4  justify-center gap-3">
                <div className="col-span-3 flex flex-col">
                  <label className="label">School</label>
                  <input
                    type="text"
                    name="universityName"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="label">Date</label>
                  <input
                    type="text"
                    name="startDate"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="col-span-3 flex flex-col">
                  <label className="label">Degree & Major</label>
                  <input
                    type="text"
                    name="degree"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div className="col-span-1 flex flex-col">
                  <label className="label">GPA</label>
                  <input
                    type="text"
                    name="major"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>

                <div className="col-span-4 flex flex-col">
                  <div className="flex justify-between py-2 items-center">
                    {" "}
                    <label className="label">Description</label>
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
                    className="input-res max-w-full min-h-10 max-h-36"
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
      <div className="flex justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => {
              AddNewEducation();
            }}
            className="btn px-3 py-2"
          >
            {" "}
            + Add More
          </button>
          <div>
            {educationalList.length > 1 ? (
              <button
                className="btn px-3 py-2"
                onClick={() => {
                  RemoveEducation();
                }}
              >
                {" "}
                - Remove
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
