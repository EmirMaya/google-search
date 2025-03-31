import Image from "next/image";
import Link from "next/link";

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
          <Link className="hover:text-black hover:underline" to="/" href={'/'}>About</Link>
          <Link className="hover:text-black hover:underline" to="/"  href={'/'}>Store</Link>
        </div>

        <div className="flex space-x-4 items-center">
        <Link className="hover:text-black hover:underline" to="/" href={'/'}>Gmail</Link>
        <Link className="hover:text-black hover:underline" to="/"  href={'/'}>Images</Link>
        </div>
      </header>
      {/* Fin Header */}
    </>
  );
}
