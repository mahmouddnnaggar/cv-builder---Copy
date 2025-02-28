import Label from "../Label/Label";
import Image from "next/image";
import icon1 from "../../assets/img/icons/1.svg";
import icon2 from "../../assets/img/icons/2.svg";
import icon3 from "../../assets/img/icons/3.svg";
import icon4 from "../../assets/img/icons/4.svg";
import arrow from "../../assets/img/icons/arrow.svg";
import AnimationField from "../AnimationField/AnimationField";
import AnimationCard from "../AnimationCard/AnimationCard";

export default function OurMAinFeatures() {
  return (
    <div className="bg-[#161616] py-[90px]">
      <div className="container">
        <AnimationField>
          <Label labelText={"Our Main Features"} />
          <p className="font-semibold max-w-[70%] mb-[50px] text-center mx-auto text-[24px] md:text-[39px] text-white">
            Create Your Awesome Resumes and Enjoy Our{" "}
            <span className="relative margin-block w-fit px-2 text-nowrap">
              Key Features
              <svg
                className="absolute bottom-[-1.5px] -left-1 w-[104%] h-[40px] md:h-[60px] "
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
          </p>
        </AnimationField>
        <div className="features grid grid-cols-12 gap-[25px] max-w-[100%]">
          <AnimationCard
            className={
              "feature col-span-full md:col-span-6 lg:col-span-3 bg-[#202020C9] py-[30px] px-[20px] rounded-[15px]"
            }
            delay={0.3}
          >
            <div className="feature-icon mb-[30px] shadow-lg bg-[#202020C9] w-fit p-[15px] rounded-[10px]">
              <Image src={icon1} alt="Icon" />
            </div>
            <h4 className="font-semibold text-white mt-[20px] text-[17px] mb-[15px]">
              Proven CV Templates to increase Hiring Chance
            </h4>
            <p className="text-[#888] text-[15px] leading-[1.9] mb-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam ipsum.
            </p>
            <a
              href="#"
              className="flex gap-1 w-fit pb-1 border-b-2 border-[#866fff] text-[#866fff]  hover:text-[#866fff] transition-colors text-[14px]"
            >
              View More Details
              <Image src={arrow} alt="arrow" />
            </a>
          </AnimationCard>
          <AnimationCard
            className={
              "feature col-span-full md:col-span-6 lg:col-span-3 bg-[#202020C9] py-[30px] px-[20px] rounded-[15px]"
            }
            delay={0.6}
          >
            <div className="feature-icon mb-[30px] shadow-lg bg-[#202020C9] w-fit p-[15px] rounded-[10px]">
              <Image src={icon2} alt="Icon" />
            </div>
            <h4 className="font-semibold text-white mt-[20px] text-[17px] mb-[15px]">
              Creative, Modern and Clean Templates Design
            </h4>
            <p className="text-[#888] text-[15px] leading-[1.9] mb-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam ipsum.
            </p>
            <a
              href="#"
              className="flex gap-1 w-fit pb-1 border-b-2 border-[#866fff] text-[#866fff]  hover:text-[#866fff] transition-colors  text-[14px]"
            >
              View More Details
              <Image src={arrow} alt="arrow" />
            </a>
          </AnimationCard>
          <AnimationCard
            className={
              "feature col-span-full md:col-span-6 lg:col-span-3 bg-[#202020C9] py-[30px] px-[20px] rounded-[15px]"
            }
            delay={0.9}
          >
            <div className="feature-icon mb-[30px] shadow-lg bg-[#202020C9] w-fit p-[15px] rounded-[10px]">
              <Image src={icon3} alt="Icon" />
            </div>
            <h4 className="font-semibold text-white mt-[20px] text-[17px] mb-[15px]">
              Easy and Intuitive Online CV and Resume Builder
            </h4>
            <p className="text-[#888] text-[15px] leading-[1.9] mb-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam ipsum.
            </p>
            <a
              href="#"
              className="flex gap-1 w-fit pb-1 border-b-2 border-[#866fff] text-[#866fff]  hover:text-[#866fff]  transition-colors  text-[14px]"
            >
              View More Details
              <Image src={arrow} alt="arrow" />
            </a>
          </AnimationCard>
          <AnimationCard
            className={
              "feature col-span-full md:col-span-6 lg:col-span-3 bg-[#202020C9] py-[30px] px-[20px] rounded-[15px]"
            }
            delay={1.2}
          >
            <div className="feature-icon mb-[30px] shadow-lg bg-[#202020C9] w-fit p-[15px] rounded-[10px]">
              <Image src={icon4} alt="Icon" />
            </div>
            <h4 className="font-semibold text-white mt-[20px] text-[17px] mb-[15px]">
              Free to use. Developed by hiring professionals.
            </h4>
            <p className="text-[#888] text-[15px] leading-[1.9] mb-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              neque quam ipsum.
            </p>
            <a
              href="#"
              className="flex gap-1 w-fit pb-1 border-b-2 border-[#866fff] text-[#866fff]  hover:text-[#866fff] transition-colors  text-[14px]"
            >
              View More Details
              <Image src={arrow} alt="arrow" />
            </a>
          </AnimationCard>
        </div>
      </div>
    </div>
  );
}
