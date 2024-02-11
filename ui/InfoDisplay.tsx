import React from 'react';

type Props = {
  title: string;
  children: string;
};

export function InfoDisplay(props: Props) {
  return (
    <div className='w-full lg:w-1/4 bg-blue-100 dark:bg-slate-700 px-1'>
      <div className="flex flex-col items-center  h-full p-5 text-center duration-300 bg-gray-50 dark:bg-slate-600">
        <div className='text-gray-600 dark:text-slate-200 px-5'>
          {props.title}
        </div>
        <div className='text-gray-800 dark:text-slate-50 text-xl sm:text-2xl mt-2 font-medium'>
          {props.children}
        </div>
      </div>
    </div>
  );
}