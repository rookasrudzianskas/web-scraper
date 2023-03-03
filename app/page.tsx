import React from 'react';
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

const HomePage = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">Welcome to the Amazon Web Scraper</h1>
      <h2 className="text-lg italic text-black/50 text-center">
        Go ahead and search for a product on Amazon and we will scrape the data for you.
      </h2>
      <Link href="https://byrookas.com" className="text-lg text-center italic text-black/50">
        https://www.byrookas.com
      </Link>
    </div>
  );
};

export default HomePage;
// by Rokas with ❤️
