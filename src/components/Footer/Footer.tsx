import React from "react";
import Image from "next/image";
import X from "../../../public/X.png";
import LinkedIn from "../../../public/linkedIn.png";
import Instagram from "../../../public/insta.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t border-[#636161] py-8 text-xl">
      <h2>Copyright © ExecutivePros. All Rights Reserved</h2>
      <div className="flex items-center gap-4">
        <Image src={X} alt="X" />
        <Image src={LinkedIn} alt="LinkedIn" />
        <Image src={Instagram} alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
