"use client";

import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";
export default function PersonalDetailsPreview({ resumeInfo }) {
  const { optimizedColor } = useContext(ThemeContext);

  return (
    <div
      className="py-2 my-2 border-b-2 "
      style={{
        borderColor: optimizedColor,
      }}
    >
      <h2
        className="font-bold   text-3xl text-center"
        style={{
          color: optimizedColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-lg font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center font-normal text-[16px]"
        style={{
          color: optimizedColor,
        }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-sm"
          style={{
            color: optimizedColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-sm"
          style={{
            color: optimizedColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      {/* <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: optimizedColor,
        }}
      /> */}
    </div>
  );
}
