"use client";
import "animate.css";
import "../styles/globals.css";
import { Antonio, Open_Sans } from "next/font/google";
import { useEffect } from "react";

const antonio = Antonio({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function QueOfrecemos() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        let element = document.getElementById("queofrecemosnav")
        element.style.color = "#AC8E3F"
        element.style.transition = "color 500ms ease-in-out";
      } else {
        document.getElementById("queofrecemosnav").style.color = "white"
      }
    }, {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.3,
    });
    const div = document.querySelector("#queofrecemos");
    observer.observe(div);


  }, [])

  return (
    <div className="flex w-full md:h-[1090px] xl:h-[1187px] flex-col justify-center bg-[#F4F4F4] text-center" id="queofrecemos">
      <div className="relative mt-[25%] md:mt-[0%] md:top-[1.1%] justify-center px-[84.5px] md:pb-14 pb-24 xl:pb-24">
        <h2
          className={`font-700 text-[32px] leading-[41px] text-[#000000] md:text-[40px] xl:text-[60px] md:leading-[73px] ${antonio.className}`}
        >
          Qué ofrecemos
        </h2>
      </div>
      <div id="queofrecemoscards"
        className={`mt-[-27px] md:mt-6 md:relative md:bottom-[2%] px-4 text-black ${openSans.className} mx-auto gap-6 md:grid md:grid-cols-2`}
      >
        <div
          className={`flex flex-col items-center justify-center text-center ${openSans.className}`}
        >
          <div className="h-[249.82px] w-[328px] rounded-[14.11px] bg-[#FFFFFF]  xl:h-[425px] xl:w-[558px] xl:rounded-[24px]">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-between py-[30px] text-left xl:h-[425px] xl:w-[279px]">
                <div className="ml-[14px] xl:ml-[24px] mb-[25.9px] xl:mt-[30px] xl:h-[71px] xl:w-[255px] xl:pb-[40px]">
                  <h3 className="h-[19px] w-[134px] text-[16px] font-[700] leading-[19.2px] text-[#AC8E3F] xl:h-[36px] xl:w-[250px] xl:text-3xl xl:leading-[36px]">
                    Consultoría 1 a 1 <br />
                  </h3>
                  <span className="h-[14px] w-[146.95px] text-[12px] font-[600] leading-[14.4px] text-[#AC8E3F] xl:h-[24px] xl:w-[250px] xl:text-[20px] xl:leading-[24px]">
                    Pack de 6 hrs
                  </span>
                </div>
                <div className="ml-[14px] mb-[27.88px] xl:mb-[30px] xl:ml-[24px] h-[70px] w-[150px] xl:h-[120px] xl:w-[255px] ">
                  <p className="font-400 font-[#353535] text-[12px] leading-[14.4px] xl:text-[20px] xl:leading-[24px]">
                    A través de nuestra asesoría personalizada, diseñamos un
                    plan específico para tus necesidades.
                  </p>
                </div>
                <div className="relative bottom-[2.75%] xl:bottom-[0%] xl:mt-[56px] flex items-center justify-center xl:text-center mt-4 mb-[18px] xl:mb-[30px]">
                  <button className="light-box-shadow h-[26.88px] w-[89.04px] gap-[10.01px] rounded-[5px] border-[0.31px] border-solid border-black bg-[#FFFFFF] p-[1.88px] xl:h-[48px] xl:w-[159px] xl:gap-[17.87px] xl:rounded-[8.84px] xl:border-[0.56px] xl:p-[3.35px]">
                    <a
                      className="flex flex-col items-center justify-center"
                      href="https://www.canva.com/design/DAFuRO2HhLs/28-_yzIxGG-4GdlvYPRYiQ/view?utm_content=DAFuRO2HhLs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                      target="_blank"
                    >
                      <span className="h-[12px] w-[46px] text-[8.76px] font-[700] leading-[11.93px] text-[#000000] xl:h-[21px] xl:w-[132px] xl:text-[15.64px] xl:leading-[21.3px]">
                        Saber más
                      </span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="pt-20px">
                <img
                  className="h-[250px] w-[170px] rounded-[0px_14px_14px_0px] xl:h-[425px] xl:w-[280px] xl:rounded-[0px_24px_24px_0px]"
                  src="/dos-mujeres-empresariales-desk.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center text-center mt-[11.76px] md:mt-0 xl:mt-[0px] ${openSans.className}`}
        >
          <div className="h-[249.82px] w-[328px] rounded-[14.11px] bg-[#FFFFFF] xl:left-[150px] xl:top-[3128px] xl:h-[425px] xl:w-[558px] xl:rounded-[24px]">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-between py-[30px] text-left xl:h-[425px] xl:w-[279px]">
                <div className="ml-[14px] xl:ml-[24px] xl:mt-[30px] xl:h-[71px] xl:w-[255px] xl:pb-[40px]">
                  <h3 className="h-[19px] w-[134px] text-[16px] font-[700] leading-[19.2px] text-[#AC8E3F] xl:h-[36px] xl:w-[121px] xl:text-3xl xl:leading-[36px]">
                    Starters <br />
                  </h3>
                  <span className="h-[14px] w-[146.95px] text-[12px] font-[600] leading-[14.4px] text-[#AC8E3F] xl:h-[24px] xl:w-[250px] xl:text-[20px] xl:leading-[24px]">
                    Duración 4 meses.
                  </span>
                </div>
                <div className="ml-[14px] mb-[25.5px] xl:mb-[30px] xl:ml-[24px] h-[112px] w-[150px] xl:h-[192px] xl:w-[255px]">
                  <p className="font-400 font-[#353535] text-[12px] leading-[14.4px] xl:text-[20px] xl:leading-[24px]">
                    Con nuestro programa para transformar tus servicios en un
                    negocio digital podrás profesionalizar la propuesta de valor
                    y conectar con los primeros clientes.
                  </p>
                </div>
                <div className="xl:mt-[10px] flex items-center justify-center xl:text-center mb-[18px]">
                  <button className="light-box-shadow h-[26.88px] w-[89.04px] gap-[10.01px] rounded-[5px] border-[0.31px] border-solid border-black bg-[#FFFFFF] p-[1.88px] xl:h-[48px] xl:w-[159px] xl:gap-[17.87px] xl:rounded-[8.84px] xl:border-[0.56px] xl:p-[3.35px]">
                    <a
                      className="flex flex-col items-center justify-center"
                      href="https://www.canva.com/design/DAFsRPTAOZk/SXDEKgFf0KchcsvUJ41mVA/view?utm_content=DAFsRPTAOZk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                      target="_blank"
                    >
                      <span className="h-[12px] w-[46px] text-[8.76px] font-[700] leading-[11.93px] text-[#000000] xl:h-[21px] xl:w-[132px] xl:text-[15.64px] xl:leading-[21.3px]">
                        Saber más
                      </span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="pt-20px">
                <img
                  className="h-[250px] w-[170px] rounded-[0px_14px_14px_0px] xl:h-[425px] xl:w-[280px] xl:rounded-[0px_24px_24px_0px]"
                  src="/mujer-telefono-desk.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative xl:bottom-[2%] flex flex-col items-center justify-center text-center mt-[11.76px] xl:mt-[24px] ${openSans.className}`}
      >
        <div className="h-[249.82px] w-[328px] rounded-[14.11px] bg-[#FFFFFF] xl:left-[150px] xl:h-[425px] xl:w-[558px] xl:rounded-[24px]">
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-between py-[30px] text-left xl:h-[425px] xl:w-[279px]">
              <div className="ml-[14px] xl:ml-[24px] xl:mt-[30px] xl:h-[71px] xl:w-[255px] xl:pb-[40px]">
                <h3 className="h-[19px] w-[134px] text-[16px] font-[700] leading-[19.2px] text-[#AC8E3F] xl:h-[36px] xl:w-[198px] xl:text-3xl xl:leading-[36px]">
                  Total Advisor
                </h3>
              </div>
              <div className="ml-[14px] mb-[18px] xl:mb-[30px] xl:ml-[24px] h-[112px] w-[150px] xl:h-[192px] xl:w-[255px] ">
                <p className="font-400 font-[#353535] text-[12px] leading-[14.4px] xl:text-[20px] xl:leading-[24px]">
                  Nuestro equipo te acompañará desde la elaboración de
                  materiales hasta el seguimiento de métricas y presentaciones.
                  Atraé los clientes que tu emprendimiento merece con nuestra
                  ayuda.
                </p>
              </div>
              <div className="relative bottom-[-10%] xl:bottom-[1.5%] xl:mt-[14px] flex items-center justify-center text-center mb-[18px] xl:mb-[30px] mt-[7.5px]">
                <button className="light-box-shadow h-[26.88px] w-[89.04px] gap-[10.01px] rounded-[5px] border-[0.31px] border-solid border-black bg-[#FFFFFF] p-[1.88px] xl:h-[48px] xl:w-[159px] xl:gap-[17.87px] xl:rounded-[8.84px] xl:border-[0.56px] xl:p-[3.35px]">
                  <a
                    className="flex flex-col items-center justify-center"
                    href="https://www.canva.com/design/DAFujuONyc4/PTwPkQJbZVQHvWC3GUURhw/view?utm_content=DAFujuONyc4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                    target="_blank"
                  >
                    <span className="h-[12px] w-[46px] text-[8.76px] font-[700] leading-[11.93px] text-[#000000] xl:h-[21px] xl:w-[132px] xl:text-[15.64px] xl:leading-[21.3px]">
                      Saber más
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div className="pt-20px">
              <img
                className="h-[250px] w-[170px] rounded-[0px_14px_14px_0px] xl:h-[425px] xl:w-[280px] xl:rounded-[0px_24px_24px_0px]"
                src="/reunion-desk.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
