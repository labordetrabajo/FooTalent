"use client";
import "animate.css";
import "../styles/globals.css";
import { Antonio, Open_Sans, Bebas_Neue } from "next/font/google";
import { useEffect } from "react";

const antonio = Antonio({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function QuienesSomos() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        let element = document.getElementById("quienessomosnav")
        element.style.color = "#AC8E3F"
        element.style.transition = "color 500ms ease-in-out";
      } else {
        document.getElementById("quienessomosnav").style.color = "white"
      }
    }, {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.3,
    });
    const div = document.querySelector("#quienessomos");
    observer.observe(div);


  }, [])

  return (
    <div id="quienessomos" className="bg-[#F4F4F4] mt-[96px] lg:mt-[175.59px]">
      <div className="items-center">
        <div className="text-center justify-center pt-[100px] lg:pt-[80px]">
          <h2 className="text-3xl md:text-5xl lg:text-6xl lg:w-[641.5px] h-[70px] lg:h-[128px] mx-auto">
            <span className={`text-[#000000] ${antonio.className}`}>
              Quiénes Somos
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#000000] p-6 lg:py-12 lg:px-80 w-full h-[361px] lg:w-full lg:h-[232px]">
          <p
            className={`text-[18px] md:text-[22px] lg:text-[26px] font-[400] lg:font-[600] text-center text-[#FFFFFF] leading-[24.51px] lg:leading-[35.41px] ${openSans.className}`}
          >
            Somos una{" "}
            <span className="text-[#AC8E3F]">consultora de negocios</span>{" "}
            especializada en comunicaciones que asesora a personas emprendedoras,
            profesionales y freelancers para que logren expandirse.
          </p>
        </div>
        <div className="flex justify-center text-center lg:pb-12">
          <img
            className="pt-[40px] pb-[40px] lg:pt-[62.34px] lg:pb-[20.06px]"
            src="/Group 236.png"
            alt="groupimage"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#000000] p-6 lg:py-12 lg:px-80 w-full h-[361px] lg:w-full lg:h-[232px]">
        <p
          className={`text-[#FFFFFF] text-[18px]  md:text-[22px] lg:text-[26px] font-[400] lg:font-[600] leading-[27px] lg:leading-[39px] text-center ${openSans.className}`}
        >
          Ayudamos a{" "}
          <span className="text-[#AC8E3F]">
            profesionales, emprendedores y PYMES
          </span>{" "}
          a estructurar sus proyectos, construir su identidad de marca con el
          objetivo de incrementar sus ventas.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-full lg:w-full h-[146px] lg:h-[385px] pt-[112px] pb-[112px] lg:p-6 lg:mt-[180px] mt-24">
        <p className="hidden lg:block bg-[#F4F4F4] font-[600] text-[24px] lg:text-[48px] leading-[33px] lg:leading-[65.37px] text-[#000000]">
          Te acompañamos, con <br /> un plan a medida, en <br /> cada momento{" "}
          <br /> importante de tu <br />
          proyecto
        </p>
        <p className="block lg:hidden bg-[#F4F4F4] font-[600] text-[24px] lg:text-[48px] leading-[33px] lg:leading-[65.37px] text-[#000000]">
          Te acompañamos, con un <br />
          plan a medida, en cada <br /> momento importante de <br /> tu proyecto
        </p>
      </div>
    </div>
  );
}


