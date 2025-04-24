import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-44 grid w-full divide-y-[1px] divide-gray-200 bg-gray-100 text-sm text-gray-200">
      <div className="px-8 py-3">
        <h3>Acerca de Google</h3>
      </div>
      <div className="grid grid-cols-1">
        <div>
            <GlobeAmericasIcon className="h-5"/>
          <p>Carbon neutral since 2007</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap">
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
