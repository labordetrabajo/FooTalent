const ResourcesModal = ({ isVisible, onClose, fonts, message }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") {
      onClose();

    }
  };

  return (
    <div
      id="wrapper"
      onClick={(e) => onClose(e)}
      className="backgrop-blur-sm fixed inset-0 z-20  flex items-center justify-center bg-black/50"
    >
      <div
        className={` z-20 h-[235px] w-[200px] rounded-[20px] bg-white  md:h-[445px] md:w-[804px] md:mt-28 md:rounded-[64px] ${fonts.open_sans.className} }`}
      >
        <div className="modalheader flex justify-end p-2  md:p-6">
          <button onClick={() => onClose()}>
            <svg
              className="md:h-[25px] md:w-[25px]"
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

        <div
          className={`flex flex-col text-center items-center justify-center gap-1 px-5   md:gap-5 `}
        >
          <h1 className={` text-[20px] font-bold md:text-[48px]`}>
            {message ? "¡LISTO!" : "¡UPS!"}
          </h1>
          {message ? (
            <p className={`text-[14px]  md:text-[32px] ${fonts.antonio.className}`}>
              Ya te has subscripto a <br /> la newsletter.
            </p>
          ) : (
            <p className={`text-[14px]  leading-5 md:leading-8 md:text-[32px] ${fonts.antonio.className} `}>
              Hay un problema
              <br />
              Verifica que la informacion sea valida
            </p>
          )}
        </div>
        <div className={` flex flex-col justify-center items-center gap-1 md:gap-4 ${fonts.open_sans.className}`}>
          <h2 className="text-[24px] md:text-[55px] mt-4 font-[400] ">
            PULSO<span className="font-[800]">365</span>
          </h2>
          <button onClick={() => onClose()} className="md:w-[145px] rounded-lg md:rounded-md py-[5px] md:py-[9px] px-[22px] text-[13px] font-[700] border-[1px] border-black "> Cerrar</button>



        </div>

      </div>
    </div>
  );
};

export default ResourcesModal;
