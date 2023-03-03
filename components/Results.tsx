import React from 'react';
import Link from "next/link";

type Props = {
  results: Product[]
}

const Results = ({results}: Props) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-5 w-full">
      {results.map((result) => (
        <Link href={result.url} key={result.title} className="flex flex-col space-x-4 bg-white rounded-lg shadow-md p-5">
          <img srcSet={result.imageset} alt={result.title} className="object-contain w-full h-40 py-5" />

          <div className="flex flex-col py-5 flex-1">
            <p className="font-bold">
              {result.title}
            </p>
            <p className="text-sm text-gray-500">
              {result.rating} ({result.reviews} reviews)
            </p>
            <div className="flex space-x-2 justify-end flex-1">
              <p className="font-bold text-indigo-500 pt-2 text-xl mt-auto">
                {result.price > 0 ? `$${result.price}` : 'N/A'}
              </p>

              {result.previous_price > 0 && (
                <p className="font-bold text-indigo-500/50 line-through pt-2 text-xl mt-auto">
                  ${result.previous_price}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Results;
// by Rokas with ❤️
