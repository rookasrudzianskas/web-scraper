'use client';
import { DocumentData } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter} from "next/navigation";

type Props = {
  doc: DocumentData
}

const SidebarRow = ({doc}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(!pathname) return;
    setActive(pathname.includes(doc.id));
  }, [])

  return (
    <li className="" onClick={() => router.push(`/search/${doc.id}`)}>
      <div>
        <p className="text-xs md:text-base font-bold">{doc.data().search}</p>
      </div>
    </li>
  );
};

export default SidebarRow;
// by Rokas with ❤️
