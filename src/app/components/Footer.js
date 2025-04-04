import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-44 grid w-full divide-y-[1px] divide-gray-300 bg-gray-100">
      <div className="px-8 py-3">
        <h3>Acerca de Google</h3>
      </div>
      <div>
        <div>
            <GlobeAmericasIcon className="h-5"/>
          <p>Carbon neutral since 2007</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
