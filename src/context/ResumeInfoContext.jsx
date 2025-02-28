"use client";
import dummy from "@/data/dummy";
import { createContext, useState } from "react";
export const ResumeInfoContext = createContext(null);

export default function ResumeInfoProvider({ children }) {
  const [resumeInfo, setResumeInfo] = useState(dummy);

  
  return (
    <ResumeInfoContext.Provider
      value={{
        resumeInfo,
        setResumeInfo,
      }}
    >
      {children}
    </ResumeInfoContext.Provider>
  );
}
