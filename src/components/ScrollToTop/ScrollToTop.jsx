"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState("opacity-0");
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll("opacity-100");

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setShowScroll("opacity-0");
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollTop = (duration = 1000) => {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  };
  return (
    <div>
      <button
        onClick={() => {
          scrollTop(2000);
        }}
        className={` ${showScroll} cursor-pointer  flex justify-center items-center border border-[#8c7abd]  transition-all duration-[800ms] w-8 h-8 md:w-10 md:h-10 bg-white fixed bottom-10 hover:scale-110  right-2 md:right-6 rounded-full text-gray-200 `}
      >
        <i className="fa-solid fa-angle-up text-[16px] md:text-xl text-[#8c7abd] "></i>
      </button>
    </div>
  );
}
