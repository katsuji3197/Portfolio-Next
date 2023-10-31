import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  imgsrc: string;
  children: string;
};

export function SkillsDisplay(props: Props) {
  return (
    <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
      <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl'>
        {props.title}
      </div>
      <Image src={props.imgsrc} alt={`${props.title}の写真`} width={180} height={180} className='lg:h-[300px] w-auto py-10 fill-gray-800 dark:fill-slate-50'/>
      <div className='text-gray-600 dark:text-slate-100 px-5'>
        {props.children}
      </div>
    </div>
  );
}