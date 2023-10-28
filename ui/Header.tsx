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
          <div className='text-base md:text-xl xl:text-2xl pt-2 text-gray-700 dark:text-gray-300'>Folio of NAKATSUJI Motoki</div>
        </div>
      </Link>
      <div className='md:pr-[3rem] xl:pr-[4rem] pt-5'>
        <div className="g-black hidden md:flex md:items-center md:justify-between font-light text-gray-800 bg-white bg-opacity-70 px-10 py-6 rounded-full hover:text-2xl duration-300 drop-shadow-lg dark:bg-gray-700 dark:bg-opacity-75">
            <Link href='/' className='text-base xl:text-xl text-thin hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              H<span className='text-sky-600 dark:text-sky-300'>O</span>ME
            </Link>
            {/* <Link href='/skills' className='pl-6 xl:pl-12 text-base xl:text-xl hover:text-gray-400 hover:text-2xl duration-300 dark:text-white'>
              SK<span className='text-rose-600 dark:text-rose-300'>I</span>LLS
            </Link> */}
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
      <div className="flex pr-[1.5rem] md:hidden pt-3 dark:fill-slate-50">
        <div className="pt-[9px]">
          <button onClick={() => setIsOpen(true)}>
            {/* <Image src="/burger_menu.svg" alt="バーガーメニュー" width={41} height={40} /> */}
            <svg width="40" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50'>
              <path d="M4 0H24C25.0609 0 26.0783 0.421427 26.8284 1.17157C27.5786 1.92172 28 2.93913 28 4C28 5.06087 27.5786 6.07828 26.8284 6.82843C26.0783 7.57857 25.0609 8 24 8H4C2.93913 8 1.92172 7.57857 1.17157 6.82843C0.421427 6.07828 0 5.06087 0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0ZM32 32H52C53.0609 32 54.0783 32.4214 54.8284 33.1716C55.5786 33.9217 56 34.9391 56 36C56 37.0609 55.5786 38.0783 54.8284 38.8284C54.0783 39.5786 53.0609 40 52 40H32C30.9391 40 29.9217 39.5786 29.1716 38.8284C28.4214 38.0783 28 37.0609 28 36C28 34.9391 28.4214 33.9217 29.1716 33.1716C29.9217 32.4214 30.9391 32 32 32ZM4 16H52C53.0609 16 54.0783 16.4214 54.8284 17.1716C55.5786 17.9217 56 18.9391 56 20C56 21.0609 55.5786 22.0783 54.8284 22.8284C54.0783 23.5786 53.0609 24 52 24H4C2.93913 24 1.92172 23.5786 1.17157 22.8284C0.421427 22.0783 0 21.0609 0 20C0 18.9391 0.421427 17.9217 1.17157 17.1716C1.92172 16.4214 2.93913 16 4 16Z"/>
            </svg>
          </button>
        </div>
      </div>
      <MobileBurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
