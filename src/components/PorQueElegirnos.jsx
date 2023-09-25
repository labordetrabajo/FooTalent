"use client";
import "animate.css";
import "../styles/globals.css";
import { Antonio, Open_Sans } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function PorQueElegirnos() {
  const testimonios = [
    {
      id: 1,
      cliente: "Raúl Alberici",
      empresa: "Qivli",
      estrellas: 5,
      comentario:
        '"Memi fue la persona que me puso los pies en la tierra y me mostró mis errores. Me explicó los procesos y los tiempos del emprendedurismo  y le puso sentido a mi pitch! Genia total! siempre agradecido!".',
    },
    {
      id: 2,
      cliente: "Sabrina Ducca",
      empresa: "DO ing",
      estrellas: 5,
      comentario:
        '"La consultoría nos permitió explorar y desarrollar un nuevo servicio con un método iterativo. Pero el gran diferencial es la calidad y calidez humana. La pregunta concreta pero no carente de sentimiento. Encontramos el camino al crecimiento que buscábamos pero sin perder nuestra esencia. Sin duda vamos a seguir trabajando juntos".',
    },
    {
      id: 3,
      cliente: "Claudia Montes",
      empresa: "Espacio Edén",
      estrellas: 5,
      comentario:
        '"El asesoramiento me permitió una claridad en mi misión esencial profesional. También explorar mi potencial y las posibilidades de crecimiento del proyecto, conectándome con mi futuro. La tutoría generó en mí el descubrimiento de mi sentir y acceder a herramientas concretas para mi emprendimiento".',
    },
    {
      id: 4,
      cliente: "Raquel Bocadi",
      empresa: "Crece Turismo",
      estrellas: 4,
      comentario:
        '"Consulté por una idea de negocios que tenía en mente y el apoyo en el camino de estructurarla y llegar al primer MVP fue increíble, súper generosa en compartir conocimientos, contactos y todo lo necesario para la consulta puntual y para otras en general. Si tenés una idea o un proyecto ya comenzado y querés potenciarlo evitando errores Pulso365 es quien puede llevarte a ese objetivo".',
    },
  ];

  const sliderRef = useRef(null);

  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    initialSlide: 3,
    arrows: false,
  });

  useEffect(() => {
    const updateSliderSettings = () => {
      const porQueElegirnosElement =
        document.getElementById("por-que-elegirnos");
      if (porQueElegirnosElement) {
        const width = porQueElegirnosElement.offsetWidth;
        if (width <= 768) {
          setSliderSettings({
            infinite: true,
            speed: 500,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
          });
        } else {
          setSliderSettings({
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          });
        }
      }
    };

    // Llamamos a la función de actualización en la carga inicial y en cada cambio de tamaño de la ventana.
    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);

    // Retiramos el listener del evento al desmontar el componente.
    return () => {
      window.removeEventListener("resize", updateSliderSettings);
    };
  }, []);

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div
      className="bg-[#F4F4F4] pb-[60px] pt-[60px] md:h-full md:w-full"
      id="por-que-elegirnos"
    >
      <h2
        className={`mx-auto text-center text-3xl font-bold text-[#000000] md:text-6xl ${antonio.className}`}
      >
        Por qué elegirnos
      </h2>
      <div className="mt-[60px] flex items-center justify-center md:mt-[43px]">
        <div className="relative">
          <div className="absolute bottom-[45%] left-[20px] z-30 h-[30px] w-[30px] md:bottom-[50%] md:left-[-8px] md:h-[42px] md:w-[42px] ">
            <button onClick={prevSlide}>
              <img src="/flecha-izq.png" alt="" />
            </button>
          </div>
          <div className="absolute bottom-[45%] right-[40px] z-30 h-[30px] w-[30px] md:bottom-[50%] md:right-[-8px] md:h-[42px] md:w-[42px]">
            <button onClick={nextSlide}>
              <img src="/flecha-der.png" alt="" />
            </button>
          </div>
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className={`flex h-[240px] w-[400px] flex-col items-center justify-between md:mb-4 md:mb-[133px] md:mt-[43px] md:h-[350px] md:w-[1140px]`}
          >
            {testimonios.map((t) => (
              <div
                className={`relative left-[-110px] h-[240px] w-[350px] md:left-[-380px] rounded-[24.69px] bg-[#FFFFFF] text-left md:h-[370px] md:w-[369px] md:rounded-[36px] ${openSans.className}`}
              >
                <div className="h-[230px] w-[240px] py-[20px] px-[20px] md:h-[236.4px] md:w-[323.26px] md:gap-[14.4px] md:p-[21.6px_21.35px_92px_24.4px]">
                  <div className="flex flex-col ">
                    <h2 className="md:text-24px text-[16.46px] font-[600] text-black md:leading-[32.68px]">
                      {t.cliente} <br className="hidden md:block" />
                    </h2>
                    <span className="text-[10.97px] font-[600] text-black md:text-[16px] md:leading-[21.79px]">
                      {t.empresa}
                    </span>
                  </div>
                  <img
                    className="h-[19px] w-[102.45px] mb-[5px] md:mt-[15px] md:h-auto md:w-[149.4px] md:mb-[14.4px]"
                    src={`/${t.estrellas}star.png`}
                    alt=""
                  />
                  <p className="text-[9.6px] font-normal md:text-[14px] text-[#1A1B1D] md:leading-[19.07px] md:tracking-[0.28px]">
                    {t.comentario}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
