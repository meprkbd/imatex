import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center md:px-20 py-5 px-5 sticky top-0 left-0 backdrop-blur-xl border-b border-gray-600">
      <div className="">
        <Link href={"/"} className="font-extrabold text-3xl">
          Imatex
        </Link>
      </div>

      <div className="">
        <a
          href="https://github.com/meprkbd/imatex"
          target="_blank"
          referrerPolicy="no-referrer"
          className="flex items-center justify-center bg-white text-black text-base font-semibold px-5 py-2 rounded-md gap-1"
        >
          <span>GitHub</span>
          <span>
            <GoArrowUpRight />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
