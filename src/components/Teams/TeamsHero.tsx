import React from "react";
import Image from "next/image";
import Icon from "../../../public/heroLogo-I8E4tecF.svg";
const TeamsHero = () => {
  return (
    <section className="flex justify-between py-24">
      <div className="grid grid-cols-3 gap-4">
        <div className=" pointer w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
        <div className="shadow-custom w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
        <div className="shadow-custom w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
        <div className=" pointer w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
        <div className="shadow-custom w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
        <div className="shadow-custom w-[300px] h-[300px] px-8 bg-white flex flex-col justify-center items-center rounded-xl">
          <Image src={Icon} alt="Icon" />
        </div>
      </div>

      <div className="w-[300px] border shadow-custom px-4 flex flex-col justify-center items-center rounded-xl">
        <Image src={Icon} alt="Icon" />
      </div>
    </section>
  );
};

export default TeamsHero;
