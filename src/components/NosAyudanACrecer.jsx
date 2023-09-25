import React from 'react'
import "../styles/globals.css";
import { Antonio } from "next/font/google";

const antonio = Antonio({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

const NosAyudanACrecer = () => {
  return (
    <div className=' text-black h-[600px] md:h-screen bg-cover bg-center bg-[#f4f4f4] px-10 md:px-24 m-auto flex flex-col justify-center gap-20 md:gap-16'>
        <h2 className={`text-[2rem] md:text-[60px] ${antonio.className} font-bold text-center`}>Nuestros aliados</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-14 justify-center'>
            <img className='m-auto order-1 md:order-1 w-[139.88px] md:w-[290px] h-[26.04px] md:h-[54px]' src="/fundacion-color.png" alt="" />
            <img className='m-auto order-3 md:order-2 w-[91px] md:w-[188px] h-[37px] md:h-[77px]' src="/kame-house.png" alt="" />
            <img className='m-auto order-6 md:order-3 w-[97.43px] md:w-[202px] h-[53.99px] md:h-[112px]' src="/daniela-calabria.png" alt="" />
            <img className='m-auto order-2 md:order-7 w-[116px] md:w-[240px] h-[30px] md:h-[62px]' src="/triba-consulting.png" alt="" />
            <img className='m-auto order-4 md:order-5 w-[128px] md:w-[275px] h-[36px] md:h-[75px]' src="/pulso.png" alt="" />
            <img className='m-auto order-5 md:order-6 w-[90px] md:w-[186px] h-[56px] md:h-[116px]' src="/alejandra-cordara.png" alt="" />
            <img className='m-auto order-7 md:order-4 w-[40px] md:w-[116.04px] h-[40px] md:h-[116.04px]' src="/redondo-rojo.png" alt="" />
            <img className='m-auto order-8 md:order-8 w-[68px] md:w-[149px] h-[38px] md:h-[82px]' src="/logo2.png" alt="" />
        </div>
    </div>
  )
}

export default NosAyudanACrecer