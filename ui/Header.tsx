'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="pb-[30px]hidden fixed top-0 z-50 flex w-[100vw] justify-between py-2 md:py-3 xl:py-5">
      <Link href="/" className="item-center flex pl-[27px] hover:opacity-30">
        <Image src="/title.svg" alt="タイトル" width={250} height={33} />
      </Link>
      <div className="g-black hidden bg-opacity-30 md:flex md:items-center md:justify-between md:pr-[3rem] font-light">
          <Link href='/' className='text-xl text-thin hover:text-gray-400'>
            H<span className='text-blue-700'>O</span>ME
          </Link>
          <Link href='/skills' className='pl-5 text-xl hover:text-gray-400'>
            SK<span className='text-red-700'>I</span>LLS
          </Link>
          <Link href='/works' className='pl-5 text-xl hover:text-gray-400'>
            W<span className='text-blue-700'>O</span>RKS
          </Link>
          <Link href='/contact' className='pl-5 text-xl hover:text-gray-400'>
            C<span className='text-blue-700'>O</span>NTACT
          </Link>
      </div>
    </main>
  );
}
