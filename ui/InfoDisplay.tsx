import React from 'react';

type Props = {
  title: string;
  children: string;
};

export function InfoDisplay(props: Props) {
  return (
    <div className="flex flex-col items-center w-full lg:w-1/4 h-full p-5 text-center duration-300">
      <div className='text-gray-600 dark:text-slate-200 px-5'>
        {props.title}
      </div>
      <div className='text-gray-800 dark:text-slate-50 text-xl sm:text-2xl pt-2'>
        {props.children}
      </div>
    </div>
  );
}