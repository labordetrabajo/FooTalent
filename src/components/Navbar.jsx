"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bebas_Neue, Antonio, Open_Sans, Montserrat } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });


const antonio = Antonio({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const open_sans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);



  return (
    <>

      <nav id="home" className={`sticky top-0 z-50 w-full h-[64px] md:h-[100px] bg-black`}>
        <div
          className={`px-4 mx-auto lg:max-w-7xl md:flex md:px-8 p-3 md:p-5 h-[64px] md:h-[100px]`}
        >
          <div className="w-full ">
            <div className={`flex text-[#FFF] text-[23px] align-center   items-center justify-between ${open_sans.className} `}>
              <a className="font-[400] text-[20px]   md:text-[32px] cursor-pointer" scroll={true} onClick={() => {
                window.scrollTo({
                  top: document.getElementById("hero").offsetTop - 130,
                  left: 0,
                });
              }}>PULSO<span className="font-[800] text-[20px] md:text-[32px] ">365</span></a>

              <div className=" lg:hidden">
                <button
                  className="rounded-md p-2 text-gray-700 outline-none focus:outline-none focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[25px] w-[24px] text-lg text-[#BAFC66]"
                      viewBox="0 0 20 20"
                      fill="#AC8E3F"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2612_374)">
                        <path d="M23 11.2852H1C0.447715 11.2852 0 11.6209 0 12.0352C0 12.4494 0.447715 12.7852 1 12.7852H23C23.5523 12.7852 24 12.4494 24 12.0352C24 11.6209 23.5523 11.2852 23 11.2852Z" fill="#AC8E3F" />
                        <path d="M23 4.28516H1C0.447715 4.28516 0 4.62094 0 5.03516C0 5.44937 0.447715 5.78516 1 5.78516H23C23.5523 5.78516 24 5.44937 24 5.03516C24 4.62094 23.5523 4.28516 23 4.28516Z" fill="#AC8E3F" />
                        <path d="M23 18.2852H1C0.447715 18.2852 0 18.6209 0 19.0352C0 19.4494 0.447715 19.7852 1 19.7852H23C23.5523 19.7852 24 19.4494 24 19.0352C24 18.6209 23.5523 18.2852 23 18.2852Z" fill="#AC8E3F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2612_374">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.285156)" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`hidden lg:flex flex-1 flex-row justify-self-center transition duration-150 ease-in-out md:visible h-full
`}
            >

              <ul
                className={`flex  mb-2 items-center justify-center cursor-pointer space-x-12 md:space-x-[50px] xl:space-x-[70px] ${antonio.className}`}
              >
                <li className={`text-[#FFF] text-[16px] md:text-[24px] font-[400] relative zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
                  <a id="homenav" className={`${antonio.className}`} scroll={true} onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("hero").offsetTop - 130,
                      left: 0,
                    });
                  }}> Home
                  </a>
                </li>
                <li className={`text-[#FFF] text-center text-[16px] md:text-[24px] font-[400] relative cursor-pointer zoomin hover:text-[#AC8E3F] whitespace-nowrap ${antonio.className}`}>
                  <a id="quienessomosnav" scroll={true} onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("quienessomos").offsetTop - 55,
                      left: 0,
                    });
                  }}>Quiénes somos

                  </a>

                </li>
                <li className={`text-[#FFF] text-center text-[16px] md:text-[24px] font-[400] relative cursor-pointer zoomin hover:text-[#AC8E3F] whitespace-nowrap ${antonio.className}`}>
                  <a id="queofrecemosnav" scroll={true} onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("queofrecemoscards").offsetTop - 100,
                      left: 0,
                    });
                  }}>Qué ofrecemos

                  </a>

                </li>
                <li className={`text-[#FFF] text-[16px] md:text-[24px] font-[400] relative cursor-pointer zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
                  <a id="recursosnav" scroll={true} onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("herramientas").offsetTop - 55,
                      left: 0,
                    });
                  }}>Recursos

                  </a>

                </li>
                <li className={`text-[#FFF] text-[16px] md:text-[24px] font-[400] relative cursor-pointer zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
                  <a id="contactnav" scroll={true} onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("contacto").offsetTop + 110,
                      left: 0,
                    });
                  }}>Contacto

                  </a>


                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
        <div
          className={` ${navbar
            ? "rounded-b-lg flex flex-column justify-center z-50 absolute top-[63px] right-0  h-[16rem] bg-black/95  w-[45%]"
            : "hidden"
            } `}
        >

          {/*********************************************************************version mobile**********************************************/}





          <ul className={` font-[600] mt-5 space-y-8 text-left`}>

            <li className={` text-[#FFF] text-[16px] relative zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
              <a scroll={true} onClick={() => {
                window.scrollTo({
                  top: document.getElementById("quienessomos").offsetTop - 55,
                  left: 0,
                });
                setNavbar(false)
              }}>Quiénes somos

              </a>

            </li>
            <li className={` text-[#FFF]  text-[16px] relative zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
              <a scroll={true} onClick={() => {
                window.scrollTo({
                  top: document.getElementById("queofrecemoscards").offsetTop - 50,
                  left: 0,
                });
                setNavbar(false)

              }}>Qué ofrecemos

              </a>

            </li>
            <li className={` text-[#FFF] text-[16px] relative zoomin hover:text-[#AC8E3F] ${antonio.className}`}>
              <a scroll={true} onClick={() => {
                window.scrollTo({
                  top: document.getElementById("recursos").offsetTop + 260,
                  left: 0,
                });
                setNavbar(false)

              }}>Recursos

              </a>

            </li>
            <li className={` text-[#FFF] text-[16px] relative zoomin hover:text-[#AC8E3F] ${antonio.className}`}>

              <a scroll={true} onClick={() => {
                window.scrollTo({
                  top: document.getElementById("contactomobile").offsetTop + 50,
                  left: 0,
                });
                setNavbar(false)

              }}>Contacto

              </a>


            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

