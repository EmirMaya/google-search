
import Link from "next/link";
import Avatar from "./components/Avatar";
import {WindowIcon} from "@heroicons/react/24/solid"
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
        <WindowIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100"/>
        <Avatar url='https://i.pravatar.cc/150?img=12' />
        </div>
      </header>

     
      {/* Fin Header */}

      {/* Body */}
      <form className="w-full flex justify-center mt-20">
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' height={40} width={300} alt="logo"/>

      </form>
      {/* Fin Body */}
    </>
    
  );
}
