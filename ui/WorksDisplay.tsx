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
    <Link className="flex flex-col items-center w-4/5 lg:w-1/4 h-full p-5 bg-white text-center shadow-xl rounded-xl hover:bg-cyan-50 duration-500 hover:shadow-3xl xl:h-[450px]" href={props.href}>
      <div className='text-gray-800 text-2xl'>
        {props.title}
      </div>
      <Image src={props.imgsrc} alt={`${props.title}の写真`} width={300} height={300} className='lg:h-[300px] w-auto py-10'/>
      <div className='text-gray-600 px-5'>
        {props.children}
      </div>
    </Link>
  );
}