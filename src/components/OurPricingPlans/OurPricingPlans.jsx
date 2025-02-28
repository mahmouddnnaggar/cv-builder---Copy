import Link from "next/link";
import Label from "../Label/Label";
import AnimationCard from "../AnimationCard/AnimationCard";
import AnimationField from "../AnimationField/AnimationField";

export default function OurPricingPlans() {
  return (
    <>
      <section className="py-10">
        <div className="container">
          <div className="flex justify-center items-center flex-col">
            <AnimationField delay={0}>
              <Label labelText={"Our Pricing Plans"} />
              <h2 className="font-semibold max-w-[70%] mb-[50px] text-center mx-auto text-[24px] md:text-[39px] text-black">
                Ready to Start? Don't Worry, We'll Keep You at
                <span className="relative inline-block w-fit text-nowrap mx-2">
                  Comfortable Budget
                  <svg
                    className="absolute bottom-[-1px] -left-[6px] sm:-left-2.5 w-[106%] font-medium  h-[40px] md:h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="under-line"
                      d="M15.2,133.3L15.2,133.3c121.9-7.6,244-9.9,366.1-6.8c34.6,0.9,69.1,2.3,103.7,4"
                      style={{ animationPlayState: "running" }}
                    ></path>
                  </svg>
                </span>
              </h2>
            </AnimationField>
            <AnimationField delay={0.4}>
              <p className="text-gray-500 text-center  text-[15px] mt-4">
                Get started with a 7-day trial, Cancel anytime.
              </p>
            </AnimationField>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-center gap-10 my-10">
            <AnimationCard
              delay={0.3}
              className={
                "card w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-[0_10px_25px_5px_#0000001a] p-8  space-y-7"
              }
            >
              <div className=" text-center space-y-4">
                <h5 className="text-lg text-black font-black uppercase ">
                  Beginner
                </h5>
                <p className="text-[#99a6b5]">Perfect to get started</p>
              </div>
              <div className="border-y-[1px] border-[#eee]">
                <h2 className="py-2 text-center text-[44px] text-black font-bold ">
                  Free
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-black"></i>
                  Generate 500 AI Words
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-black"></i>
                  Multiple languages supported
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-black"></i>
                  Writing settings control
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-black"></i>
                  24/7 Support Service
                </p>
              </div>
              <div className="w-full flex justify-center">
                <Link
                  href={""}
                  className="btn w-full text-center py-2 text-sm  hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </Link>
              </div>
            </AnimationCard>
            <AnimationCard
              delay={0.6}
              className={
                " card w-full md:w-[45%] lg:w-[30%]   bg-card   rounded-2xl shadow-[0_10px_25px_5px_#0000001a] p-8  space-y-7"
              }
            >
              <div className=" text-center space-y-4 ">
                <h5 className="text-lg text-white font-black uppercase ">
                  Standard
                </h5>
                <p className="text-[#99a6b5]">
                  Best for professionals and bloggers
                </p>
              </div>
              <div className="border-y-[1px]   text-center  border-[#eee]">
                <h2 className=" py-2 text-center text-[44px] text-white  font-bold ">
                  $19.00
                  <span className="text-[15px] text-[#99a6b5] font-medium ">
                    /Monthly
                  </span>
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white "></i>
                  Generate 500 AI Words
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px]  text-white"></i>
                  Multiple languages supported
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white "></i>
                  Writing settings control
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px]  text-white"></i>
                  24/7 Support Service
                </p>
              </div>
              <div className="w-full flex justify-center">
                <Link
                  href={""}
                  className="btn w-full text-center py-2 text-sm  hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </Link>
              </div>
            </AnimationCard>
            <AnimationCard
              delay={0.9}
              className={
                "card w-full md:w-[45%] lg:w-[30%] bg-white rounded-2xl shadow-[0_10px_25px_5px_#0000001a] p-8  space-y-7"
              }
            >
              <div className=" text-center space-y-4">
                <h5 className="text-lg text-bl font-black uppercase ">
                  Professional
                </h5>
                <p className="text-[#99a6b5]">Perfect For large enterprises</p>
              </div>
              <div className="border-y-[1px] border-[#eee]">
                <h2 className=" py-2 text-center text-[44px] text-black font-bold  ">
                  $29.00
                  <span className="text-[15px] text-[#99a6b5] font-medium ">
                    /Monthly
                  </span>
                </h2>
              </div>
              <div className="space-y-3">
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white"></i>
                  Generate 500 AI Words
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white"></i>
                  Multiple languages supported
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white"></i>
                  Writing settings control
                </p>
                <p className="text-[16px] font-medium text-[#99a6b5] ">
                  <i className="fa fa-check mr-3 font-black text-[16px] text-white"></i>
                  24/7 Support Service
                </p>
              </div>
              <div className="w-full flex justify-center">
                <Link
                  href={""}
                  className="btn w-full text-center py-2 text-sm  hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </Link>
              </div>
            </AnimationCard>
          </div>
        </div>
      </section>
    </>
  );
}
