"use client";

import { FontFamilyContext } from "@/context/FontFamily.context";
import { ThemeContext } from "@/context/Theme.context";
import { useContext } from "react";
export default function ResumeSetting() {
  const {
    optimizedColor,
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
  } = useContext(ThemeContext);
  const {
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
  } = useContext(FontFamilyContext);

  return (
    <div className="form-container">
      <div className="grid grid-cols-1 py-4 ">
        <h2 className="py-1 font-semibold">Resume Setting</h2>
        <div className=" p-3 pr-10 ">
          <div className=" grid grid-cols-12 items-center   pb-3">
            <p className="col-span-2 lg:col-span-3 xl:col-span-2  text-sm text-gray-800">
              Theme Color
            </p>
            <input
              type="text"
              defaultValue={optimizedColor}
              className="border border-gray-300  px-4 py-[2px] outline-none col-span-2 lg:col-span-3 xl:col-span-2"
              style={{ color: optimizedColor }}
            />
          </div>
          <div className=" grid grid-cols-12  col-span-4 gap-3">
            <button
              onClick={() => {
                handelColor1();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#000000] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor2();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#f87171] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor3();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#FF4800] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor4();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#fb923c] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor5();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#f97316] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor6();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#fbbf24] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor7();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#f59e0b] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor8();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1  p-4 cursor-pointer bg-[#22c55e] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor9();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1  p-4 cursor-pointer bg-[#15803d] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor10();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1  p-4 cursor-pointer bg-[#38bdf8] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor11();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#0ea5e9] rounded"
            ></button>
            <button
              onClick={() => {
                handelColor12();
              }}
              type="button"
              className=" col-span-1 lg:col-span-2 xl:col-span-1 p-4 cursor-pointer bg-[#6366f1] rounded"
            ></button>
          </div>
        </div>

        <div className=" p-3 pr-10 lg:pr-4 xl:pr-10 space-y-2">
          <p className="text-sm text-gray-700 font-semibold">Font Family</p>
          <div className="grid grid-cols-10  gap-4">
            <button
              onClick={() => {
                robotoFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-sm border border-gray-300  py-[6px] rounded-md "
            >
              Roboto{" "}
            </button>
            <button
              onClick={() => {
                latoFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-sm border border-gray-300  py-[6px] rounded-md "
            >
              Lato{" "}
            </button>
            <button
              onClick={() => {
                montserratFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-sm border border-gray-300  py-[6px] rounded-md "
            >
              Montserrat{" "}
            </button>
            <button
              onClick={() => {
                OpenSansFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-sm border border-gray-300  py-[6px] rounded-md "
            >
              Open Sans{" "}
            </button>
            <button
              onClick={() => {
                ralewayFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Raleway{" "}
            </button>
            <button
              onClick={() => {
                notoSerifFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Noto Serif{" "}
            </button>
            <button
              onClick={() => {
                loraFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Lora{" "}
            </button>
            <button
              onClick={() => {
                robotoSlabFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Roboto Slab{" "}
            </button>
            <button
              onClick={() => {
                PlayfairFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2  cursor-pointer px-1  text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Playfair Display
            </button>
            <button
              onClick={() => {
                merriweatherFont();
              }}
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Merriweather{" "}
            </button>
          </div>
        </div>

        <div className=" p-3 pr-10 lg:pr-4 xl:pr-10  space-y-1">
          <div className=" grid grid-cols-10 items-center   pb-3">
            <p className="col-span-2 lg:col-span-3 xl:col-span-2 text-sm text-gray-800">
              Font Size (pt)
            </p>
            <input
              type="text"
              className="border border-gray-300 px-3 py-[1px] outline-none col-span-1 lg:col-span-2 xl:col-span-1"
            />
          </div>
          <div className=" grid grid-cols-10  col-span-4 gap-3">
            <button
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Compact{" "}
            </button>
            <button
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Standard{" "}
            </button>
            <button
              type="button"
              className=" col-span-2 lg:col-span-3 xl:col-span-2 cursor-pointer px-1 text-xs border border-gray-300  py-[6px] rounded-md "
            >
              Large{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
