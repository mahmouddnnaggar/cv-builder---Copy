"use client";
import Image from "next/image";
import Link from "next/link";
import NavLogo from "../../assets/img/logo.png";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import { motion } from "framer-motion";

export default function NavBar() {
  // !=======NavBar state===>
  const pathname = usePathname();

  const [SlideNav, setSlideNav] = useState("left-[-293px]");
  const [iconBarColor, setIconBarColor] = useState("bg-white ");
  const [iconBarAnimate, setIconBarAnimate] = useState(
    "after:top-2 before:top-4"
  );
  const [iconBarRotate, setIconBarRotate] = useState("");
  const [bgNavBar, setBgNavBar] = useState("bg-transparent");

  // !=======NavBar fn()===>
  function handelOpenSlideNav() {
    if (SlideNav === "left-[-293px]") {
      setSlideNav("left-0");
      setIconBarColor("bg-transparent");
      setIconBarAnimate("after:top-0 before:top-0");
      setIconBarRotate("after:rotate-[135deg]   before:rotate-45");
    } else {
      setSlideNav("left-[-293px]");
      setIconBarColor("bg-white");
      setIconBarAnimate("after:top-2 before:top-4");
      setIconBarRotate("");
    }
  }
  function handelClosSlideNav() {
    setSlideNav("left-[-293px]");
    setIconBarColor("bg-white");
    setIconBarAnimate("after:top-2 before:top-4");
    setIconBarRotate("");
  }
  // *===== SingUp Model state & fn()  =====>

  const [showSingUpModel, setShowSingUpModel] = useState("hidden");
  const [isOpenSingUp, setIsOpenSingUp] = useState(false);

  function handelShowSingUpModel() {
    if (showSingUpModel === "hidden") {
      setShowSingUpModel("fixed");
      setIsOpenSingUp(true);
    }
  }
  function handelHideSingUpModel() {
    if (showSingUpModel === "fixed") {
      setShowSingUpModel("hidden");
      setIsOpenSingUp(false);
    }
  }
  // *===== login Model state & fn() =====>

  const [showLogInModel, setShowLogInModel] = useState("hidden");
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);

  function handelShowLogInModel() {
    if (showLogInModel === "hidden") {
      setShowLogInModel("fixed");
      setIsOpenLogIn(true);
    }
  }
  function handelHideLogInModel() {
    if (showLogInModel === "fixed") {
      setShowLogInModel("hidden");
      setIsOpenLogIn(false);
    }
  }

  // !========= useEffect nav bar animation ============>

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBgNavBar(" header-bg  shadow");
      } else {
        setBgNavBar("bg-transparent");
      }
    });
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 0) {
  //         setBgNavBar("bg-[#ccd7e8]");
  //       } else {
  //         setBgNavBar("bg-transparent");
  //       }
  //     });
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // إلغاء أي مؤقت إخفاء عند التمرير
  //     if (hideTimeout.current) {
  //       clearTimeout(hideTimeout.current);
  //     }

  //     if (currentScrollY === 0) {
  //       // لو المستخدم في أعلى الصفحة، اجعل الـ Navbar ظاهر دائمًا
  //       setVisible(true);
  //     } else if (currentScrollY > lastScrollY) {
  //       // لو المستخدم يمرر لأسفل -> يختفي فورًا
  //       setVisible(false);
  //     } else {
  //       // لو المستخدم يمرر لأعلى -> يظهر
  //       setVisible(true);

  //       // عند التوقف عن التمرير وهو ظاهر، يبدأ مؤقت ليختفي بعد 1.5 ثانية
  //       hideTimeout.current = setTimeout(() => {
  //         setVisible(false);
  //       }, 1500);
  //     }

  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (hideTimeout.current) {
  //       clearTimeout(hideTimeout.current);
  //     }
  //   };
  // }, []);
  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`p-3 ${bgNavBar} fixed  top-0  left-0 right-0 transition-colors duration-700 z-[99999]`}
      >
        <div className="  container">
          <div className="inner flex justify-between items-center">
            <Link
              href={"/"}
              className="text-2xl logo flex justify-center items-center gap-3 md:text-[26px] font-semibold text-white hover:text-white  transition-all duration-500"
            >
              <Image src={NavLogo || null} alt="logo" width={55} height={55} />
              CV Builder.
            </Link>

            <div className="list hidden lg:flex justify-center items-baseline gap-8 ">
              <ul className="flex  gap-10 ">
                <li>
                  <Link
                    href={"/"}
                    className={
                      pathname === "/"
                        ? "text-[16px] uppercase font-semibold text-white hover:text-white  transition-all duration-500"
                        : "text-[16px]  uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={
                      pathname === "/about"
                        ? "text-[16px]  uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                        : "text-[16px]  uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
                    }
                  >
                    ABout Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/pricing"}
                    className={
                      pathname === "/pricing"
                        ? "text-[16px]  uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                        : "text-[16px]  uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
                    }
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/template"}
                    className={
                      pathname === "/template"
                        ? "text-[16px]  uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                        : "text-[16px]  uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
                    }
                  >
                    Templates
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    handelShowLogInModel();
                  }}
                  className="btn px-4 text-center py-2"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    handelShowSingUpModel();
                  }}
                  className="btn px-4 text-center py-2"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div
              onClick={() => {
                handelOpenSlideNav();
              }}
              className="classy-navbar-toggler group h py-4 mb-3 px-2 block lg:hidden cursor-pointer "
            >
              <div
                className={` w-8 h-[3px] transition-all duration-500  ${iconBarColor}  ${iconBarRotate} before:transition-all before:duration-300  after:transition-all   after:duration-300       relative after:absolute after:w-8 after:h-[3px] ${iconBarAnimate} after:bg-white  before:absolute before:w-8 before:h-[3px]  before:bg-white`}
              />
            </div>
          </div>
        </div>
      </motion.nav>
      {/* !===slide-NavBar=====> */}
      <nav
        className={`slid-nav w-72  z-[99999]  flex  bg-[#161616] itemfont-medium text-gray-100 gap-8 flex-col fixed top-0 bottom-0 transition-all duration-700 ${SlideNav}  `}
      >
        <div className="flex justify-between w-full">
          <div />
          <button
            onClick={() => {
              handelClosSlideNav();
            }}
            className=" p-2 cursor-pointer  group hover:rotate-180 text-2xl  mr-5 mt-4 duration-700 font-light  transition-all "
          >
            <i className="fa-solid fa-x group-hover:text-red-600  duration-300 transition-colors "></i>
          </button>
        </div>

        <ul className="flex   gap-4 flex-col w-full">
          <li className=" border-b py-1 border-[#ffffff0d] ">
            <Link
              href={"/"}
              onClick={() => {
                handelClosSlideNav();
              }}
              className={
                pathname === "/"
                  ? "text-[16px]  ml-4 uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                  : "text-[16px]  ml-4 uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
              }
            >
              Home
            </Link>
          </li>
          <li className=" border-b py-1 border-[#ffffff0d] ">
            <Link
              onClick={() => {
                handelClosSlideNav();
              }}
              href={"/about"}
              className={
                pathname === "/about"
                  ? "text-[16px]  ml-4 uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                  : "text-[16px]  ml-4 uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
              }
            >
              ABout Us
            </Link>
          </li>
          <li className=" border-b py-1 border-[#ffffff0d] ">
            <Link
              onClick={() => {
                handelClosSlideNav();
              }}
              href={"/pricing"}
              className={
                pathname === "/pricing"
                  ? "text-[16px]  ml-4 uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                  : "text-[16px]  ml-4 uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
              }
            >
              Pricing
            </Link>
          </li>
          <li className=" border-b py-1 border-[#ffffff0d] ">
            <Link
              onClick={() => {
                handelClosSlideNav();
              }}
              href={"/template"}
              className={
                pathname === "/template"
                  ? "text-[16px]  ml-4 uppercase font-extrabold text-white hover:text-white transition-all duration-500"
                  : "text-[16px]  ml-4 uppercase font-medium text-gray-100 hover:text-white transition-all duration-500"
              }
            >
              Templates
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center  mx-4 gap-4">
          <button
            onClick={() => {
              handelShowLogInModel();
              handelClosSlideNav();
            }}
            className="btn px-4 w-full text-center py-2"
          >
            Log in
          </button>
          <button
            onClick={() => {
              handelShowSingUpModel();
              handelClosSlideNav();
            }}
            className="btn px-4 w-full text-center py-2"
          >
            Sign up
          </button>
        </div>
      </nav>

      <SignUp
        showSingUpModel={showSingUpModel}
        isOpenSingUp={isOpenSingUp}
        handelHideSingUpModel={handelHideSingUpModel}
        handelShowLogInModel={handelShowLogInModel}
      />
      <LogIn
        showLogInModel={showLogInModel}
        isOpenLogIn={isOpenLogIn}
        handelHideLogInModel={handelHideLogInModel}
        handelShowSingUpModel={handelShowSingUpModel}
      />
    </>
  );
}
