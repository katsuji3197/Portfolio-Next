import { ReadMoreButton } from '@/ui/ReadMoreButton'
import { SectionTitle } from '@/ui/SectionTitle'
import { WorksDisplay } from '@/ui/WorksDisplay'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">

      <div className='pl-12 xl:pl-48 pt-48 pb-48 md:pb-30 dark:pl-0'>
        <div>
          <Image src="/topcatch.svg" alt="Turn Design into tech" width={320} height={300} className='dark:bg-gray-200 dark:p-8'/>
        </div>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center pb-10'>
        <div className='flex-col justify-center text-center bg-white dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
          <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px]'>
            <SectionTitle title='Works'>タップして詳細を確認できます。</SectionTitle>
            <ReadMoreButton href='/works'/>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <WorksDisplay imgsrc='/webmock.png' title='Web' href='/works/cirkithp'>所属している課外活動のホームページデザインを担当しました。</WorksDisplay>
            <WorksDisplay imgsrc='/Alienmock.png' title='UI/UX' href='/works/alien'>ハッカソンに参加し、Webアプリのデザインを作成しました</WorksDisplay>
            <WorksDisplay imgsrc='/posterdisp.png' title='Poster' href='/works/poster'>授業の総まとめとして成果をまとめたポスターをいくつか作成しました</WorksDisplay>
          </div>
        </div>
      </div>

      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-10'>
        <SectionTitle title='About'>私について</SectionTitle>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-24 px-10 pt-5 w-full md:pb-3'>
        <Image src='/katsuji_circle.png' alt='丸い自画像' height={300} width={300} className='drop-shadow-xl items-center'/>
        <div>
          <div className='flex-col text-center text-base md:text-lg pl-5 text-gray-800'>
            <div className='pb-5 md:pt-7'>
              <SectionTitle title='中辻 基希'>NAKATSUJI Motoki</SectionTitle>
            </div>
            <div className='md:pt-18 dark:text-gray-100'>金沢工業大学情報フロンティア学部メディア情報学科に所属する2年生。</div>
            <div className='pt-2 dark:text-gray-100'>課外活動でありながら、株式会社でもある「<Link href="https://cirkit.jp" className='text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-2xl'>CirKit</Link>」に所属しています。</div>
            <div className='pt-2 dark:text-gray-100'>UIデザイナーとして、デザインから実装まで担当しています。</div>
          </div>
          <div className='pt-10 text-gray-800 lg:pl-4'>
            <ReadMoreButton href='/about'/>
          </div>
        </div>
      </div>
      
    </main>
  )
}
