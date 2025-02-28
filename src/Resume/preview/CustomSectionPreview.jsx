"use client";

import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";

export default function CustomSectionPreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);

  return (
    <div className="my-6">
      <h2
        className="text-center py-2 border-b  font-bold text-xl mb-2"
        style={{
          color: optimizedColor,
        }}
      >
        CustomSection
      </h2>
      {/* <hr
        style={{
          borderColor: optimizedColor,
        }}
      /> */}

      {resumeInfo?.customSection.map((customSection, index) => (
        <div key={index} className="my-5">
          <p className="text-sm ">{customSection?.description}</p>
        </div>
      ))}
    </div>
  );
}
