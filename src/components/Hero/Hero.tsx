import React from "react";
import Image from "next/image";
import Icon from "../../../public/heroLogo-I8E4tecF.svg";
import Button__Dark from "../Buttons/Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center text-center flex-col gap-12 h-[90vh]">
      <h1 className="font-bold text-9xl flex flex-col items-center justify-center gap-4">
        <p className="flex">
          We The {" "}
          <span >
            <Image src={Icon} alt="Icon" />
          </span>
          - Pro
        </p>
      </h1>
      <p className="text-2xl leading-10 w-[600px]">
        Reserved for the most audaciously forward-thinking. This space unites us
        in our pursuit of an edge, ensuring we consistently lead the pack in a
        dynamic business landscape. <br />
        <span className="text-[#FF9827] mt-4">
          Try us for free for 30 days. Cancel anytime.
        </span>
      </p>
      <Button__Dark text="Start now" />
    </div>
  );
};

export default Hero;
