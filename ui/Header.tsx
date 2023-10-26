'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileBurgerMenu } from './MobileBurgerMenu';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="pb-[30px]hidden fixed top-0 z-50 flex w-[100vw] justify-between py-2 md:py-3 xl:py-5">
      <Link href="/" className="item-center flex pl-[27px] hover:opacity-30">
        <Image src="/title.svg" alt="タイトル" width={250} height={33} />
      </Link>
      <div className="g-black hidden bg-opacity-30 md:flex md:items-center md:justify-between md:pr-[3rem] xl:pr-[7rem] font-light text-gray-800">
          <Link href='/' className='text-base xl:text-xl text-thin hover:text-gray-400'>
            H<span className='text-sky-600'>O</span>ME
          </Link>
          <Link href='/skills' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400'>
            SK<span className='text-rose-600'>I</span>LLS
          </Link>
          <Link href='/works' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400'>
            W<span className='text-sky-600'>O</span>RKS
          </Link>
          <Link href='/about' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400'>
            AB<span className='text-sky-600'>O</span>UT
          </Link>
          <Link href='/contact' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400'>
            C<span className='text-sky-600'>O</span>NTACT
          </Link>
      </div>
      <div className="flex pr-[1.5rem] md:hidden pt-6">
        <div className="pt-[9px]">
          <button onClick={() => setIsOpen(true)}>
            <Image src="/burger_menu.svg" alt="バーガーメニュー" width={41} height={40} />
          </button>
        </div>
      </div>
      <MobileBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
