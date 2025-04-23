"use client";
import Link from "next/link";
import Avatar from "./components/Avatar";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  Square2StackIcon,
  Squares2X2Icon,
  WindowIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
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

    router.push(`/search?q=${term}`); // redirect to search page with query parameter
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <head>
        <title>Google</title>
        <meta name="description" content="Buscador de Google" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Header */}
      <header className="flex  justify-between w-screen p-4 text-sm text-gray-200 ">
        <div className="flex space-x-4 items-center">
          <Link className="link" to="/" href={"/"}>
            About
          </Link>
          <Link className="link" to="/" href={"/"}>
            Store
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <Link className="link" to="/" href={"/"}>
            Gmail
          </Link>
          <Link className="link" to="/" href={"/"}>
            Images
          </Link>
          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-500" />
          <Avatar url="https://i.pravatar.cc/150?img=12" />
        </div>
      </header>

      {/* Fin Header */}

      {/* Body */}
      <form className="w-4/5 relative flex flex-col justify-center items-center mt-44 flex-grow">
        <div className="w-screen absolute top-[9px] sm:top-[17px] lg:top-[24] flex flex-col items-center justify-center">
          {["bg-gradient-to-r from-red-500 from-20% via-transparent to-red-500 to-80%", "bg-gradient-to-r from-orange-400 from-20% via-transparent to-orange-400 to-80%", 
          "bg-gradient-to-r from-amber-400 from-20%  via-transparent to-amber-400 to-80%", "bg-gradient-to-r from-yellow-300 from-20%  via-transparent to-yellow-300 to-80%"].map(
            (bg, index) => (
              <motion.div
                key={index}
                className={`w-full h-[3px]  sm:h-[5px]  lg:h-[7px] my-0.5 ${bg}`}
                initial={{ x: -2000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              />
            )
          )}
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
        <div className="flex w-full mt-3 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-2 border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-300" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow text-white"
          />
          <MicrophoneIcon className="h-5 text-gray-300" />
        </div>

        <div className="flex flex-col w-1/3 sm:w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 mb-48">
          <button onClick={search} className="btn">
            Google search
          </button>
          <button onClick={search} className="btn">
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
