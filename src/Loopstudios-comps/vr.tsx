import vrImg from "../assets/mobile/image-interactive.jpg";
export function Vr() {
  return (
    <section className="px-5 md:p-0 flex flex-col gap-7 md:gap-0 text-center max-w-6xl md:flex-row md:h-120 md:items-end">
      <div className="md:h-full md:w-3/5">
        <img className="w-full h-full" src={vrImg} alt="interactive image" />
      </div>
      <div className="flex md:h-fit md:p-10 md:text-start md:p flex-col gap-4 md:w-2/5 md:-ml-35 bg-white">
        <h2 className="text-3xl md:text-5xl uppercase font-extralight">The leader in interactive vg</h2>
        <p className="text-[13px] md:text-[15px] font-semibold md:font-normal">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesss through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
