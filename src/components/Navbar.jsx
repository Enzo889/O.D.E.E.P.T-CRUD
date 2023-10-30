"use client";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { BiSolidYinYang } from "react-icons/bi";
import DarkMode from "@/components/DarkMode";
import Image from "next/image";
import MusicPlayer from "@/components/Howler";
import React, { useState } from "react";

function Navbar() {
  const { theme, handleChangeTheme } = DarkMode();
  const imageSrc =
    theme === "dark" ? "/INTOXICADOS_LOGO_WHITE.png" : "/INTOXICADOS_LOGO.png";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-opacity-70 backdrop-blur-sm fixed top-0 w-full ${
        isMenuOpen ? "backdrop-blur-md " : ""
      }`}
    >
      <div
        className={`container mx-auto flex justify-between items-center py-3 ${
          isMenuOpen ? "flex-col my-15 gap-y-6 " : ""
        }`}
      >
        <div className={`flex mb-4 ${isMenuOpen ? "mr-14" : ""}`}>
          <button
            onClick={toggleMenu}
            className="focus:outline-none md:pointer-events-none"
          >
            <Image
              src={imageSrc}
              alt="intoxicados_logo"
              width={100}
              height={0}
            />
          </button>
          <Link href="/">
            <h3 className="font-bold text-3xl pt-4 hover:border-b border-black dark:border-white ">
              O.D.E.E.P.T{" "}
            </h3>
          </Link>
        </div>
        <div className={`${isMenuOpen ? "" : "max-md:hidden "}`}>
          <MusicPlayer />
        </div>

        <ul
          className={`flex gap-x-4 text-lg font-bold pt-4 ${
            isMenuOpen ? "flex-col h-screen mr-44 gap-y-10" : "max-sm:hidden"
          }`}
        >
          <div
            className={`flex gap-4 pt-2 pr-2 ${
              isMenuOpen ? "flex-col gap-y-10 " : ""
            }`}
          >
            <li>
              <Link
                href="/new"
                className="text-black dark:text-white hover:border-b border-black dark:border-white  "
              >
                {" "}
                CREAR TAREA
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black dark:text-white hover:border-b border-black dark:border-white "
              >
                {" "}
                INFORMACIÓN
              </Link>
            </li>
          </div>
          <div
            className={`flex gap-4 ${isMenuOpen ? "flex-col gap-y-10" : ""}`}
          >
            <li>
              <button onClick={handleChangeTheme}>
                <BiSolidYinYang className="h-9 w-8 hover:border-b border-black dark:border-white  rounded " />
              </button>
            </li>
            <li>
              <Link
                href="https://github.com/Enzo889/O.D.E.E.P.T-CRUD"
                target="_blank"
              >
                <BiLogoGithub className="h-9 w-8  hover:border-b border-black dark:border-white  rounded " />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
