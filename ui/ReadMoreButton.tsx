import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
};

export function ReadMoreButton(props: Props) {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center pb-3 md:pb-5 pt-3'>
      <Link href={props.href} className='flex-col justify-center text-center text-base md:text-xl text-gray-800 dark:text-white border border-gray-900 dark:border-white rounded-full px-5 md:px-8 py-3 md:py-4 hover:border-gray-400 hover:dark:border-gray-200 hover:text-gray-400 hover:dark:text-gray-200 duration-500 hover:px-10'>
          Read More
      </Link>
    </div>
  );
}