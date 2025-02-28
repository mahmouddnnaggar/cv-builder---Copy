"use client";
import aiImg from "../../assets/img/ai_star.png";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";


export default function Project() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [projectList, setProjectList] = useState([ {
  projectName: "",
  date: "",
  description: "",
}]);
  const handleChange = (event, index) => {
    const newEntries = projectList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setProjectList(newEntries);
  };

  const AddNewProject = () => {
    setProjectList([...projectList,  {
  projectName: "",
  date: "",
  description: "",
}]);
  };
  const RemoveProject = () => {
    setProjectList((projectList) => projectList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      projects: projectList,
    });
  }, [projectList]);

  return (
    <div className="form-container">
      <h2 className="font-bold text-lg">Project</h2>
      {/* <p>Add Your educational details</p> */}

      <div>
        {projectList.map((items, index) => {
          return (
            <div key={index}>
              <div className="grid w-full grid-cols-2  justify-center gap-1">
                <div className="col-span-1 flex flex-col">
                  <label className="label">Project Name</label>
                  <input
                    type="text"
                    name="projectName"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>

                <div className="col-span-1 flex flex-col">
                  <label className="label">Date</label>
                  <input
                    type="text"
                    name="date"
                    className="input-res"
                    required
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>

                <div className="col-span-2 flex flex-col">
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
              AddNewProject();
            }}
            className="btn px-3 py-2"
          >
            {" "}
            + Add More
          </button>
          <div>
            {projectList.length > 1 ? (
              <button
                className="btn px-3 py-2"
                onClick={() => {
                  RemoveProject();
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
