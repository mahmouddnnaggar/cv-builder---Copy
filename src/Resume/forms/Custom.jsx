"use client";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";
import aiImg from "../../assets/img/ai_star.png";
import Image from "next/image";

export default function Custom() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [customList, setCustomList] = useState([{
  description: "",
}]);

  const handleChange = (event, index) => {
    const newEntries = customList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setCustomList(newEntries);
  };

  const AddNewCustom = () => {
    setCustomList([...customList, {
  description: "",
}]);
  };
  const RemoveCustom = () => {
    setCustomList((customList) => customList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      customSection: customList,
    });
  }, [customList]);
  return (
    <div className="form-container">
      <h2 className="font-bold text-lg">CUSTOM SECTION</h2>

      <div>
        {customList.map((items, index) => {
          return (
            <div key={index}>
              <div className="grid w-full grid-cols-4  justify-center gap-3">
                <div className="col-span-4 flex flex-col">
                  <div className="flex justify-between py-2 items-center">
                    {" "}
                    <label className="label">Custom Textbox</label>
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
              AddNewCustom();
            }}
            className="btn px-3 py-2"
          >
            {" "}
            + Add More
          </button>
          <div>
            {customList.length > 1 ? (
              <button
                className="btn px-3 py-2"
                onClick={() => {
                  RemoveCustom();
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
