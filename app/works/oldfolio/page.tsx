import { ContactDisplay } from '@/ui/ContactDisplay'
import { InfoDisplay } from '@/ui/InfoDisplay'
import { SectionTitle } from '@/ui/SectionTitle'

import Image from 'next/image'
import Link from 'next/link'

export default function CirKitHP() {

  //画像の数
  const numberOfImages: number = 9;

  //画像を表示するための配列
  const images: number[] = Array.from({ length: numberOfImages }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64 pb-16'>
        <SectionTitle title='Old Folio'>以前のポートフォリオ</SectionTitle>
      </div>
        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
        <Image src='/oldfolio_mac.png' alt='以前のポートフォリオ' height={800} width={800} className='drop-shadow-xl items-center'/>
        <div>
          <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
            <div className='md:pt-18 dark:text-gray-100'>大学の授業にてHTML/CSSを学習後、初めて作成したWebサイトです。</div>
            <div className='pt-2 dark:text-gray-100'>レスポンシブ対応よりもデザインを優先して作成したため、</div>
            <div className='pt-2 dark:text-gray-100'>かなり煩雑なレイアウトとコードに仕上がりました。</div>
            <div className='pt-2 dark:text-gray-100 pb-12'>このサイトの反省から、本サイトではレスポンシブ対応に配慮しています。</div>
            <div className='flex justify-center'>
              <ContactDisplay href='https://old.folio.paon.dev' id="old.folio.paon.dev" title='作成したホームページ'>
                <svg width="50" height="50" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 hover:fill-gray-500 hover:dark:fill-slate-400 duration-300 px-2'>
                  <path d="M123.423 103.167C124.11 97.5018 124.625 91.8368 124.625 86.0001C124.625 80.1634 124.11 74.4984 123.423 68.8334H152.435C153.808 74.3268 154.667 80.0776 154.667 86.0001C154.667 91.9226 153.808 97.6734 152.435 103.167M108.231 150.89C113.381 141.363 117.329 131.063 120.076 120.333H145.397C137.081 134.653 123.888 145.5 108.231 150.89ZM106.085 103.167H65.9151C65.0568 97.5018 64.5418 91.8368 64.5418 86.0001C64.5418 80.1634 65.0568 74.4126 65.9151 68.8334H106.085C106.858 74.4126 107.458 80.1634 107.458 86.0001C107.458 91.8368 106.858 97.5018 106.085 103.167ZM86.0001 154.323C78.8759 144.023 73.1251 132.608 69.6059 120.333H102.394C98.8751 132.608 93.1243 144.023 86.0001 154.323ZM51.6668 51.6668H26.6034C34.8336 37.3087 48.0171 26.4445 63.6834 21.1101C58.5334 30.6376 54.6709 40.9376 51.6668 51.6668ZM26.6034 120.333H51.6668C54.6709 131.063 58.5334 141.363 63.6834 150.89C48.0499 145.497 34.885 134.648 26.6034 120.333ZM19.5651 103.167C18.1918 97.6734 17.3334 91.9226 17.3334 86.0001C17.3334 80.0776 18.1918 74.3268 19.5651 68.8334H48.5768C47.8901 74.4984 47.3751 80.1634 47.3751 86.0001C47.3751 91.8368 47.8901 97.5018 48.5768 103.167M86.0001 17.5909C93.1243 27.8909 98.8751 39.3926 102.394 51.6668H69.6059C73.1251 39.3926 78.8759 27.8909 86.0001 17.5909ZM145.397 51.6668H120.076C117.39 41.0359 113.412 30.774 108.231 21.1101C124.024 26.5176 137.157 37.4184 145.397 51.6668ZM86.0001 0.166748C38.5342 0.166748 0.166748 38.7918 0.166748 86.0001C0.166748 108.765 9.20988 130.597 25.3068 146.693C33.2771 154.664 42.7393 160.986 53.1531 165.3C63.5669 169.613 74.7283 171.833 86.0001 171.833C108.765 171.833 130.597 162.79 146.693 146.693C162.79 130.597 171.833 108.765 171.833 86.0001C171.833 74.7283 169.613 63.5669 165.3 53.1531C160.986 42.7393 154.664 33.2771 146.693 25.3068C138.723 17.3364 129.261 11.014 118.847 6.70042C108.433 2.38689 97.2719 0.166748 86.0001 0.166748Z"/>
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
                src={`/oldfolio/${imageNumber}.png`} // 画像のパスに注意してください。必要に応じてパスを調整してください。
                alt={`Image ${imageNumber}`}
                height={400}
                width={400}
              />
            ))}
            </div>
          </div>
        </div>
    </main>
  )
}
