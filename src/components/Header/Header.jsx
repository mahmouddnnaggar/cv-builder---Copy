'use client'
import AnimationField from "../AnimationField/AnimationField";
import Lottie from "lottie-react";
import headerAnimate from "../../assets/img/animate/Animation - 1740735347345.json";
export default function Header() {
  return (
    <>
      <header className="  h-[90vh] header-bg ">
        <div className="container h-full flex justify-center items-center">
          <div className="inner grid grid-cols-4 md:grid-cols-12   ">
            {/* ! =====left-side======> */}
            <div className=" left-side col-span-12 md:col-8 lg:col-span-7  space-y-5  mt-12">
              <AnimationField delay={0}>
                <div className="flex  items-center  rounded-full bg-[#e8f3fd] w-fit py-[5px] px-3 gap-2">
                  <div className="flex justify-center items-center bg-[#b5a2ea] w-6 h-6 rounded-full">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <p className="text-[#9281c1] text-[11px] sm:text-sm font-semibold tracking-wider">
                    Discover The Easiest ways to Build Your CV!
                  </p>
                </div>
              </AnimationField>
              <AnimationField delay={0.2}>
                <h1 className=" text-4xl sm:text-5xl font-[900] leading-10 sm:leading-14 text-white">
                  Create Your Winning
                  <span className="relative inline-block w-fit mx-2">
                    Resume
                    <svg
                      className="absolute -bottom-1 -left-1 w-[104%] "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M15.2,133.3L15.2,133.3c121.9-7.6,244-9.9,366.1-6.8c34.6,0.9,69.1,2.3,103.7,4"
                        className="under-line"
                        style={{
                          animationPlayState: "running",
                        }}
                      ></path>
                    </svg>
                  </span>
                  in Minutes.
                </h1>
              </AnimationField>
              <AnimationField delay={0.4}>
                <p className=" text-[17px] font-medium  text-white leading-8 sm:leading-10 lg:max-w-[80%] tracking-wide  sm:tracking-wider ">
                  Our Perfect resume builder takes the hassle out of resume
                  writing. Choose from several templates and follow easy prompts
                  to create the perfect job-ready resume.
                </p>
              </AnimationField>
              <AnimationField delay={0.6}>
                <button className="btn px-6 py-2 text-sm  hover:scale-105 transition-all duration-300">
                  Get Started
                </button>
              </AnimationField>
            </div>
            {/* ! =====right-side======> */}
            <div className=" right-side hidden lg:block col-span-12 md:col-span-4 lg:col-span-5 ">
              <Lottie animationData={headerAnimate} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
