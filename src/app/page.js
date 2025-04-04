
import Link from "next/link";
import Avatar from "./components/Avatar";
import {MagnifyingGlassIcon, MicrophoneIcon, Square2StackIcon, Squares2X2Icon, WindowIcon} from "@heroicons/react/24/solid"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <title>Google</title>
        <meta name="description" content="Buscador de Google" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* Header */}
      <header className="flex  justify-between w-screen p-4 text-sm text-gray-700 ">
        <div className="flex space-x-4 items-center">
          <Link className="link" to="/" href={'/'}>About</Link>
          <Link className="link" to="/"  href={'/'}>Store</Link>
        </div>

        <div className="flex space-x-4 items-center">
        <Link className="link" to="/" href={'/'}>Gmail</Link>
        <Link className="link" to="/"  href={'/'}>Images</Link>
        <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100"/>
        <Avatar url='https://i.pravatar.cc/150?img=12' />
        </div>
      </header>

     
      {/* Fin Header */}

      {/* Body */}
      <form className="w-full flex flex-col justify-center items-center mt-44 flex-grow">
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' height={40} width={300} alt="logo"/>
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500"/>
          <input type="text" className="focus:outline-none flex-grow"/>
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn">Google search</button>
          <button className="btn">I&apos;m feeling lucky</button>
        </div>

      </form>
      {/* Fin Body */}
    </>
    
  );
}
