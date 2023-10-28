import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  imgsrc: string;
  children: string;
  href: string;
};

export function WorksDisplay(props: Props) {
  return (
    <Link className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl rounded-xl lg:hover:bg-sky-50 duration-300 hover:shadow-3xl xl:h-[450px] lg:hover:w-2/5 lg:hover:dark:bg-slate-500 hover:text-lg" href={props.href}>
      <div className='text-gray-800 dark:text-slate-50 text-2xl'>
        {props.title}
      </div>
      <Image src={props.imgsrc} alt={`${props.title}の写真`} width={300} height={300} className='lg:h-[300px] w-auto py-10'/>
      <div className='text-gray-600 dark:text-slate-100 px-5'>
        {props.children}
      </div>
    </Link>
  );
}