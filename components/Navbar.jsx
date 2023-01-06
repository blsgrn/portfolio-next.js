import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-slate-300">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-10">
        <Image
          src="/../public/assets/unsplash01.jpg"
          alt="/"
          height="125"
          width="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Tech News
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] h-screen sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500">
          <div>
            <div>
              <Image
                src="/../public/assets/unsplash01.jpg"
                alt="/"
                height="125"
                width="50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
