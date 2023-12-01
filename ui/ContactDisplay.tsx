import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  title: string;
  id: string;
  children: ReactNode;
  href: string;
};

export function ContactDisplay(props: Props) {
  return (
    <Link className="flex items-center w-full lg:w-[450px] h-full p-5 bg-gray-50 dark:bg-slate-600 duration-300 shadow-xl gap-3 lg:hover:bg-sky-50 hover:shadow-3xl lg:hover:dark:bg-slate-500" href={props.href}>
      <div>
        {props.children}
      </div>
      <div className='text-gray-800 dark:text-slate-50 text-2xl py-2 text-left'>
        <div className='text-xl md:text-2xl'>
          {props.title}
        </div>
        <div className='text-xs md:text-base pt-2'>
          {props.id}
        </div>
      </div>
    </Link>
  );
}