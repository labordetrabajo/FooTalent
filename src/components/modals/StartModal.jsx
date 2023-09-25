"use client"

import { useState } from "react";



const validateEmail = (email) => {
  // Expresion regular que valida un correo electronico
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Validamos que el correo tenga como minimo 3 caracteres antes del simbolo @
  const beforeAt = email.split("@")[0].length;
  const afterAt = email.split("@")[1].length;
  console.log(email.split("@")[1])
  return regex.test(email) && beforeAt >= 4 && afterAt >= 6;
};


const StartModal = ({ isVisible, onClose, fonts, message }) => {

  const [checked, setChecked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState('')

  if (isVisible) {
    document.body.style.overflowY = "hidden"
    let circles = document.getElementsByClassName("circle")
    circles[0].classList.remove("circulo")
    circles[1].classList.remove("circulo")
    circles[2].classList.remove("circulo")

  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!checked) return

    const form = document.getElementById("form")
    const formData = new FormData(form)


    if (!validateEmail(email)) {
      console.log("mail invalido")
      console.log(email)
      setResponse('Ingresa un mail valido')
      return
    } else {
      await fetch(form.action, {
        method: "post",
        body: (formData)
      }).then(
        setSubscribed(true)
      )
    }



  }

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();

    }
  };

  return (
    <div
      id="wrapper"
      onClick={(e) => handleClose(e)}
      className="backgrop-blur-sm fixed inset-0 z-50  flex items-center justify-center bg-black/50"
    >

      <div
        className={` z-30 h-[294px] w-[242px] rounded-[20px] bg-[#f4f4f4]  md:h-[455px] md:w-[804px]  md:rounded-[17px] relative overflow-hidden`}
      >
        <div className='circulo circuloinferiorderecho absolute border-2 rounded-full z-[-15px] hidden md:block w-[150px] h-[150px] md:top-[-35px] md:right-[-35px] border-[#AC8E3F] '></div>
        <div className="modalheader flex absolute top-0 right-0">
          <button onClick={() => onClose()}>
            <svg
              className="md:h-[25px] md:w-[25px] mt-1.5 mr-1.5 z-20"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1993_1106)">
                <path
                  d="M12.0001 0.238281C18.5059 0.238281 23.7648 5.4971 23.7648 12.003C23.7648 18.5089 18.5059 23.7677 12.0001 23.7677C5.49417 23.7677 0.235352 18.5089 0.235352 12.003C0.235352 5.4971 5.49417 0.238281 12.0001 0.238281ZM16.2236 6.12063L12.0001 10.3442L7.77653 6.12063L6.1177 7.77946L10.3412 12.003L6.1177 16.2265L7.77653 17.8853L12.0001 13.6618L16.2236 17.8853L17.8824 16.2265L13.6589 12.003L17.8824 7.77946L16.2236 6.12063Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1993_1106">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>


        {!subscribed ?

          <div
            className={`flex gap-2`}
          >

            <div className={` ml-2 mt-2 md:ml-6 md:mt-8 bg-white w-[228px] h-[280px] rounded-xl md:rounded-xl flex flex-col md:w-[352px] md:h-[405px] ${fonts.openSans.className}`}>
              <h2 className="text-[15px] mt-4 ml-2 md:text-[23px] md:ml-4 md:pt-[20px] pb-[34px] md:pb-[51px] font-[400] opensans ">PULSO<span className="font-[800]">365</span></h2>

              <p className="text-[8.9px] ml-2 md:text-[13px] md:ml-4 font-[700] opensans">

                Recibí nuestro Newsletter <span className="font-[400]">por mail para estar al tanto de las últimas novedades.</span>
              </p>

              <form id="form" onSubmit={(e) => handleSubmit(e)} method="post" className=" mt-6 space-y-2 md:mt-8 ml-1 md:ml-3 md:space-y-3 " action="https://3e142981.sibforms.com/serve/MUIFADnC-TqcLSmEfNmh3BaMGaFbEqReUPgKx4JeEuN1-LNH5sqGkk33KRw5C6qKBC5Y7iZfbl2-46Tn4msaMf88JmgOEdIJCzG1frMkGFn7ZqHDjutICPL9aonobdVjo3Eg01hizqhmgLY0-Fq7irABWyZ7EmDvopf5s-kc-yIjtiKx3nSo74iQNFOwSbI3yBjwfyI3c48UbTBp">

                <div className="relative">
                  <label
                    for="name"
                    className={`absolute  left-[18px] text-[8.9px] md:left-[22px] z-20 bg-white px-[6px] bottom-[22px] md:bottom-[30px]  font-[700] md:text-[13px]`}
                  >
                    Nombre
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="  block w-full rounded-lg md:rounded-lg  md:w-[303px] border-[1px] h-[28px] md:h-[42px] border-black   text-[8.9px] outline-none  placeholder:text-[8.9px]  md:pl-6 md:text-[13px] md:placeholder:pl-[45px] md:placeholder:pt-[59px] p-2.5 md:placeholder:text-[13px] "
                    placeholder="Tu nombre"
                    required
                  />
                </div>


                <div className="relative">
                  <label
                    for="email"
                    className={`absolute  left-[18px] md:left-[22px] z-20 bg-white px-[6px] text-[8.9px] bottom-[22px] md:bottom-[32px]  md:text-[13px] font-[700]`}
                  >
                    Email
                  </label>
                  <input
                    type="EMAIL"
                    name="EMAIL"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="  block w-full rounded-lg md:rounded-lg  md:w-[303px] border-[1px] h-[28px] md:h-[42px] border-black   text-[8.9px] outline-none  placeholder:text-[8.9px]  md:pl-6 md:text-[13px] md:placeholder:pl-[45px] md:placeholder:pt-[59px] p-2.5 md:placeholder:text-[13px] "
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
                <p className={`text-[8px] md:text-[12px]  text-red-500  `}>{response}</p>


                <div className="flex  mt-2 gap-4 justify-between items-center">

                  {!checked ?
                    <button type="button" onClick={() => setChecked(true)}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM19 5V19H5V5H19Z" fill="black" />
                      </svg>                    </button>
                    :
                    <button type="button" onClick={() => { setChecked(false) }}>
                      <svg width="28" height="28" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1182 17.3877L5.11816 12.3877L6.52816 10.9677L10.1182 14.5577L17.7082 6.96769L19.1182 8.38769M19.1182 3.3877H5.11816C4.00816 3.3877 3.11816 4.2777 3.11816 5.3877V19.3877C3.11816 19.9181 3.32888 20.4268 3.70395 20.8019C4.07902 21.177 4.58773 21.3877 5.11816 21.3877H19.1182C19.6486 21.3877 20.1573 21.177 20.5324 20.8019C20.9074 20.4268 21.1182 19.9181 21.1182 19.3877V5.3877C21.1182 4.2777 20.2182 3.3877 19.1182 3.3877Z" fill="black" />
                      </svg>


                    </button>
                  }
                  <p className=" text-[7.9px] md:text-[11px] font-[400] ">
                    He leído las
                    <a className="font-[700]" target="_blank" href="/privacy"> Políticas de privacidad </a>
                    y acepto los términos y condiciones del uso de datos


                  </p>

                </div>


                <button
                  className="bg-black px-[14px]  py-[6px] md:px-[22px] md:py-[9px] border-[1px] mt-[22px] md:w-[145px] rounded-[7.6px]  md:mt-[30px]   "
                >
                  <div className="items-middle flex justify-center  gap-[5px] md:gap-[7px]">
                    <svg className="w-[15px] h-[15px] md:w-[24px] md:h-[24px]" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.38629 19.147C3.85978 19.147 3.40888 18.9593 3.03362 18.5841C2.65836 18.2088 2.47104 17.7582 2.47168 17.2324V5.74469C2.47168 5.21817 2.65931 4.76728 3.03458 4.39202C3.40984 4.01675 3.86041 3.82944 4.38629 3.83008H19.7032C20.2297 3.83008 20.6806 4.01771 21.0559 4.39298C21.4311 4.76824 21.6184 5.21881 21.6178 5.74469V17.2324C21.6178 17.7589 21.4302 18.2098 21.0549 18.585C20.6796 18.9603 20.2291 19.1476 19.7032 19.147H4.38629ZM12.0447 12.4458L19.7032 7.65931V5.74469L12.0447 10.5312L4.38629 5.74469V7.65931L12.0447 12.4458Z" fill="white" />
                    </svg>
                    <p
                      className={`text-[9px] text-white  md:text-[13px] md:pt-0.5  font-[700]  `}
                    >

                      Suscribirme
                    </p>
                  </div>
                </button>


              </form>


            </div>

            <div className="md:flex md:flex-col mt-[50px] md:justify-center md:items-center  hidden md:w-7/12 md:h-9/12">


              <h2 className={`text-[36px] leading-10 text-center font-[700] antonio ${fonts.antonio.className}`}>
                Todo lo que <br /> necesitás para <br />iniciar y <br />mantenerte al día
              </h2>
              <h2 className="text-[55px] mt-4 font-[400] ">
                PULSO<span className="font-[800]">365</span>
              </h2>


            </div>


          </div> :


          <div>
            <h2 className="md:hidden text-[15px] mt-4 ml-2 md:text-[23px] md:ml-4 md:pt-[20px] pb-[04px] md:pb-[51px] font-[400] opensans ">PULSO<span className="font-[800]">365</span></h2>

            <div className="flex flex-col justify-center items-center gap-2 md:gap-4">

              <div className={`flex flex-col justify-center md:mt-6 items-center gap-2 font-[700] ${fonts.antonio.className} text-center`}>
                <h2 className=" text-[20px] md:text-[48px]">
                  ¡Listo!
                </h2>
                <h2 className="text-[12px] md:text-[32px] font-[400] md:font-[700]">
                  Ya te has suscripto a  la <br /> newsletter.
                </h2>
              </div>
              <div className="relative md:hidden">
                <label
                  for="name"
                  className={`absolute  left-[18px]  z-20 bg-white px-[6px] text-[8.9px] bottom-[22px] font-[700]`}
                >
                  Nombre
                </label>
                <input
                  type="EMAIL"
                  name="EMAIL"
                  id="email"
                  className=" w-[200px] rounded-md    border-[1px] h-[28px]  border-black   text-[8.9px] outline-none  placeholder:text-[8.9px]  p-2.5 "
                  placeholder="Tu nombre"
                  disabled
                />
              </div>

              <div className="relative md:hidden">
                <label
                  for="email"
                  className={`absolute  left-[18px]  z-20 bg-white px-[6px] text-[8.9px] bottom-[22px] font-[700]`}
                >
                  Email
                </label>
                <input
                  type="EMAIL"
                  name="EMAIL"
                  id="email"
                  className=" w-[200px] rounded-md    border-[1px] h-[28px]  border-black   text-[8.9px] outline-none  placeholder:text-[8.9px]  p-2.5 "
                  placeholder="ejemplo@correo.com"
                  disabled
                />
              </div>
              <div className="ml-3 mt-2 flex gap-2">

                <button className="md:hidden">
                  <svg width="24" height="24" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1182 17.3877L5.11816 12.3877L6.52816 10.9677L10.1182 14.5577L17.7082 6.96769L19.1182 8.38769M19.1182 3.3877H5.11816C4.00816 3.3877 3.11816 4.2777 3.11816 5.3877V19.3877C3.11816 19.9181 3.32888 20.4268 3.70395 20.8019C4.07902 21.177 4.58773 21.3877 5.11816 21.3877H19.1182C19.6486 21.3877 20.1573 21.177 20.5324 20.8019C20.9074 20.4268 21.1182 19.9181 21.1182 19.3877V5.3877C21.1182 4.2777 20.2182 3.3877 19.1182 3.3877Z" fill="black" />
                  </svg>


                </button>
                <p className=" md:hidden text-[7.9px] md:text-[11px] font-[400] ">
                  He leído las
                  <a className="font-[700]" href="#"> Políticas de privacidad </a>
                  y acepto los términos y condiciones del uso de datos


                </p>
              </div>



              <div className={`hidden md:flex flex-col justify-center items-center gap-4 ${fonts.openSans.className}`}>
                <h2 className="text-[55px] mt-4 font-[400] ">
                  PULSO<span className="font-[800]">365</span>
                </h2>
                <button onClick={() => onClose()} className="md:w-[145px] md:rounded-md py-[9px] px-[22px] text-[13px] font-[700] border-[1px] border-black "> Cerrar</button>



              </div>


            </div>
            <button
              className="md:hidden ml-4 mb-8 bg-[#f4f4f4] px-[14px]  py-[6px] border-[1px] mt-[22px] rounded-[7.6px]     "
            >
              <div className="items-middle flex justify-center  gap-[5px] md:gap-[7px]">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0772 12.8448H3.84351V3.61109H10.439V2.29199H3.84351C3.11141 2.29199 2.52441 2.87899 2.52441 3.61109V12.8448C2.52441 13.1946 2.66339 13.5301 2.91077 13.7775C3.15815 14.0249 3.49366 14.1638 3.84351 14.1638H13.0772C13.427 14.1638 13.7625 14.0249 14.0099 13.7775C14.2573 13.5301 14.3963 13.1946 14.3963 12.8448V7.56837H13.0772M5.76279 6.96159L4.83283 7.89815L7.80079 10.8661L14.3963 4.27063L13.4663 3.33408L7.80079 8.99959L5.76279 6.96159Z" fill="black" />
                </svg>                <p
                  className={`text-[9px]  text-black  md:text-[13px] font-[700]  `}
                >
                  Subscripto
                </p>
              </div>
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default StartModal;
