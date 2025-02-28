"use client"
import Link from "next/link";
import AnimationField from "../AnimationField/AnimationField";

export default function Headers({ title, link, description }) {
  return (
    <>
      <header className="header-bg  h-[50vh]">
        <div className="container h-full">
          <div className="inner w-full flex flex-col gap-1 justify-center items-center h-full">
            <h2 className="text-[42px] font-semibold  px-4 rounded-xl  text-white">
              <AnimationField delay={0}>{title}</AnimationField>
            </h2>
            <AnimationField delay={0.2}>
              <p className="text-white text-[14px] px-4 rounded-xl">
                <Link href={"/"}>{link} </Link>
                <span className="text-gray-500">/</span> {description}
              </p>
            </AnimationField>
          </div>
        </div>
      </header>
    </>
  );
}
