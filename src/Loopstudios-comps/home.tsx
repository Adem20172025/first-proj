import { useState } from "react";
import humburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="w-full bg-[url('./assets/mobile/image-hero.jpg')] md:bg-[url('./assets/desktop/image-hero.jpg')] h-screen bg-cover bg-no-repeat flex flex-col items-center">
      <header
        className={`w-full max-w-6xl flex justify-between p-5 items-center transition-all md:pt-20 duration-400 ${isOpen ? "bg-black" : ""} text-white`}
      >
        <h1 className="text-xl font-bold">loopstudios</h1>
        <nav
          className={`flex flex-col md:flex-row md:h-fit bg-black text-white absolute md:static md:translate-y-0 md:bg-transparent top-16 left-0 right-0 p-5 h-screen gap-3 md:gap-6 text-xl md:text-[17px] uppercase md:capitalize pt-20 md:p-0 ${isOpen ? "translate-y-0 " : "-translate-y-250"} transition-all duration-400 font-extralight md:font-normal`}
        >
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-all duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-all duration-200"
          >
            Careers
          </a>
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-all duration-200"
          >
            Events
          </a>
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-all duration-200"
          >
            Proudcts
          </a>
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-all duration-200"
          >
            support
          </a>
        </nav>
        <img
          onClick={handleClick}
          className="w-6 cursor-pointer md:hidden"
          src={isOpen ? close : humburger}
          alt=""
        />
      </header>
      <div className=" max-w-6xl w-full flex-1 flex justify-center items-center md:justify-start">
        <article className="text-white text-4xl md:text-7xl md:max-w-1/2 font-extralight border-2 mx-5 p-3 md:p-6 uppercase tracking-wider md:leading-20">
          Immersive experiences that deliver
        </article>
      </div>
    </section>
  );
}
