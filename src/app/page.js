"use client";
import Link from "next/link";
import Avatar from "./components/Avatar";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

import Footer from "./components/Footer";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { monoton } from "./layout";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value; // search input value

    if (!term) return; // ignore empty string
    window.location.href = `https://www.google.com/search?q=${term}`;
    // router.push(`/search?q=${term}`); // redirect to search page with query parameter
  };

  const lucky = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    window.location.href = `https://www.google.com/search?q=${term}&btnI=I`;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Header */}
      <header className="w-full flex  justify-between p-4  text-sm text-gray-200 ">
        <div className="flex space-x-4 items-center">
          <Link
            className="link"
            href={"https://about.google/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </Link>
          <Link
            className="link"
            href={"https://store.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Link
            className="link"
            href={"https://mail.google.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gmail
          </Link>
          <Link
            className="link"
            href={"https://www.google.com/imghp"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Images
          </Link>
          {/* <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-500" /> */}
          <Avatar url="/profile.png" />
        </div>
      </header>

      {/* Fin Header */}

      {/* Body */}
      <form className="w-4/5 relative flex flex-col justify-center items-center mt-44 flex-grow">
        <div className="absolute top-[9px] sm:top-[17px] lg:top-[24] flex flex-col items-center justify-center">
          {[
            "bg-gradient-to-r from-red-500 from-20% via-transparent to-red-500 to-80%",
            "bg-gradient-to-r from-orange-400 from-20% via-transparent to-orange-400 to-80%",
            "bg-gradient-to-r from-amber-400 from-20%  via-transparent to-amber-400 to-80%",
            "bg-gradient-to-r from-yellow-300 from-20%  via-transparent to-yellow-300 to-80%",
          ].map((bg, index) => (
            <motion.div
              key={index}
              className={`w-screen h-[3px]  sm:h-[5px]  lg:h-[7px] my-0.5 ${bg} drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2 }}
              style={{ originX: 0.5 }}
            />
          ))}
        </div>

        <div className="z-10 px-5 lg:px-0 rounded-2xl ">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 3.5 }}
            className={`${monoton.variable} font-monoton text-5xl sm:text-7xl lg:text-8xl text-white relative z-10   txt-sh`}
          >
            GOOGLE
          </motion.h2>
        </div>

        {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' height={40} width={300} alt="logo"/> */}
        <div className="flex w-full text-sm sm:text-base mt-3   max-w-md rounded-full border-2 border-gray-200 px-3 py-2 sm:px-5 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl focus-within:shadow-white focus-within:shadow-sm">
          <button
            onClick={search}
            className="focus:outline-none"
          >
            <MagnifyingGlassIcon className="h-5 mr-3 text-gray-300 hover:text-white transition" />
          </button>
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow text-white"
          />
          {/* <MicrophoneIcon className="h-5 text-gray-300" /> */}
        </div>

        <div className="flex flex-col w-1/3 sm:w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 mb-48">
          <button onClick={search} className="btn">
            Google search
          </button>
          <button onClick={lucky} className="btn">
            I&apos;m feeling lucky
          </button>
        </div>
      </form>

      {/* Fin Body */}

      {/* Footer */}
      <Footer />
      {/* Fin Footer */}
    </div>
  );
}
