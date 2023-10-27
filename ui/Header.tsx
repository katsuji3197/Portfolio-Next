'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileBurgerMenu } from './MobileBurgerMenu';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="pb-[30px]hidden fixed top-0 z-50 flex w-[100vw] justify-between py-2 md:py-3 xl:py-5 pl-[27px]">
      <Link href="/" className="item-center flex hover:opacity-30">
        <div className='flex-col pt-4'>
          <div className='text-3xl md:text-4xl xl:text-5xl font-semibold text-black dark:text-white'>F<span className='text-sky-600 dark:text-sky-300'>o</span>lio</div>
          <div className='text-lg md:text-xl xl:text-2xl pt-2 text-gray-700 dark:text-gray-300'>Folio of NAKATSUJI Motoki</div>
        </div>
      </Link>
      <div className='md:pr-[3rem] xl:pr-[4rem] pt-5'>
        <div className="g-black hidden md:flex md:items-center md:justify-between font-light text-gray-800 bg-white px-10 py-6 rounded-full hover:text-2xl duration-300 drop-shadow-lg dark:bg-gray-700 dark:bg-opacity-75">
            <Link href='/' className='text-base xl:text-xl text-thin hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              H<span className='text-sky-600 dark:text-sky-300'>O</span>ME
            </Link>
            <Link href='/skills' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              SK<span className='text-rose-600 dark:text-rose-300'>I</span>LLS
            </Link>
            <Link href='/works' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              W<span className='text-sky-600 dark:text-sky-300'>O</span>RKS
            </Link>
            <Link href='/about' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              AB<span className='text-sky-600 dark:text-sky-300'>O</span>UT
            </Link>
            <Link href='/contact' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              C<span className='text-sky-600 dark:text-sky-300'>O</span>NTACT
            </Link>
        </div>
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
