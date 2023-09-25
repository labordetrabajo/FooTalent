"use client";
import { Antonio } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import MailService from "../service/nodemailer";
import FormModal from "./modals/FormModal";


const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const open_sans = Open_Sans({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formStatus, setFormStatus] = useState(true);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        let element = document.getElementById("contactnav")
        element.style.color = "#AC8E3F"
        element.style.transition = "color 500ms ease-in-out";
      } else {
        document.getElementById("contactnav").style.color = "white"
      }
    }, {
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.3,
    });
    const div = document.querySelector("#contact");
    observer.observe(div);


  }, [])



  async function handleSubmit(e) {
    e.preventDefault();
    document.body.style.overflowY = "hidden"

    if (!validateEmail(email) && email === "" && name === "" && message === "") {
      setFormStatus(false);
      setShowModal(true);
      return;
    }
    setFormStatus(true);
    setShowModal(true);
    document.getElementById("contactform").reset();

    await MailService.sendEmail({ name, email, message });
  }


  function closeModal() {
    setShowModal(false)
    document.body.style.overflowY = "auto"

  }
  return (

    <section id="contact"
      className="bg-[#f4f4f4] relative h-[800px]  mt-[90px]  mb-[20px] xl:mb-[100px] xl:mt-[0] xl:flex md:h-[900px] xl:h-[1500px] md:flex md:flex-col xl:flex-col xl:items-center xl:justify-center" >
      <div id="contacto" className=" mx-auto max-w-screen-xl px-4 lg:pb- ">
        <h2
          className={` text-center  text-[32px] font-semibold tracking-tight text-gray-900 dark:text-white xl:text-[60px] ${antonio.className}`}
        >
          Contacto{" "}
        </h2>
        <p
          className={`mt-[20px] flex justify-center gap-[8px] p-[5px] text-left text-[14px] font-[400] text-black xl:mt-[10px] xl:text-[26.4px]  ${open_sans.className}`}
        >
          Queremos saber más de vos y responder <br /> cualquier pregunta o
          inquietud que tengas.
        </p>

        <div
          className={`items-middle mb-[22px]  mt-[40px] xl:mt-[5px]   xl:mb-[40px] flex flex-row justify-center  gap-[10px] flex-nowrap xl:gap-[27px] ${open_sans.className}`}
        >
          <img className="w-[76px] xl:w-[132px]" src="/Line 6.svg" alt="line" />
          <p className="text-[14px] p-[10px] whitespace-nowrap tracking-[0.25px] xl:tracking-[0.67px] font-[600]  xl:text-[37.5px]">
            Escribinos un mensaje
          </p>
          <img className="w-[76px] xl:w-[132px]" src="/Line 6.svg" alt="line" />
        </div>
        <form
          id="contactform"
          action="#"
          className="space-y-5  xl:ml-12  xl:space-y-7 xl:w-[668px] xl:gap-12"
          onSubmit={handleSubmit}

        >
          <div className="relative">
            <label
              for="email"
              className={`absolute bottom-11 left-[18px] xl:left-[42px] z-20 bg-white px-[6px] text-sm font-light xl:bottom-[99px] ${roboto.className} xl:text-[32px]`}
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="  block w-full rounded-lg  xl:w-[625px] border-[1px] xl:border-[3px] xl:h-[111px] border-black xl:rounded-3xl h-[54px] text-sm outline-none  placeholder:text-[12px]  xl:pl-6 xl:text-[32px] xl:placeholder:pl-[45px] xl:placeholder:pt-[59px] p-2.5 xl:placeholder:text-[32px] "
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="relative">
            <label
              for="subject"
              className={`absolute bottom-11 left-[18px] xl:left-[42px] z-20 bg-white px-[6px] text-sm font-light xl:bottom-[100px] xl:text-[32px] ${roboto.className}`}
            >
              Nombre
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="subject"
              className="  block w-full  md:w-[400px] rounded-lg xl:w-[625px] border-[1px] xl:border-[3px] border-black h-[54px]  xl:rounded-3xl text-sm outline-none placeholder:text-[12px] xl:h-[110px] xl:pl-6 xl:text-[32px] xl:placeholder:pl-[45px] p-2.5 xl:placeholder:pt-[59px] xl:placeholder:text-[32px] "
              placeholder="Nombre"
              required
            />
          </div>
          <div className="relative sm:col-span-2">
            <label
              for="message"
              className={`absolute bottom-[88px] left-[18px] xl:left-[42px] z-20 bg-white px-[6px] text-sm font-light xl:bottom-[190px] ${roboto.className} xl:text-[32px]`}
            >
              Mensaje
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows="4"
              className="block p-2.5 w-full  rounded-lg xl:w-[625px] xl:border-[3px] border-[1px] border-black h-[98px]  xl:rounded-3xl text-sm outline-none placeholder:text-[12px] xl:h-[200px] xl:pl-6 xl:pt-8 xl:text-[32px] xl:leading-9 xl:placeholder:pl-[49px] xl:placeholder:pt-[54px] xl:placeholder:text-[32px] "
              placeholder="Escribí acá tu mensaje"
              required
            ></textarea>
            <button
              className="light-box-shadow absolute left-0  border-[1px] mt-[22px] w-[149px] rounded-xl xl:border-[3px] border-black bg-white py-[10px] xl:ml-4 xl:mt-[20px] xl:h-[80px] xl:w-[280px] xl:rounded-2xl "
            >
              <div className="items-middle flex justify-center gap-4 ">
                <p
                  className={`text-[14px] font-[600] xl:text-[31px] xl:font-[600]  ${open_sans.className}`}
                >
                  Enviar
                </p>
              </div>
            </button>
          </div>
        </form>


        <div
          className={`items-middle mb-[22px] mt-[90px] flex flex-row justify-center gap-[24px] font-[400] xl:mt-[233px]  ${open_sans.className}`}
        >
          <img className="w-[68px] xl:w-[143px]" src="/Line 6.svg" alt="line" />
          <p className="text-[14px] xl:text-[37.5px]">o contactanos por </p>
          <img className="w-[68px] xl:w-[143px]" src="/Line 6.svg" alt="line" />
        </div>

        <div className="light-text-shadow flex flex-row items-center justify-center gap-[44px] xl:gap-[75px] xl:mt-[47px]">
          <div >
            <a target="_blank" className="flex flex-col items-center justify-center " href="https://www.instagram.com/memizorzin.consultora/">
              <img
                className=" h-[40px] w-[40px] xl:h-[108px] xl:w-[108px]"
                src="/instagramLogo.svg"
                alt="instagramlogo"
              />
              <label
                for="subject"
                className={` text-[12px] font-light xl:text-[32px] ${roboto.className}`}
              >

                Instagram

              </label>
            </a>
          </div>

          <div >
            <a target="_blank" className="flex flex-col items-center justify-center " href="https://www.linkedin.com/in/maria-emilia-zorzin-1132505a/
">
              <img
                className=" h-[40px] w-[40px]  xl:h-[108px] xl:w-[108px]"
                src="/linkedinLogo.svg"
                alt="linkedinlogo"
              />
              <label
                for="subject"
                className={`  text-[12px] font-light xl:text-[32px]  ${roboto.className}`}
              >
                Linkedin
              </label>
            </a>
          </div>

          <div >
            <a className="flex flex-col items-center justify-center " href="mailto:contacto@pulso365.com
              ">
              <img
                className="logoBoxShadow h-[40px] w-[40px]  xl:h-[108px] xl:w-[108px]"
                src="/gmailLogo.svg"
                alt="gmaillogo"
              />
              <label
                for="subject"
                className={`  text-[12px] font-light xl:text-[32px] ${roboto.className}`}
              >
                Correo
              </label>
            </a>
          </div>

          <div className="">
            <a target="_blank" className="flex flex-col justify-center items-center" href="https://wa.me/+5493464686968">

              <img
                className="logoBoxShadow h-[40px] w-[40px] xl:h-[108px] xl:w-[108px] "
                src="/wsLogo.svg"
                alt="whatsapplogo"
              />
              <label
                for="subject"
                className={`text-[12px] font-light xl:text-[32px] ${roboto.className}`}
              >
                Whatsapp
              </label>
            </a>
          </div>
        </div>
      </div>

      <FormModal
        message={formStatus}
        isVisible={showModal}
        onClose={() => closeModal()}
        fonts={{ open_sans, montserrat }}
      />
    </section>
  );
};

export default ContactForm;

