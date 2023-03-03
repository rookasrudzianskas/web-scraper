'use client';
import React from 'react';
import {useDocument} from "react-firebase-hooks/firestore";
import {doc} from "@firebase/firestore";
import {db} from "../../../firebase";

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

    </div>
  );
};

export default SearchPage;
// by Rokas with ❤️
