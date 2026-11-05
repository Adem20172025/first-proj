import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
export function Footer() {
  return (
    <section className="w-full bg-black flex justify-center ">
      <footer className="w-full max-w-6xl text-white flex flex-col gap-10 items-center py-9 md:py-5 md:flex-row justify-between">
        <div className="flex flex-col gap-4 md:gap-2 items-center md:items-start">
          <h1 className="text-xl font-bold">loopstudios</h1>
          <nav className="flex flex-col md:flex-row gap-3 text-center">
            <a
              href="#"
              className="text-[14px] opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
            >
              About
            </a>
            <a
              href="#"
              className="text-[14px] opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-[14px] opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
            >
              Events
            </a>
            <a
              href="#"
              className="text-[14px] opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
            >
              Products
            </a>
            <a
              href="#"
              className="text-[14px] opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
            >
              Support
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-end">
          <article className="flex gap-4 items-center justify-center">
            <img
              src={facebook}
              className="size-5 opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
              alt="facebook icon"
            />
            <img
              src={twitter}
              className="size-5 opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
              alt="twitter icon"
            />
            <img
              src={pinterest}
              className="size-5 opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
              alt="pinterest icon"
            />
            <img
              src={instagram}
              className="size-5 opacity-70 hover:opacity-100 transition-all duration-150 cursor-pointer"
              alt="instagram"
            />
          </article>
          <p className="text-[13px] opacity-50">
            &copy; 2021 loopstudios. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
