"use client";
import Lottie from "lottie-react";
import aboutAnimate from "../../assets/img/animate/about.json";
import checkAnimate from "../../assets/img/animate/check.json";
import Label from "../Label/Label.jsx";
import HowItWorks from "../HowitWorks/HowItWorks.jsx";
import AnimationField from "../AnimationField/AnimationField.jsx";
import AnimationCard from "../AnimationCard/AnimationCard.jsx";
export default function LearnAboutUs() {
  return (
    <>
      <section className="bg-[#161616] py-6  ">
        <div className="container ">
          <section className=" flex flex-col lg:flex-row gap-6 space-y-4 justify-between items-center w-full py-24 ">
            <div className="w-[100%] lg:w-[45%] ">
              <AnimationField delay={0.2}>
                {/* <Image
                  src={aboutImg || null}
                  width={"100%"}
                  alt="about image"
                /> */}
                <Lottie
                  animationData={aboutAnimate}
                  style={{ width: "100%" }}
                />
              </AnimationField>
            </div>
            <AnimationCard
              delay={0.6}
              className={"  w-full lg:w-[30%] space-y-7"}
            >
              <div className="flex -mb-[7px] text-white">
                <Label labelText={"Learn about us"} />
              </div>
              <h2 className=" text-3xl font-[900] leading-10 sm:leading-10 text-white">
                Remove Headache of Creating a Resume!
              </h2>
              <p className="text-[16px] text-gray-400 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                eius molestiae facere, natus reprehenderit eaque eum, autem
                ipsam. Magni, error. Tempora odit laborum iure inventore
                possimus laboriosam qui nam. Fugit!
              </p>
              <button className="btn px-6 py-2 text-sm  hover:scale-105 transition-all duration-300">
                lets build your cv
              </button>
            </AnimationCard>
            <AnimationCard delay={1} className={"w-full lg:w-[25%] space-y-4"}>
              <div className="flex items-center  gap-4 ">
                {/* <Image
                  src={checkImg || null}
                  width={30}
                  height={30}
                  alt="check icon"
                /> */}
                <div>
                  <Lottie
                    animationData={checkAnimate}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>

                <p className=" text-[16px] text-[#f5f5f5] ">
                  Proven CV Templates to increase Hiring Chance
                </p>
              </div>
              <div className="flex items-center  gap-4">
                {/* <Image
                  src={checkImg || null}
                  width={30}
                  height={30}
                  alt="check icon"
                /> */}
                <div>
                  <Lottie
                    animationData={checkAnimate}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>

                <p className=" text-[16px] text-[#f5f5f5] ">
                  Creative and Clean Templates Design
                </p>
              </div>
              <div className="flex items-center  gap-4">
                {/* <Image
                  src={checkImg || null}
                  width={30}
                  height={30}
                  alt="check icon"
                /> */}
                <div>
                  <Lottie
                    animationData={checkAnimate}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>

                <p className=" text-[16px] text-[#f5f5f5] ">
                  Easy and Intuitive Online CV Builder
                </p>
              </div>
              <div className="flex items-center  gap-4">
                {/* <Image
                  src={checkImg || null}
                  width={30}
                  height={30}
                  alt="check icon"
                /> */}
                <div>
                  <Lottie
                    animationData={checkAnimate}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>

                <p className=" text-[16px] text-[#f5f5f5] ">
                  Free to use. Developed by hiring professionals.
                </p>
              </div>
              <div className="flex items-center  gap-4">
                {/* <Image
                  src={checkImg || null}
                  width={30}
                  height={30}
                  alt="check icon"
                /> */}
                <div>
                  <Lottie
                    animationData={checkAnimate}
                    style={{ width: "50px", height: "50px" }}
                    // loop={false}
                  />
                </div>

                <p className=" text-[16px] text-[#f5f5f5] ">
                  Recruiter Approved Phrases.
                </p>
              </div>
            </AnimationCard>
          </section>
        </div>
      </section>
      <section className="py-16 ">
        <div className="container">
          <HowItWorks />
        </div>
      </section>
    </>
  );
}
