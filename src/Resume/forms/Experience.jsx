"use client";

import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import Description from "./components/Description";
import aiImg from "../../assets/img/ai_star.png";
import Image from "next/image";

export default function Experience() {
  const [experienceList, setExperienceList] = useState([
    {
      title: "",
      companyName: "",
      city: "",
      state: "",
      startDate: "",
      endDate: "",
      workSummery: "",
    },
  ]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  function handleChange(index, event) {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  }

  function AddNewExperience() {
    setExperienceList([
      ...experienceList,
      {
        title: "",
        companyName: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      },
    ]);
  }

  function RemoveExperience() {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  }
  function handleRichTextEditor(e, name, index) {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;

    setExperienceList(newEntries);
  }
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);
  return (
    <div>
      <div className="form-container">
        <h2 className="font-bold text-lg py-2">Professional Experience</h2>
        {/* <p>Add Your previous Job experience</p> */}
        <div>
          {experienceList.map((items, index) => {
            return (
              <div key={index}>
                <div className="grid w-full grid-cols-4  justify-center gap-3">
                  <div className="col-span-4 flex flex-col">
                    <label className="label">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>
                  <div className="col-span-4 flex flex-col">
                    <label className="label">Company</label>
                    <input
                      type="text"
                      name="companyName"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <label className="label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <label className="label">State</label>
                    <input
                      type="text"
                      name="state"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>

                  <div className="col-span-2 flex flex-col">
                    <label className="label">Start Date</label>
                    <input
                      type="text"
                      name="startDate"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <label className="label">End Date</label>
                    <input
                      type="text"
                      name="endDate"
                      className="input-res"
                      required
                      onChange={(event) => handleChange(index, event)}
                    />
                  </div>

                  <div className="col-span-4 flex flex-col">
                    <div className="flex justify-between py-2 items-center">
                      {" "}
                      <label className="label">Description</label>
                      <button
                        type="button"
                        className="flex justify-center items-center gap-1 text-sm rounded px-1 py-[2px] bg-[#efefef91]"
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
                    <Description
                      onRichTextEditorChange={(event) =>
                        handleRichTextEditor(event, "workSummery", index)
                      }
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
                AddNewExperience();
              }}
              className="btn px-3 py-2"
            >
              {" "}
              + Add More
            </button>
            <div>
              {experienceList.length <= 1 ? (
                ""
              ) : (
                <button
                  className="btn px-3 py-2"
                  onClick={() => {
                    RemoveExperience();
                  }}
                >
                  {" "}
                  - Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
