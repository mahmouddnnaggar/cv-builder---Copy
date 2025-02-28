import Image from "next/image";
import icon1 from "../../assets/img/icons/1.svg";
import icon2 from "../../assets/img/icons/3.svg";
import icon3 from "../../assets/img/icons/4.svg";
import icon4 from "../../assets/img/icons/5.svg";
import Label from "../Label/Label";
import AnimationCard from "../AnimationCard/AnimationCard";
import AnimationField from "../AnimationField/AnimationField";
export default function HowItWorks() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <AnimationField delay={0}>
          <Label labelText={"How it Works"} />
          <h2 className="  text-[24px] sm:text-[39px] flex justify-center items-center flex-wrap font-semibold text-black">
            Easy Steps To
            <span className="relative inline-block w-fit text-nowrap mx-2">
              Build Your Resume
              <svg
                className="absolute bottom-0.5 -left-1 sm:-left-2.5 w-[106%] font-medium h-10 sm:h-14 "
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
      </div>
      <div className="py-16 w-full flex-col md:flex-row gap-10 lg:gap-0 flex-wrap flex justify-center items-center">
        <AnimationCard
          delay={0.3}
          className={
            " relative  w-full md:w-[45%] lg:w-1/4 flex flex-col gap-3 items-center"
          }
        >
          <div className="bg-white  shadow-[2px_3.464px_24px_0px_#6a69c240] w-fit p-2 rounded-2xl">
            <Image src={icon1 || null} alt="icon" />
          </div>
          <p className="text-[15px]  text-[#464346] font-semibold">
            Step Num
            <span className="text-[#7c5fbd] text-[16px] inline-block ml-1 font-black">
              #1
            </span>
          </p>
          <h2 className="text-center text-nowrap text-[22px] lg:text-[20px] xl:[22px] text-black font-semibold ">
            Create your Account
          </h2>
          <span className="process-divider hidden md:inline-block  sm:left-[180px]  lg:left-[115px]"></span>
        </AnimationCard>
        {/* ============= */}
        <AnimationCard
          delay={0.6}
          className={
            " relative w-full md:w-[45%] lg:w-1/4  flex flex-col flex-wrap gap-3 items-center"
          }
        >
          <div className="bg-white  shadow-[2px_3.464px_24px_0px_#6a69c240] w-fit p-2 rounded-2xl">
            <Image src={icon2 || null} alt="icon" />
          </div>

          <p className="text-[15px]  text-[#464346] font-semibold">
            Step Num
            <span className="text-[#7c5fbd] text-[16px] inline-block ml-1 font-black">
              #1
            </span>
          </p>
          <h2 className=" text-center text-nowrap text-[22px] lg:text-[20px] xl:[22px] text-black font-semibold ">
            Choose Your Resume
          </h2>
          <span className="process-divider hidden lg:inline-block sm:left-[180px] lg:left-[115px]"></span>
        </AnimationCard>
        {/* ============= */}
        <AnimationCard
          delay={0.9}
          className={
            " relative w-full md:w-[45%] lg:w-1/4  flex flex-col gap-3 items-center"
          }
        >
          <div className="bg-white  shadow-[2px_3.464px_24px_0px_#6a69c240] w-fit p-2 rounded-2xl">
            <Image src={icon3 || null} alt="icon" />
          </div>
          <p className="text-[15px]  text-[#464346] font-semibold">
            Step Num
            <span className="text-[#7c5fbd] text-[16px] inline-block ml-1 font-black">
              #3
            </span>
          </p>
          <h2 className=" text-center  text-nowrap text-[22px] lg:text-[20px] xl:[22px] text-black font-semibold ">
            Add Your Information
          </h2>
          <span className="process-divider hidden md:inline-block bg-red-400  sm:left-[180px]  lg:left-[115px]"></span>
        </AnimationCard>
        {/* ============= */}
        <AnimationCard
          delay={1.2}
          className={
            " w-full md:w-[45%] lg:w-1/4  flex flex-col gap-3 items-center"
          }
        >
          <div className="bg-white  shadow-[2px_3.464px_24px_0px_#6a69c240] w-fit p-2 rounded-2xl">
            <Image src={icon4 || null} alt="icon" />
          </div>
          <p className="text-[15px]  text-[#464346] font-semibold">
            Step Num
            <span className="text-[#7c5fbd] text-[16px] inline-block ml-1 font-black">
              #4
            </span>
          </p>
          <h2 className=" text-center text-nowrap text-[22px]  lg:text-[20px] xl:[22px] text-black font-semibold ">
            Download Your Resume
          </h2>
        </AnimationCard>
      </div>
    </>
  );
}
