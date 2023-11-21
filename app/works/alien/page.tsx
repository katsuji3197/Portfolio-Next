import { ContactDisplay } from '@/ui/ContactDisplay'
import { InfoDisplay } from '@/ui/InfoDisplay'
import { SectionTitle } from '@/ui/SectionTitle'

import Image from 'next/image'
import Link from 'next/link';

export default function Alien() {

  //画像の数
  const numberOfImages: number = 15;

  //画像を表示するための配列
  const images: number[] = Array.from({ length: numberOfImages }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64 pb-16'>
        <SectionTitle title='Alien'>未知との出会いで、日常にワクワクを</SectionTitle>
      </div>
        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
        <Image src='/Alien_top.png' alt='以前のポートフォリオ' height={300} width={300} className='drop-shadow-xl items-center'/>
        <div>
          <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
            <div className='md:pt-18 dark:text-gray-100'>ハッカソン「<Link href="https://tornado-official.jp/tornado2023/" className='text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-2xl'>Tornado 2023</Link>」に参加した際に作成しました。</div>
            <div className='pt-2 dark:text-gray-100'>「コロナ禍で失われた青春を取り戻す」が開発のテーマでした。</div>
            <div className='pt-2 dark:text-gray-100'>メンバーと話あった結果、今までに出会ったことのなかった人や知識といった、</div>
            <div className='pt-2 dark:text-gray-100 pb-12'>未知なるもの「エイリアン」と出会うことが、青春になると結論づけました。</div>
            <div className='pt-2 dark:text-gray-100'>このサービスのコンセプトは、「未知との出会いを通して、日常にワクワクを提供する」です。</div>
            <div className='pt-2 dark:text-gray-100'>都合のいい時間と場所を選択し、近くの対応カフェで雑談をします。</div>
            <div className='pt-2 dark:text-gray-100'>話題に困らないよう、遭遇したエイリアンのプロフィールが書かれた「交信書」が配布されます。</div>
            <div className='pt-2 dark:text-gray-100 0 pb-12'>遭遇が完了した後、連絡を取ることができるようになります。</div>
          </div>
        </div>
      </div>
      <div className='flex-col justify-center text-center bg-white dark:bg-gray-600 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
          <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px] pt-5'>
            <InfoDisplay title='Gallery'>写真一覧</InfoDisplay>
          </div>
          <div className='sm:px-24 xl:px-32 py-16'>
            <div className='flex flex-wrap flex-col justify-center items-center md:flex-row gap-12 lg:gap-16 xl:gap-24 md:gap-32 px-16 pt-8 w-full pb-8 md:grid-cols-3 duration-200'>
            {images.map((imageNumber) => (
              <Image
                key={imageNumber}
                src={`/alien_ui/${imageNumber}.png`} // 画像のパスに注意してください。必要に応じてパスを調整してください。
                alt={`Image ${imageNumber}`}
                height={300}
                width={300}
              />
            ))}
            </div>
          </div>
        </div>
    </main>
  )
}
