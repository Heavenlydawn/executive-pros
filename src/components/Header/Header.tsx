import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-k--SNeiu.png";
import Button__Dark from "../Buttons/Button"
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="flex items-center gap-8 font-semibold text-lg">
        <Link href="/onboarding">Onboarding</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/support">Support</Link>
      </div>

      <div>
        <Link href="https://executivepros.co/contact">
        <Button__Dark text="Start now" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
