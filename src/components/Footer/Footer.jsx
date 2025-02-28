import Image from "next/image";
import Link from "next/link";
import footLogo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="py-16  bg-[#121212] ">
        <div className="container">
          <div className="inner flex flex-col flex-wrap gap-10 lg:gap-0 md:flex-row  justify-center md:justify-between">
            <div className="flex flex-col md:w-[45%]  xl:w-[35%] space-y-3 ">
              <Link
                href={"/"}
                className="text-xl logo flex  items-center gap-3  font-medium text-white"
              >
                <Image
                  src={footLogo || null}
                  alt="logo"
                  width={40}
                  height={40}
                />
                CV Builder.
              </Link>
              <p className="text-white text-[13px] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                ducimus voluptatibus neque illo id repellat quisquam? Autem
                expedita earum quae laborum ipsum ad.
              </p>
              <ul className="flex items-center gap-4 text-white">
                <li>
                  <a
                    href=""
                    className="text-white hover:text-[#4a7aec] transition-all duration-500"
                  >
                    <i className="fa-brands fa-facebook-f text-xs"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white hover:text-[#4a7aec] transition-all duration-500"
                  >
                    <i className="fa-brands fa-twitter text-xs"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white hover:text-[#4a7aec] transition-all duration-500"
                  >
                    <i className="fa-brands fa-google-plus-g text-xs"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white hover:text-[#4a7aec] transition-all duration-500"
                  >
                    <i className="fa-brands fa-instagram text-xs"></i>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white hover:text-[#4a7aec] transition-all duration-500"
                  >
                    <i className="fa-brands fa-linkedin-in text-xs"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:w-[45%]  lg:w-fit">
              <h3 className="text-white text-sm">PRIVACY & TOS</h3>
              <ul>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Advertiser Agreement
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Acceptable Use Policy
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Technology Privacy
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Developer Agreement
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:w-[45%]  lg:w-fit">
              <h3 className="text-white text-sm">NAVIGATE</h3>
              <ul>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Advertisers
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#d3cdcd] text-[13px] hover:text-white transition-colors duration-200"
                  >
                    Connect
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2 md:w-[45%]  lg:w-fit">
              <h3 className="text-white text-sm">CONTACT US</h3>
              <ul className="space-y-2">
                <li className="text-[#d3cdcd] text-sm">
                  Mailing Address:xx00 E. Union Ave
                </li>
                <li className="text-[#d3cdcd] text-sm">
                  Suite 1100. Denver, CO 80237
                </li>
                <li className="text-[#d3cdcd] text-sm">+999 90932 627</li>
                <li className="text-[#d3cdcd] text-sm">
                  support@yourdomain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
