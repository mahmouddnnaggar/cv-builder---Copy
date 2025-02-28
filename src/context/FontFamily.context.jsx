"use client";
import "@fontsource/merriweather";
import "@fontsource-variable/roboto-condensed";
import "@fontsource/lato";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/noto-serif";
import "@fontsource-variable/raleway";
import "@fontsource-variable/lora";
import "@fontsource-variable/roboto-slab";
import "@fontsource-variable/playfair-display";

import { createContext, useState } from "react";
export const FontFamilyContext = createContext(null);
export default function FontFamilyProvider({ children }) {
  const [resumeFont, setResumeFont] = useState(
    "Roboto Condensed Variable, sans-serif"
  );
  function robotoFont() {
    setResumeFont("Roboto Condensed Variable, sans-serif");
  }
  function latoFont() {
    setResumeFont("Lato, sans-serif");
  }
  function montserratFont() {
    setResumeFont("Montserrat Variable, sans-serif");
  }
  function OpenSansFont() {
    setResumeFont("Open Sans Variable, sans-serif");
  }
  function ralewayFont() {
    setResumeFont("Raleway Variable, sans-serif");
  }
  function notoSerifFont() {
    setResumeFont("Noto Serif Variable, serif");
  }
  function loraFont() {
    setResumeFont("Lora Variable, serif");
  }
  function robotoSlabFont() {
    setResumeFont("Roboto Slab Variable, serif");
  }
  function PlayfairFont() {
    setResumeFont("Playfair Display Variable, serif");
  }
  function merriweatherFont() {
    setResumeFont("Merriweather, serif");
  }

  return (
    <FontFamilyContext.Provider
      value={{
        resumeFont,
        setResumeFont,
        robotoFont,
        latoFont,
        montserratFont,
        OpenSansFont,
        ralewayFont,
        notoSerifFont,
        loraFont,
        robotoSlabFont,
        PlayfairFont,
        merriweatherFont,
      }}
    >
      {children}
    </FontFamilyContext.Provider>
  );
}
