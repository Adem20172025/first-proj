export function Creation() {
  return (
    <section className="w-full max-w-6xl px-5 md:p-0 flex flex-col gap-8 md:gap-13 items-center">
      <div className="md:flex justify-between w-full">
        <h2 className="text-center font-extralight text-3xl md:text-4xl uppercase">
          Our creations
        </h2>
        <button className="hidden md:block border p-1 tracking-widest text-[14px] font-semibold uppercase w-40 cursor-pointer">
          see all
        </button>
      </div>
      <article className="w-full grid grid-rows-[repeat(8,95px)] md:grid-cols-[repeat(4,1fr)] md:grid-rows-[repeat(2,460px)] gap-4">
        <div className="bg-[url('./assets/mobile/image-deep-earth.jpg')] md:bg-[url('./assets/desktop/image-deep-earth.jpg')] bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-1/3 h-fit text-white font-extralight uppercase leading-5 md:leading-7 text-xl md:text-3xl tracking-wider">
            Deep Earth
          </h3>
        </div>
        <div className=" bg-cover bg-no-repeat bg-center  flex items-end p-4 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/mobile/image-night-arcade.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/desktop/image-night-arcade.jpg')] md:p-10">
          <h3 className=" w-1/3 h-fit text-white font-extralight uppercase leading-5 text-xl md:text-3xl md:leading-7 tracking-wider">
            night arcade
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent),url('./assets/mobile/image-soccer-team.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent),url('./assets/desktop/image-soccer-team.jpg')] bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-2/5 md:w-4/5 h-fit text-white font-extralight uppercase leading-5 md:leading-7 md:text-3xl text-xl tracking-wider">
            soccer team vr
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),transparent),url('./assets/mobile/image-grid.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/desktop/image-grid.jpg')]  bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-1/3 h-fit text-white font-extralight uppercase leading-5 md:leading-7 md:text-3xl text-xl tracking-wider">
            The grid
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),transparent),url('./assets/mobile/image-from-above.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/desktop/image-from-above.jpg')] bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-2/3 md:w-4/5 h-fit text-white font-extralight uppercase leading-5 md:leading-7 md:text-3xl text-xl tracking-wider">
            From up above vr
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent),url('./assets/mobile/image-pocket-borealis.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent),url('./assets/desktop/image-pocket-borealis.jpg')] bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-1/3 h-fit text-white font-extralight uppercase leading-5 md:leading-7 md:text-3xl text-xl tracking-wider">
            Rocket borealis
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),transparent),url('./assets/mobile/image-curiosity.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/desktop/image-curiosity.jpg')] bg-cover bg-no-repeat bg-center flex items-end p-4 md:p-10">
          <h3 className=" w-1/3 h-fit text-white font-extralight uppercase leading-5 md:leading-7 text-xl md:text-3xl tracking-wider">
            the curiosity
          </h3>
        </div>
        <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0.6),transparent),url('./assets/mobile/image-fisheye.jpg')] md:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent),url('./assets/desktop/image-fisheye.jpg')] bg-cover bg-no-repeat bg-center  flex items-end p-4 md:p-10">
          <h3 className=" w-1/3 md:w-2/3 h-fit text-white font-extralight uppercase leading-5 md:leading-7 md:text-3xl text-xl tracking-wider">
            make it fisheye
          </h3>
        </div>
      </article>
      <button className="md:hidden border p-1 tracking-widest text-[14px] font-semibold uppercase w-30 cursor-pointer">
        see all
      </button>
    </section>
  );
}
