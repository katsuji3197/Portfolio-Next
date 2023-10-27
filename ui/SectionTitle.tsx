import React from 'react';

type Props = {
  title: string;
  children: string;
};

export function SectionTitle(props: Props) {
  return (
    <div className='flex flex-wrap flex-col justify-center items-center pb-3 md:pb-5 md:pt-3'>
      <div className='flex-col justify-center text-center'>
          <p className='text-gray-800 dark:text-white text-3xl lg:text-4xl'>{props.title}</p>
          <p className='text-gray-600 dark:text-gray-100 text-base pt-4'>{props.children}</p>
      </div>  
    </div>
  );
}