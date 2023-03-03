'use client';
import React from 'react';
import {useDocument} from "react-firebase-hooks/firestore";
import {doc} from "@firebase/firestore";
import {db} from "../../../firebase";
import Results from "../../../components/Results";

type Props = {
  params: {
    id: string;
  }
}

const SearchPage = ({params: {id}}: Props) => {
  const [snapshot, loading, error] = useDocument(doc(db, 'searches', id));
  if(loading) return (
    <h1 className="text-center p-10 animate-pulse text-xl text-indigo-600/50">
      Loading...
    </h1>
  )

  if(!snapshot?.exists()) return;

  if(snapshot.data()?.status === 'pending') return (
    <div className="flex flex-col gap-y-5 py-10 items-center justify-between">
      <p className="text-indigo-600 animate-pulse text-center">Scraping results from Amazon...</p>
    </div>
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-7">
        <div className="flex flex-col md:flex-row gap-x-4">
          <h1 className="font-bold">
            Search results for{" "}
            <span className="text-indigo-600">"{snapshot.data()?.search}"</span>
          </h1>
          <p className="text-gray-300">
            {snapshot.data()?.results?.length > 0 && `${snapshot.data()?.length} results found`}
          </p>
        </div>
      </div>

      {
        snapshot.data()?.results?.length > 0 && (
          <Results results={snapshot.data()?.results} />
        )
      }
    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
