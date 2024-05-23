import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5xp] top-[-30px] w-10 lg-w-[50px]"
        />
      </div>
      <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
      <p className="regular-16 bg-neutral-600 text-gray-30 xl:max-w-[520px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor assumenda
        hic unde ipsum quisquam modi eveniet, quaerat eligendi porro cumque
        officia. Veritatis magni aliquam molestias tempore vel sequi omnis
        velit.
      </p>
    </section>
  );
};
