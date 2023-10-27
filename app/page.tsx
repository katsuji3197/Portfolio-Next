import { SectionTitle } from '@/ui/SectionTitle'
import { WorksDisplay } from '@/ui/WorksDisplay'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-50">
      <div className='pl-12 xl:pl-48'>
        <Image src="/topcatch.svg" alt="Turn Design into tech" width={300} height={300} className='pt-48 pb-48 md:pb-30'/>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center pb-10'>
        <div className='flex-col justify-center text-center bg-white bg-opacity-70 pt-6 pb-12 w-11/12 shadow-xl'>
          <SectionTitle title='Works'>タップして詳細を確認できます。</SectionTitle>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <WorksDisplay imgsrc='/webmock.png' title='Web' href='/works/cirkithp'>所属している課外活動のホームページデザインを担当しました。</WorksDisplay>
            <WorksDisplay imgsrc='/Alienmock.png' title='UI/UX' href='/works/alien'>ハッカソンに参加し、Webアプリのデザインを作成しました</WorksDisplay>
            <WorksDisplay imgsrc='/posterdisp.png' title='Poster' href='/works/poster'>授業の総まとめとして成果をまとめたポスターをいくつか作成しました</WorksDisplay>
          </div>
          
        </div>
        <Link className="text-gray-100 hover:text-gray-700 flex flex-col flex-wrap justify-centor items-center w-11/12 h-full  p-5 bg-gray-500 bg-opacity-90 text-center shadow-xl hover:bg-sky-100 duration-500 hover:shadow-3xl" href="/works">
            <div className='text-2xl drop-shadow-md'>
              Read More
            </div>
          </Link>
            
      </div>

    </main>
  )
}
