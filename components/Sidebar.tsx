import React from 'react';
import {DocumentMagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Sidebar = ({}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600" />
        <h1 className="hidden md:inline-flex text-3xl mt-2">Web Scraper</h1>
        <h2 className="hidden md:inline-flex text-xs italic">Scraping the Unscramble</h2>
      </div>
      <ul>

      </ul>
    </div>
  );
};

export default Sidebar;
// by Rokas with ❤️
