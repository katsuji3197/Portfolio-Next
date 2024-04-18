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
          <div className='flex-col flex-wrap text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
          <div className=' items-center pt-4 rounded-2xl my-5'>
            <div className='pt-2 dark:text-gray-100 text-2xl pb-6 '>制作</div>
            <div className='flex flex-col md:flex-row justify-center gap-3 pb-6 px-4 md:px-0'>
              <InfoDisplay title='制作'>チーム制作</InfoDisplay>
              <InfoDisplay title='担当'>デザイナー</InfoDisplay>
            </div>
          </div>
          <div className=' items-center pt-4 rounded-2xl my-5'>
            <div className='pt-2 dark:text-gray-100 text-2xl pb-6'>制作期間</div>
            <div className='flex flex-col md:flex-row justify-center gap-3 pb-6 px-4 md:px-0'>
              <InfoDisplay title='リサーチ'>1週間</InfoDisplay>
              <InfoDisplay title='デザイン制作'>2週間</InfoDisplay>
              <InfoDisplay title='開発期間'>2週間</InfoDisplay>
            </div>
          </div>
            <div className='md:pt-18 dark:text-gray-100'>ハッカソン「<Link href="https://tornado-official.jp/tornado2023/" className='text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-2xl'>Tornado 2023</Link>」に参加した際に作成しました。</div>
            <div className='pt-2 dark:text-gray-100'>「コロナ禍で失われた青春を取り戻す」が開発のテーマでした。</div>
            <div className='pt-2 dark:text-gray-100'>メンバーと話あった結果、今までに出会ったことのなかった人や知識といった、</div>
            <div className='pt-2 dark:text-gray-100 pb-12'>未知なるもの「エイリアン」と出会うことが、青春になると結論づけました。</div>
            <div className='pt-2 dark:text-gray-100'>このサービスのコンセプトは、「未知との出会いを通して、日常にワクワクを提供する」です。</div>
            <div className='pt-2 dark:text-gray-100'>都合のいい時間と場所を選択し、近くの対応カフェで雑談をします。</div>
            <div className='pt-2 dark:text-gray-100'>話題に困らないよう、遭遇したエイリアンのプロフィールが書かれた「交信書」が配布されます。</div>
            <div className='pt-2 dark:text-gray-100 0 pb-12'>遭遇が完了した後、連絡を取ることができるようになります。</div>
            <div className='flex justify-center'>
              <ContactDisplay href='https://www.figma.com/file/pwUQ0DVjFec5Ryzp06EkYL/Alien---Tornado2023-(OPEN)?type=design&node-id=0%3A1&mode=design&t=F582g3hzddQJSzOs-1' id="figma" title='作成したワイヤーフレーム'>
                <svg width="50" height="50" viewBox="0 0 256 384" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 hover:fill-gray-500 hover:dark:fill-slate-400 duration-300 px-2'>
                <g clip-path="url(#clip0_389_60)">
                  <path d="M64 384C99.328 384 128 355.328 128 320V256H64C28.672 256 0 284.672 0 320C0 355.328 28.672 384 64 384Z" fill="#0ACF83"/>
                  <path d="M0 192C0 156.672 28.672 128 64 128H128V256H64C28.672 256 0 227.328 0 192Z" fill="#A259FF"/>
                  <path d="M0 64C0 28.672 28.672 0 64 0H128V128H64C28.672 128 0 99.328 0 64Z" fill="#F24E1E"/>
                  <path d="M128 0H192C227.328 0 256 28.672 256 64C256 99.328 227.328 128 192 128H128V0Z" fill="#FF7262"/>
                  <path d="M256 192C256 227.328 227.328 256 192 256C156.672 256 128 227.328 128 192C128 156.672 156.672 128 192 128C227.328 128 256 156.672 256 192Z" fill="#1ABCFE"/>
                </g>
                <defs>
                  <clipPath id="clip0_389_60">
                    <rect width="256" height="384" fill="white"/>
                  </clipPath>
                </defs>
                </svg>
              </ContactDisplay>
            </div>
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
