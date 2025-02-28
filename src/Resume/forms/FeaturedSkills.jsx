"use client";

import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext, useEffect, useState } from "react";

import { Rating, RoundedStar } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import Skills from "./Skills";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
export default function FeaturedSkills() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [skillsList, setSkillsList] = useState([
    {
      name: "",
      rating: 0,
    },
  ]);

  const handleChange = (index, name, value) => {
    const newEntries = skillsList.slice();

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([
      ...skillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };
  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };
  useEffect(() => {
    resumeInfo && setSkillsList(resumeInfo?.skills);
  }, []);

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      skills: skillsList,
    });
  }, [skillsList]);
  return (
    <div>
      <div className="form-container">
        <Skills />
        <h2 className="font-bold text-lg py-2">Featured Skills (Optional)</h2>
        <p className="text-sm mb-2 text-gray-500">
          Featured skills is optional to highlight top skills, with more circles
          mean higher proficiency.
        </p>

        {skillsList.map((item, index) => (
          <div
            key={index}
            className="grid w-full grid-cols-4  justify-center gap-3 "
          >
            <div className="col-span-4">
              <label className="label">
                Skill <span className="text-red-300">{index + 1}</span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  name="Angular"
                  className="input-res "
                  required
                  defaultValue={item.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />

                <Rating
                  style={{ maxWidth: 100 }}
                  className="col-span-1"
                  value={item.rating}
                  itemStyles={myStyles}
                  onChange={(v) => handleChange(index, "rating", v)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <button
              onClick={() => {
                AddNewSkills();
              }}
              className="btn px-3 py-2"
            >
              {" "}
              + Add More
            </button>
            <div>
              {skillsList.length > 1 ? (
                <button
                  className="btn px-3 py-2"
                  onClick={() => {
                    RemoveSkills();
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
    </div>
  );
}
