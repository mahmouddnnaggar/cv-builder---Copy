"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Lottie from "lottie-react";
import clientAnimate from "../../assets/img/animate/client.json";
import Image from "next/image";
import clientImage from "../../assets/img/client.jpg";
import styles from "./WhatOurClientSay.module.css";
import Label from "../Label/Label";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.css";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef, useState } from "react";
import AnimationField from "../AnimationField/AnimationField";
import AnimationCard from "../AnimationCard/AnimationCard";

const slides = [
  {
    id: 1,
    name: "Talal Tach",
    position: "One Of Our Client",
    text: `
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium dolores atque, Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium doloribus odit minus
                      maiores sunt mollitia consequatur, soluta quasi.
                    `,
  },
  {
    id: 2,
    name: "Yasser elshiwy",
    position: "One Of Our Client",
    text: `
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium dolores atque, Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium doloribus odit minus
                      maiores sunt mollitia consequatur, soluta quasi.
                    `,
  },
  {
    id: 3,
    name: "Mahmoud El-Naggar",
    position: "One Of Our Client",
    text: `
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium dolores atque, Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                      Officiis magni, quisquam, accusantium doloribus odit minus
                      maiores sunt mollitia consequatur, soluta quasi.
                    `,
  },
];

export default function WhatOurClientSay() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pb-[100px] bg-gray pt-10 ">
      <div className="container">
        <AnimationField>
          <Label labelText={"What Our Client Say"} />
          <p className="font-semibold max-w-[70%] mb-[50px] text-center mx-auto text-[24px] md:text-[39px] text-black">
            Listen to What Our Clients Say
            <span className="relative inline-block px-2">
              Clients Say
              <svg
                className="absolute bottom-[-1.5px] -left-1 w-[104%] h-[40px] md:h-[60px] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  className="under-line"
                  d="M15.2,133.3L15.2,133.3c121.9-7.6,244-9.9,366.1-6.8c34.6,0.9,69.1,2.3,103.7,4"
                  stroke="#ffd700"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </p>
        </AnimationField>
        <div className="content flex flex-wrap justify-center lg:justify-between items-center">
          <AnimationCard
            className={"client-image w-[75%] lg:w-[40%]"}
            delay={0.3}
          >
            {/* <Image src={clientImage} alt="Client" className="w-[100%]" /> */}
            <Lottie animationData={clientAnimate} style={{ width: "100%" }} />
          </AnimationCard>
          <AnimationCard
            className={"feedbacks w-[90%] lg:w-[52%] mt-[30px] lg:mt-0"}
            delay={0.6}
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-lg overflow-hidden"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <FeedbackCard
                    name={slide.name}
                    text={slide.text}
                    position={slide.position}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={`w-[30px] h-[30px] flex items-center justify-center rounded-full text-[12px] font-semibold  text-gray-900 transition-all cursor-pointer shadow-md
              ${
                activeIndex === index
                  ? "bg-[#b2caf4] scale-110 shadow-lg"
                  : "bg-gray-200"
              }`}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </AnimationCard>
        </div>
      </div>
    </div>
  );
}
