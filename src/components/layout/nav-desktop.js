import Image from "next/image";
import Link from "next/link";
import { logo, logoShape } from "../../../public/assets/images/images";
import Dropdown from "./dropdown";

function NavDesktop() {
  return (
    <div className="hidden md:block md:flex md:justify-between">
      {/* right */}
      <div className="flex items-center ">
        <Link href="/">
          <a>
            <div className="flex">
              <div className="ml-1.5 flex items-center">
                <Image src={logo} alt="logo" />
              </div>
              <Image src={logoShape} alt="logo-shape" />
            </div>
          </a>
        </Link>
        <div className="flex mr-10">
          {/* <Dropdown /> */}
          <Link href="/crypto-currencies">
            <a className="mr-8">رمزارزها</a>
          </Link>
          <Link href="/markets">
            <a className="mr-8">بازارها</a>
          </Link>
        </div>
      </div>
      {/* left */}
      <div>
        <Link href="/login">
          <a>
            <button className="text-[#CB9633]">ورود</button>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <button className="text-white bg-yellow py-2.5 px-5 rounded-lg  mr-7">
              ثبت نام
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavDesktop;
