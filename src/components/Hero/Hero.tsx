import React from "react";
import Image from "next/image";
import Icon from "../../../public/heroLogo-I8E4tecF.svg";
import Button__Dark from "../Buttons/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex justify-center items-center text-center flex-col gap-12 h-[80vh]">
      <h1 className="font-bold text-9xl flex flex-col items-center justify-center gap-4">
        <p className="flex">
          We The{" "}
          <span>
            <Image src={Icon} alt="Icon" />
          </span>
          - Pro
        </p>
      </h1>
      <p className="text-2xl leading-10 w-[600px]">
        Welcome to ExecutivePros! <br />
        Where teamwork meets success. Collaborate, share ideas, and grow
        together in a space built for innovation and support. <br />
        <span className="text-[#FF9827] mt-4">
          Let us achieve greatness—together!
        </span>
      </p>
      <Link href="https://executivepros.co/contact">
        <Button__Dark text="Start now" />
      </Link>
    </div>
  );
};

export default Hero;
