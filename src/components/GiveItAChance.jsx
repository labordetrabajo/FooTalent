import React from 'react'
import "animate.css";
import "../styles/globals.css";
import { Inter, Bebas_Neue, Antonio, Open_Sans } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const GiveItAChance = () => {

  return (
    <div className={`h-[300px] md:h-[600px] m-auto pt-10 flex flex-col bg-cover bg-center justify-center gap-12 md:gap-20 px-14 text-center text-[1.5rem] font-normal ${inter.className}`} style={{
      backgroundColor: "#F6F4F4",
    }}>
      <div className={`${antonio.className} hidden xl:block text-black md:pb-2 md:px-52 text-[32px] lg:text-[75px] font-bold`}>
        <p>¡Hagamos cosas increíbles</p>
        <p>juntos!</p>
      </div>
      <div className={`${antonio.className} block xl:hidden text-black md:pb-2 md:px-52 text-[32px] lg:text-[75px] font-bold`}>
        <p>¡Hagamos cosas</p>
        <p>increíbles juntos!</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-20 mx-auto'>
        {/* <button className={`w-[160px] md:w-[291px] h-[45px] md:h-[87px] py-2 ${openSans.className} text-black bg-white rounded-[0.5rem] text-base md:text-[1.5rem] mx-auto cursor-pointer border border-black order-2 md:order-1`} style={{boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)"}}>Saber más</button> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSctjrZtVWc3k6eugQO6GwH3Ycnc_YYZwmlmMiPGdiz2lBkw/viewform" target="_blank">
          <button className={`w-[160px] md:w-[291px] font-semibold h-[45px] md:h-[87px] py-2 ${openSans.className} text-white bg-black rounded-[10px] md:rounded-[16px] text-base md:text-[1.5rem] mx-auto mt-10 cursor-pointer order-1 md:order-2`}>
            Agendar reunión
          </button>

        </a>
      </div>
      {/* <div className='md:text-[]'>
                <p>Nos comprometemos a</p>
                <p>ser la guía que te</p>
                <p>acompañe en cada</p>
                <p>decisión</p>
            </div> */}


    </div>

  )
}


export default GiveItAChance;
