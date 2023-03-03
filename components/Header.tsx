'use client';
import React, {useRef} from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";

const Header = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    if (!input) return;

    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }

    try {
      // Call the api to activate the scraper
      // api/activateScraper
      const response = await fetch('/api/activateScraper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search: input,
        })
      })
    } catch (e) {
      console.error(e);
    }

    // Wait for the scraper to finish and then redirect to the results page

  }

  return (
    <header>
      <form onSubmit={handleSearch} className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto">
        <input ref={inputRef} type="text" className="bg-transparent outline-none flex-1 text-indigo-400 placeholder:text-indigo-300" placeholder="Search for a product on Amazon" />
        <button hidden type="submit">Search</button>
        <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
      </form>
    </header>
  );
};

export default Header;
// by Rokas with ❤️
