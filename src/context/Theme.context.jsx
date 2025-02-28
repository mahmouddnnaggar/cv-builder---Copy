"use client";

import { createContext, useState } from "react";
export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [optimizedColor, setOptimizedColor] = useState("#000000");
  function handelColor1() {
    setOptimizedColor("#000000");
  }
  function handelColor2() {
    setOptimizedColor("#f87171");
  }
  function handelColor3() {
    setOptimizedColor("#FF4800");
  }
  function handelColor4() {
    setOptimizedColor("#fb923c");
  }
  function handelColor5() {
    setOptimizedColor("#f97316");
  }
  function handelColor6() {
    setOptimizedColor("#fbbf24");
  }
  function handelColor7() {
    setOptimizedColor("#f59e0b");
  }
  function handelColor8() {
    setOptimizedColor("#22c55e");
  }
  function handelColor9() {
    setOptimizedColor("#15803d");
  }
  function handelColor10() {
    setOptimizedColor("#38bdf8");
  }
  function handelColor11() {
    setOptimizedColor("#0ea5e9");
  }
  function handelColor12() {
    setOptimizedColor("#6366f1");
  }
  return (
    <ThemeContext.Provider
      value={{
        optimizedColor,
        setOptimizedColor,
        handelColor1,
        handelColor2,

        handelColor3,
        handelColor4,
        handelColor5,
        handelColor6,
        handelColor7,
        handelColor8,
        handelColor9,
        handelColor10,
        handelColor11,
        handelColor12,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
