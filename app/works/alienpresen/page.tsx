import { ContactDisplay } from '@/ui/ContactDisplay'
import { InfoDisplay } from '@/ui/InfoDisplay'
import { SectionTitle } from '@/ui/SectionTitle'

import Image from 'next/image'

export default function AlienPresen() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64 pb-16'>
        <SectionTitle title='Alien Presen'>ハッカソンで作成したプレゼン</SectionTitle>
      </div>
        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
        <Image src='/alien_presen_top.png' alt='以前のポートフォリオ' height={700} width={700} className='drop-shadow-xl items-center'/>
        <div>
          <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
            <div className='md:pt-18 dark:text-gray-100'>ハッカソンの最終発表で作成したスライドです。</div>
            <div className='pt-2 dark:text-gray-100'>コンセプトがわかりやすく伝わるよう、随所にアニメーションを施しています。</div>
            <div className='pt-2 dark:text-gray-100'>イラストやアイコンを自然に配置して、理解度を高めてもらえるよう工夫しました。</div>
            <div className='pt-2 dark:text-gray-100 pb-12'>退屈に感じないよう、ストーリー性をもたせました。</div>
          </div>
        </div>
      </div>
      <div className='flex-col justify-center text-center bg-white dark:bg-gray-600 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
          <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px] pt-5'>
            <InfoDisplay title='Gallery'>スライド一覧</InfoDisplay>
          </div>
          <div className='xl:px-32 py-16'>
            <div className='justify-center items-center gap-12 lg:gap-16 xl:gap-24 md:gap-32 px-16 pt-8 w-full pb-8 md:grid-cols-3 duration-200'>
              <iframe src='/alien.pdf' className='w-full h-[100vh]'/>
            </div>
          </div>
        </div>
    </main>
  )
}
