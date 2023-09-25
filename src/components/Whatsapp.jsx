export default function Whatsapp() {
  return (
    <div className="fixed bottom-1 right-2 md:bottom-8 md:right-10 transform transition-transform hover:scale-110">
      <a
        className=" flex items-center py-2"
        href="https://wa.me/+5493464686968"
        target="_blank"
      >
        <img className="mr-2 h-[54px] w-[54px] md:h-[80px] md:w-[80px]" src="/whatsapp.svg" alt="WhatsApp" />
      </a>
    </div>
  );
}
