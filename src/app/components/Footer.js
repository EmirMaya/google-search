import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-44 grid w-full divide-y-[1px] divide-gray-200 bg-gray-100 text-sm text-gray-200">
      <div className="px-8 py-3">
        <h3>Acerca de Google</h3>
      </div>
      <div className="grid grid-cols-1 px-8 py-2">
        <div className="flex">
          <GlobeAmericasIcon className="h-5" />
          <p>Carbon neutral since 2007</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap">
          <a
            href="https://ads.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Advertising
          </a>
          <a
            href="https://www.google.com/services/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            How Search Works
          </a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms
          </a>
          <a
            href="https://www.google.com/preferences"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
