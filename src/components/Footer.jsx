"use client";
import React from "react";
import "../styles/globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
import { Antonio } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  weight: ["700"],
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

function Footer() {
  return (
    <div
      className={`{flex  h-[300px]  h-[400px]  items-center justify-center bg-black ${open_sans.className}`}
    >
      <div className="hidden text-center md:block">
        <div className="s m-4 inline-block rounded-lg bg-black p-4">
          <div className="text-left text-[22px] font-semibold text-[#AC8E3F] ">
            <a
              className="cursor-pointer"
              scroll={true}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("queofrecemoscards").offsetTop - 100,
                  left: 0,
                });
              }}
            >
              Qué ofrecemos
            </a>
            <ul className="mt-2 text-left">
              <li className="mb-3 text-[18px] font-[400] text-white">
                <a
                  href="https://www.canva.com/design/DAFuRO2HhLs/28-_yzIxGG-4GdlvYPRYiQ/view?utm_content=DAFuRO2HhLs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink "
                  target="_blank"
                >
                  <p className="font-[400] opacity-70"> Consultoría 1 a 1</p>
                </a>
              </li>
              <li className="mb-3 text-[18px] font-[400] text-white opacity-70">
                <a
                  href="https://www.canva.com/design/DAFsRPTAOZk/SXDEKgFf0KchcsvUJ41mVA/view?utm_content=DAFsRPTAOZk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  Starters
                </a>
              </li>
              <li className="mb-3 text-[18px] font-[400] text-white opacity-70">
                <a
                  href="https://www.canva.com/design/DAFujuONyc4/PTwPkQJbZVQHvWC3GUURhw/view?utm_content=DAFujuONyc4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  Total Advisor
                </a>
              </li>
              <li className="mb-3 text-[18px] font-[400] text-white opacity-70">
                <a href="# "></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-4 inline-block  rounded-lg bg-black p-4 ">
          <div className=" text-[22px] font-semibold text-[#AC8E3F]">
            <a
              className="cursor-pointer"
              scroll={true}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("recursos").offsetTop + 180,
                  left: 0,
                });
              }}
            >
              Recursos
            </a>

            <ul className="mt-2 text-left">
              <li className="mb-3 text-[18px] font-[400] text-white opacity-70">
                <a
                  className="cursor-pointer"
                  scroll={true}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("recursos").offsetTop + 180,
                      left: 0,
                    });
                  }}
                >
                  Podcast
                </a>
              </li>
              <li className="mb-3 text-[18px] font-[400] text-white opacity-70">
                <a
                  className="cursor-pointer"
                  scroll={true}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("recursos").offsetTop + 180,
                      left: 0,
                    });
                  }}
                >
                  Newsletter
                </a>
              </li>
              <li className="mb-3 text-[17px] text-black">
                <p>.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-4 inline-block  rounded-lg bg-black p-4 ">
          <div className="text-[22px] text-xl font-semibold text-[#AC8E3F]">
            <a
              className="cursor-pointer"
              scroll={true}
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById("quienessomos").offsetTop - 55,
                  left: 0,
                });
              }}
            >
              <p className="text-[22px]"> Quiénes somos</p>
            </a>

            <ul className="mt-2 text-left">
              <li className="mb-3 text-[18px] text-black ">
                <p>.</p>
              </li>
              <li className="mb-3 text-[32px] text-black">
                <p>.</p>
              </li>
              <li className="mb-3 text-[18px] text-black">
                <p>.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="  flex justify-center rounded-lg bg-black text-center ">
        <div className="  mr-8 hidden text-[18px] font-[400] text-white md:block ">
          <p>
            {" "}
            <br />{" "}
          </p>
          <p> Comprometidos con los objetivos del desarrollo sostenible:</p>
        </div>

        <div className="mr-[23px] flex hidden h-[88.1px] w-[75px] flex-col items-center justify-center rounded-lg border bg-black px-3 pb-2 text-center md:block">
          <span className="text-[14px] text-white">04</span>
          <p className=" text-[8px] font-[400] text-white ">
            EDUCACIÓN <br />
            DE CALIDAD
          </p>
          <img
            src="/recibido.svg"
            alt="Recibido"
            className="mx-auto mt-1 h-[25px] w-full"
          />
        </div>

        <div className="  flex hidden h-[88.1px] w-[75px] flex-col items-center justify-center rounded-lg border bg-black px-2 pb-2 text-center md:block">
          <span className="text-[14px] text-white">05</span>
          <p className=" text-[8px] font-[400] text-white">
            IGUALDAD
            <br />
            DE GÉNERO
          </p>
          <img
            src="/group.svg"
            alt="Recibido"
            className="mx-auto mt-1 h-[25px] w-full"
          />
        </div>
      </div>
      <div className="flex hidden items-center bg-black md:block ">
        <div className=" hidden items-center justify-center bg-black pt-20 md:flex md:items-center">
          <p
            className={`pr-8 text-center text-[16px] text-white md:text-[16px] ${anton.className}`}
          >
            <span className="text-[16px] font-[400] md:text-[16px] ">
              PULSO
            </span>{" "}
            <br />
            <span className="text-[16px] font-[400] md:text-[16px]">365</span>
          </p>
          <p className="ml-4 text-[18px] tracking-[5px]   text-white">
            consultora de negocios
          </p>
        </div>
        <div>
          <p
            className={` py-6 text-center text-[18px] font-[400] text-white opacity-50 ${inter.className}`}
          >
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
      {/************************************************ version mobile**************************************************************** */}
      <div>
        <div className="bg-black text-center md:hidden ">
          <div className="rounded-lg bg-black p-4">
            <div className="text-left text-[14px] font-semibold text-[#AC8E3F]">
              <a
                className="cursor-pointer"
                scroll={true}
                onClick={() => {
                  window.scrollTo({
                    top:
                      document.getElementById("queofrecemoscards").offsetTop - 50,
                    left: 0,
                  });
                }}
              >
                Qué ofrecemos
              </a>
            </div>
            <ul className="mt-2 text-left">
              <li className="mb-3 text-[12px] font-[400] text-white opacity-70">
                <a
                  href="https://www.canva.com/design/DAFuRO2HhLs/28-_yzIxGG-4GdlvYPRYiQ/view?utm_content=DAFuRO2HhLs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  Consultoría 1 a 1
                </a>
              </li>
              <li className="mb-3 text-[12px] font-[400] text-white opacity-70">
                <a
                  href="https://www.canva.com/design/DAFsRPTAOZk/SXDEKgFf0KchcsvUJ41mVA/view?utm_content=DAFsRPTAOZk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  Starters
                </a>
              </li>
              <li className="text-[12px] font-[400] text-white  opacity-70">
                <a
                  href="https://www.canva.com/design/DAFujuONyc4/PTwPkQJbZVQHvWC3GUURhw/view?utm_content=DAFujuONyc4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  Total Advisor
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-black p-4">
            <div className="bg-black text-left text-[14px] font-semibold text-[#AC8E3F]">
              <a
                className="cursor-pointer"
                scroll={true}
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("recursos").offsetTop + 260,
                    left: 0,
                  });
                }}
              >
                Recursos
              </a>
            </div>
            <ul className="mt-2 text-left">
              <li className="mb-3 text-[12px] font-[400] text-white opacity-70">
                <a
                  className="cursor-pointer"
                  scroll={true}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("recursos").offsetTop + 260,
                      left: 0,
                    });
                  }}
                >
                  Podcast
                </a>
              </li>
              <li className="text-[12px] font-[400] text-white opacity-70">
                <a
                  className="cursor-pointer"
                  scroll={true}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("recursos").offsetTop + 260,
                      left: 0,
                    });
                  }}
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-black p-4">
            <div className="bg-black text-left text-[14px] font-semibold text-[#AC8E3F]">
              <a
                className="cursor-pointer"
                scroll={true}
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("quienessomos").offsetTop - 55,
                    left: 0,
                  });
                }}
              >
                <p className="text-[14px]"> Quiénes somos</p>
              </a>
            </div>
            <ul className=" text-left">
              <li className="mb-3 text-[12px] text-black">
                <p>.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="  bg-black bg-black text-center md:hidden ">
          <div className="mb-4 text-[12px] font-[400] text-white">
            <p>
              <br />
            </p>
            <p className={`${open_sans.className}`}>
              Comprometidos con los objetivos <br />
              del desarrollo sostenible de la ONU:
            </p>
          </div>
          <div className="mb-3 mr-8 mt-3 inline-block rounded-lg border bg-black px-2 pb-1 text-center md:hidden">
            <span className="text-[9px] text-white">04</span>
            <p className="text-[6px] font-[400] text-white ">
              EDUCACIÓN
              <br />
              DE CALIDAD
            </p>
            <img
              src="/recibido.svg"
              alt="Recibido"
              className="mt-1 h-[25px] w-[34px]"
            />
          </div>
          <div className="inline-block rounded-lg border bg-black px-2 pb-1 text-center md:hidden">
            <span className="text-[9px] text-white">05</span>
            <p className="text-[6px] font-[400] text-white ">
              IGUALDAD
              <br />
              DE GÉNERO
            </p>
            <img
              src="/group.svg"
              alt="Recibido"
              className="mt-1 h-[25px] w-[34px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[180px] bg-black py-6 md:hidden ">
        <p
          className={`text-center text-[16px] font-[400] text-white md:text-[32px] ${open_sans.className}`}
        >
          PULSO
          <span className="text-[16px] font-[800] md:text-[32px]">365</span>
        </p>
        <p
          className={`text-center text-[12px] tracking-[5px] text-white ${open_sans.className}`}
        >
          {" "}
          consultora de negocios{" "}
        </p>

        <p className="m py-6 text-center text-[10px] font-[400] text-white opacity-50 ">
          {" "}
          © 2023 All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
