"use client"
import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import { Antonio, Open_Sans } from "next/font/google";
import ResourcesModal from './modals/ResourcesModal'

const antonio = Antonio({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const open_sans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


function Herramientas() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        let element = document.getElementById("recursosnav")
        element.style.color = "#AC8E3F"
        element.style.transition = "color 500ms ease-in-out";
      } else {
        document.getElementById("recursosnav").style.color = "white"
      }
    }, {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.3,
    });
    const div = document.querySelector("#recursos");
    observer.observe(div);


  }, [])


  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')



  async function handleSubmit(e) {
    e.preventDefault()
    document.body.style.overflowY = "hidden"

    const form = document.getElementById("formResources")
    const formData = new FormData(form)

    if (!validateEmail(email)) {
      return
    } else {
      await fetch(form.action, {
        method: "post", body: (formData)
      }).then(
        setSubscribed(true)
      ).then(form.reset())
    }

  }

  const handleClose = () => {
    document.body.style.overflowY = "auto"
    setSubscribed(false)
  };


  return (


    <div id="recursos" className="bg-[#F4F4F4]" >

      <ResourcesModal isVisible={subscribed} fonts={{ antonio, open_sans }} onClose={() => (handleClose())} message={subscribed} />

      <div className="hidden md:block">

        <div className="mb-2 m-4 text-center" >

          <p
            className={`text-[#000)] my-6 md:text-[30px] xl:text-[48px] font-semibold ${open_sans.className}`}
          >
            Contamos con herramientas que te serán <br />
            útiles para estar al tanto de lo último que <br />
            pasa en el mundo de los negocios, <br />
            emprendimientos y pymes
          </p>

        </div>
        <div id="herramientas" className="md:pt-[90px]"></div>
        <div className="mb-2 m-4 text-center">
          <p
            className={`text-[24px] font-bold text-[#000)] my-6 text-[60px] mb-12 ${antonio.className}`} id="recursos"
          >
            RECURSOS
          </p>

        </div>
        <div className="md:flex md:justify-center" >
          <div
            className={`border rounded p-4 m-4 md:p-0 flex justify-between  items-center bg-[#FFF] border-solid  rounded-3xl  ${open_sans.className}`}
            style={{ width: "555px", height: "249px" }} id="podcast"
          >
            <div className=" pl-5  " >
              <p className="mb-2 text-[21px] ">
                El podcast que te
                <br />
                acompaña en la creacion
                <br />
                de tu negocio
              </p>
              <div className="pl-10 ">
                <button className=" boxshadow bg-[#FFFFFF] border-2 border-black border-solid text-black font-[600] mt-2 rounded-xl px-8 py-3 ">
                  <a href="https://spotify.link/3jplRajb7Cb" target="_blank">
                    <img
                      src="/vectorherramientas.png"
                      alt=""
                      className="w-6 h-6 mr-2 inline "
                    />
                    Escuchar
                  </a>
                </button>
              </div>
            </div>
            <div className="  ">
              <img src="/herramientas2.png" alt="Herramientas 1" />
            </div>
          </div>
          {/******************************************************DIV SUBSCRIBIRME  ************************************************************************/}
          <div
            className={`border  rounded  mt-4 text-left bg-[#FFF] border-solid rounded-3xl ${open_sans.className}`}
            style={{ width: "555px", height: "249px" }}
          >
            <div className="mb-2 p-4  ">
              <div
                className="btn btn-sm ml-3 btn-primary  border-2 border-black border-solid text-white bg-black rounded-r-full
           rounded-l-full px-2 py-0.5 flex text-[15px] font-bold border-[1px] w-[100px]"
              >
                Newsletter
              </div>
              <p className="p-4 mt-1 text-[21px] ">
                <span className="font-bold   font-bold">
                  Recibí nuestro Newsletter
                </span>{" "}
                por mail para
                <br /> estar al tanto de las últimas novedades
              </p>
            </div>

            <form id="formResources" method="post" onSubmit={(e) => handleSubmit(e)} action="https://3e142981.sibforms.com/serve/MUIFADnC-TqcLSmEfNmh3BaMGaFbEqReUPgKx4JeEuN1-LNH5sqGkk33KRw5C6qKBC5Y7iZfbl2-46Tn4msaMf88JmgOEdIJCzG1frMkGFn7ZqHDjutICPL9aonobdVjo3Eg01hizqhmgLY0-Fq7irABWyZ7EmDvopf5s-kc-yIjtiKx3nSo74iQNFOwSbI3yBjwfyI3c48UbTBp" className="flex-grow mt-0 m-10 text-[21px] text-left flex items-center rounded-r-full">
              <input
                name="EMAIL"
                id="email"
                type="email"
                placeholder="ejemplo@correo..."
                className=" w-[220px] p-2 border-2 border-black rounded-l-lg  "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-black border-2 border-black border-solid text-black px-4 py-2 flex rounded-r-lg  items-center ">
                <img
                  src="/vectoremail.png"
                  alt=""
                  className="w-6 h-6 mr-2 inline"
                />
                <span className=" px-[10px] truncate max-w-[271px]  text-[21px] text-white font-[700] ">
                  Suscribirme
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="contacto"></div>

      {/**********************************************************VERSION MOBILE****************************************************************/}
      <div className="block md:hidden bg-[#F4F4F4] ">
        <div className="mx-4 mt-16 mb-24">
          <p
            className={`font-semibold m-auto text-center text-[21px] w-[302px] ${open_sans.className}`}
          >
            Contamos con<br />
            herramientas que te<br />
            serán útiles para estar al<br />
            tanto de lo último que <br />
            pasa en el mundo de los <br />
            negocios,<br />
            emprendimientos y <br />
            pymes
          </p>

          <div id="herramientasmobile" className="pt-[30px]"></div>
        </div>
        <div className="mb-12 m-4 text-center ">
          <p
            className={`text-[24px] font-[700] text-[#000)] ${antonio.className}`}
          >
            RECURSOS
          </p>
        </div>
        <div
          className={`bg-[#FFF] border rounded p-4 m-4 flex items-center border-2 border-black border-solid rounded-lg ${open_sans.className}`}
        >
          <div className="flex-grow text-left " id="podcastmob">
            <p className="mb-2">
              El podcast que te
              <br />
              acompaña en la
              <br />
              creación de tu negocio
            </p>
            <button className="bg-[#FFFFFF] border-2 border-black border-solid text-black rounded-md px-4 py-2" >
              <a href="https://spotify.link/3jplRajb7Cb" target="_blank">
                <img
                  src="/vectorherramientas.png"
                  alt=""
                  className="w-6 h-6 mr-2 inline"
                />
                Escuchar
              </a>
            </button>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <img
              src="/herramientas1.png"
              alt="Herramientas 1"
              className="w-50 h-50"
            />
          </div>
        </div>
        <div
          className={` bg-[#FFF] border rounded p-4 m-4 text-left border-2 border-black border-solid rounded-lg ${open_sans.className}`}
        >
          <div className="mb-2" id="newslettermob">
            <div
              className="btn btn-sm btn-primary border-2 border-black border-solid text-white bg-black rounded-r-full
           rounded-l-full px-1 py-1 flex text-[10px] font-[700] border-[1px]  w-[65px]"
            >
              Newsletter
            </div>
            <p>
              <span className="font-bold text-[#353535]">
                Recibí nuestro Newsletter
              </span>{" "}
              por mail para
              <br /> estar al tanto de las últimas novedades
            </p>
          </div>
          <form id="formResources" onSubmit={(e) => handleSubmit(e)} method="post" action="https://85ca43de.sibforms.com/serve/MUIFAIKkhdzPHSI7c7M56joleTYjrtW4-_3LnZ4QHA6NIP2JjSoz5uZ71VBdwHIzPs6Ar51n1hnghu_muYPKGTu-9WjNpJgT9Wsnt3aUgiLqJKu0p3eOlFrMPGylo8A-8Aw87pRL3YttUgzdT6bsRZg_hWS8S7gZhNx4BVZbtaH279IBKlACoKhIELeluLm71v0Y4IIzfZaFiT06" className="flex-grow text-left flex items-center">
            <input
              type="email"
              name="EMAIL"
              id="email"
              required
              placeholder="Ejemplo@correo..."
              className="p-2 border-2 border-black rounded-l flex-grow placeholder w-1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-black border-2 border-black border-solid text-black rounded-r-md px-4 py-2 flex items-center ">
              <img
                src="/vectoremail.png"
                alt=""
                className="w-6 h-6 mr-2 inline"
              />
              <span className="truncate max-w-[200px] text-white font-[700] ">
                Suscribirme
              </span>
            </button>
            <div id="contactomobile"></div>
          </form>
        </div>
      </div>

    </div>

  );
}


export default Herramientas;
