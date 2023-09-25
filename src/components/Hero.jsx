
"use client";
import React, { useState, useEffect } from 'react';
import { Antonio, Open_Sans } from 'next/font/google';
import { useRef } from 'react';
import StartModal from './modals/StartModal'

const antonio = Antonio({
  weight: ["500", "600", "700"],
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


const Hero = () => {
  const [selectedBox, setSelectedBox] = useState(0)
  const [selectedBox2, setSelectedBox2] = useState(2)
  const [started, setStarted] = useState(false)
  const [started2, setStarted2] = useState(false)
  const slideshowContainerRef = useRef(null);
  const scrollDirectionRef = useRef('left');
  const [showModal, setShowModal] = useState(false);
  const [hide, setHide] = useState(true);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        let element = document.getElementById("homenav")
        element.style.color = "#AC9E3F"
        element.style.transition = "color 500ms ease-in-out";
      } else {
        document.getElementById("homenav").style.color = "white"
      }
    }, {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.3,
    });
    const div = document.querySelector("#hero");
    observer.observe(div);


  }, [])



  function closeModal() {

    setShowModal(false)
    document.body.style.overflowY = "auto"
    let circles = document.getElementsByClassName("circle")
    circles[0].classList.add("circulo")
    circles[1].classList.add("circulo")
    circles[2].classList.add("circulo")



  }


  useEffect(() => {
    setShowModal(true)
  }, [])


  useEffect(() => {

    const intervalId = setInterval(() => {


      if (selectedBox === 1) {
        setSelectedBox(0);
      } else {
        setSelectedBox(1);
      }
    }, 14000);
    return () => clearInterval(intervalId);
  }, [selectedBox]);

  useEffect(() => {


    const intervalId = setInterval(() => {
      if (selectedBox2 === 0) {
        setSelectedBox2(1)
      } else if (selectedBox2 === 1) {
        setSelectedBox2(2)
      } else {
        setSelectedBox2(0)
      }
    }, 7700);

    return () => clearInterval(intervalId);
  }, [selectedBox2]);

  useEffect(() => {

  }, [])



  useEffect(() => {
    const slideshowContainer = slideshowContainerRef.current;
    const slideshowWidth = slideshowContainer.scrollWidth;
    const slideshowClientWidth = slideshowContainer.clientWidth;
    slideshowContainer.scrollLeft = slideshowContainer.scrollWidth

    slideshowContainer.addEventListener("scroll", function() {
      const scrollLeft = slideshowContainer.scrollLeft;
      // Calcular el porcentaje del scroll
      const scrollPercent = (scrollLeft / (slideshowWidth - slideshowClientWidth)) * 100;

      // Aparecer la primera frase del texto 1 si el porcentaje del scroll es menor al 50%


      // Aparecer la primera frase del texto 2 si el porcentaje del scroll es mayor al 50%
      if (scrollPercent <= 35 && scrollPercent >= 20) {
        setSelectedBox(0)
        setSelectedBox2(0)

      }

      if (scrollPercent <= 15) {
        setStarted2(true)

      }


    });
    const scrollSlideshow = () => {
      if (scrollDirectionRef.current === 'right') {
        slideshowContainer.scrollLeft += 1;
      } else {
        slideshowContainer.scrollLeft -= 1;
      }

      if (
        scrollDirectionRef.current === 'right' &&
        slideshowContainer.scrollLeft >=
        slideshowContainer.scrollWidth - slideshowContainer.clientWidth
      ) {

        setTimeout(() => {
          scrollDirectionRef.current = 'left';
        }, 18000);
      } else if (scrollDirectionRef.current === 'left' && slideshowContainer.scrollLeft === 0) {
        setTimeout(() => {
          scrollDirectionRef.current = 'right';

        }, 18000);
      }
    };





    setTimeout(() => {
      const intervalId = setInterval(scrollSlideshow, 1); // Velocidad de desplazamiento lento.
      setStarted(true)
      return () => clearInterval(intervalId);

    }, 6000);
  }, []);


  return (

    <div id="hero" className="w-full h-screen relative bg-[#121212] flex justify-center items-center">

      <StartModal onClose={() => closeModal()} fonts={{ antonio, openSans }} isVisible={showModal} message={true} />
      <div id="circulos">
        <div className='circulo circle absolute border-2 rounded-full w-[124px] z-0 md:w-[150px] md:h-[150px] h-[124px] bottom-[75%] lg:bottom-[75%] xl:bottom-[75%] left-[72%] md:left-[80%] lg:left-[89%] xl:left-[85%] md:bottom-[60%] border-[#AC8E3F] overflow-hidden'></div>
        <div className='circulo circle absolute border-2 rounded-full w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] bottom-[8%]  md:bottom-[26%] xl:bottom-[40%] right-[80%] md:left-[0%] lg:left-[-15%] xl:left-[-7%] border-[#AC8E3F] '></div>
        <div className='circulo circle absolute border-2 rounded-full hidden md:block w-[122px] h-[122px] md:bottom-[15%] xl:bottom-[28%] md:left-[77%] lg:left-[80%] border-[#AC8E3F] '></div>

      </div>


      <div ref={slideshowContainerRef} id="slideshow" className=" border- overflow-y-hidden  mb-24 flex justify-between overflow-x-hidden border-white h-[190px] w-[230px] md:w-[693px] md:h-[420px]" >
        <div id="scrollpanel" className={` ${antonio.className} w-[500px] md:w-[1500px] flex `} >

          <div className=' relative text1 border- border-sky-50 w-[260px] md:w-[1500px]'>

            <div className={`  ${selectedBox === 0 ? 'fade-in' : 'fade-out'} ${!started && `hidden`} absolute`}>
              <p className={`text-[24px] md:text-[72px] leading-9 md:leading-[75px] w-[240px] font-[700] text-white `}>
                Profesionales, Emprendedores & Freelancers
              </p>
              <p className=' text-[16px] md:text-[48px] text-white md:leading-[60px]'>
                Ayudamos a transformar sus <br />servicios en un negocio digital.
              </p>
            </div>
            <div className={` ${selectedBox === 1 ? 'fade-in' : 'fade-out'} ${!started && 'hidden'} absolute text-white`}>
              <h2 className='text-[32px] md:text-[96px] font-[700] '>PYMES</h2>
              <p className='font-[300] text-[16px] md:text-[54px] mt-2'>Te acompañamos a desarrollar y <br />planificar el crecimiento de tu <br />negocio.</p>
            </div>


          </div>

          <div className=" relative text2 w-[200px] md:w-[1200px] ">

            <div className={` absolute ${selectedBox2 === 2 ? 'fade-in' : 'fade-out'}  leading-9 md:leading-[110px]`}>
              <h2 className=' text-[24px] md:text-[72px] font-[700] text-white'>
                COMENZÁ HOY A CREAR  <br></br>LA EMPRESA QUE <span className='text-[32px] md:text-[96px] '><br />SOÑÁS.</span>
              </h2>
            </div>

            <div className={`absolute ${selectedBox2 === 0 ? 'fade-in' : 'fade-out'} ${!started2 && 'hidden'} `}>
              <h2 className=' text-[24px] md:text-[72px] font-[700] text-white'>
                Potenciá el<br /> crecimiento de tu <br />empresa.
              </h2>
            </div>

            <div className={`absolute ${!started2 && 'hidden'} ${selectedBox2 === 1 ? 'fade-in' : 'fade-out'} leading-6 md:leading-[60px] `}>
              <h2 className=' text-white font-[400] text-[16px] md:text-[50px]'>Apostamos a <span className='font-[700]'>CREER</span> que podemos <br />CREAR herramientas que ayuden a CRECER tus sueños todo el año,<br />
              </h2>
              <p className='text-white mt-5 md:text-[50px]'>
                los <span className='text-[32px] md:text-[80px]'>365</span> días.                </p>
            </div>

          </div>


          <div className='p-3'></div>
        </div>


      </div>


    </div >
  );
};

export default Hero;



