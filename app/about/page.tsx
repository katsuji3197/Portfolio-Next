import { InfoDisplay } from "@/ui/InfoDisplay";
import { ReadMoreButton } from "@/ui/ReadMoreButton";
import { SectionTitle } from "@/ui/SectionTitle";
import { SkillsDisplay } from "@/ui/SkillsDiaplay";
import { WorksDisplay } from "@/ui/WorksDisplay";

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-48'>
        <SectionTitle title='About'>私について</SectionTitle>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-24 px-10 pt-5 w-full md:pb-3'>
        <Image src='/katsuji_circle.png' alt='丸い自画像' height={300} width={300} className='drop-shadow-xl items-center'/>
        <div>
          <div className='flex-col text-center text-base md:text-lg pl-5 text-gray-800'>
            <div className='pb-5 md:pt-7'>
              <SectionTitle title='中辻 基希'>NAKATSUJI Motoki</SectionTitle>
            </div>
            <div className='md:pt-18 dark:text-gray-100'>幅位広い領域のデザインやテクノロジーに興味がある大学生。</div>
            <div className='pt-2 dark:text-gray-100'>課外活動でありながら、株式会社でもある「<Link href="https://cirkit.jp" className='text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-2xl'>CirKit</Link>」に所属しています。</div>
            <div className='pt-2 dark:text-gray-100'>デザイナーとして、HPやアプリのデザイン・開発を行っています。</div>
            <div className='pt-2 dark:text-gray-100'></div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center lg:pb-10'>
        <div className='flex-col justify-center text-center pt-6 pb-12 w-full'>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-3 lg:gap-16 px-10 pt-10 w-full lg:pb-3'>
            <InfoDisplay title="学校">金沢工業大学</InfoDisplay>
            <InfoDisplay title="学部">情報フロンティア学部</InfoDisplay>
            <InfoDisplay title="学科・学年">メディア情報学科 2年</InfoDisplay>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-3 lg:gap-16 px-10 pt-3 lg:pt-10 w-full pb-3'>
            <InfoDisplay title="うまれ">石川県珠洲市</InfoDisplay>
            <InfoDisplay title="そだち">石川県金沢市</InfoDisplay>
            <InfoDisplay title="誕生日">2003.05.16</InfoDisplay>
          </div>
          
        </div>
      </div>

      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] lg:pt-8 lg:pb-5'>
        <SectionTitle title='Skills'>使える技術・ツール</SectionTitle>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center pb-10'>
        <div className='flex-col justify-center text-center bg-white dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
          <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px]'>
            <div className="lg:pl-24 text-lg lg:text-3xl text-gray-700 dark:text-gray-300">自信のあるもの・好きなもの</div>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <SkillsDisplay title="Figma" imgsrc="/figma.svg">Figmaを用いてAuto Layoutやコンポーネントを用いたワイヤーフレームの作成ができます。</SkillsDisplay>
            <SkillsDisplay title="Illustrator" imgsrc="/illustrator.svg">Adobe Illustratorを用いて、ポスターの作成や簡単なロゴデザインができます。</SkillsDisplay>
            <SkillsDisplay title="Tailwind CSS" imgsrc="/tailwind.svg">スタイルの記述をTailwind CSSで記述することができます。</SkillsDisplay>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            
            <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
              <div className='text-gray-800 dark:text-slate-50 ttext-xl lg:text-2xl'>
                チーム開発
              </div>
              <svg width="249" height="243" viewBox="0 0 249 243" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 p-8'>
                <path d="M124.5 0.75C108.249 0.75 92.157 3.95089 77.1429 10.1699C62.1289 16.3889 48.4868 25.5043 36.9955 36.9955C13.7879 60.2032 0.75 91.6795 0.75 124.5C0.75 179.198 36.2663 225.604 85.395 242.063C91.5825 243.053 93.5625 239.216 93.5625 235.875V214.961C59.2838 222.386 51.9825 198.379 51.9825 198.379C46.29 184.024 38.2463 180.188 38.2463 180.188C26.985 172.515 39.1125 172.763 39.1125 172.763C51.4875 173.629 58.0463 185.509 58.0463 185.509C68.8125 204.319 87.0037 198.75 94.0575 195.78C95.1712 187.736 98.3888 182.291 101.854 179.198C74.3813 176.104 45.5475 165.461 45.5475 118.313C45.5475 104.576 50.25 93.5625 58.2938 84.7763C57.0563 81.6825 52.725 68.8125 59.5312 52.1063C59.5312 52.1063 69.9263 48.765 93.5625 64.7288C103.339 62.0063 113.981 60.645 124.5 60.645C135.019 60.645 145.661 62.0063 155.438 64.7288C179.074 48.765 189.469 52.1063 189.469 52.1063C196.275 68.8125 191.944 81.6825 190.706 84.7763C198.75 93.5625 203.452 104.576 203.452 118.313C203.452 165.585 174.495 175.98 146.899 179.074C151.354 182.91 155.438 190.459 155.438 201.968V235.875C155.438 239.216 157.418 243.176 163.729 242.063C212.858 225.48 248.25 179.198 248.25 124.5C248.25 108.249 245.049 92.157 238.83 77.1429C232.611 62.1289 223.496 48.4868 212.004 36.9955C200.513 25.5043 186.871 16.3889 171.857 10.1699C156.843 3.95089 140.751 0.75 124.5 0.75Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-8'>
                チームや個人での開発をGithubを使って行うことができます。
              </div>
              <Link href="https://github.com/katsuji3197" className="pt-3 text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-xl">Github - katsuji3197</Link>
            </div>

            <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
              <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                Next.js
              </div>
              <svg width="286" height="173" viewBox="0 0 286 173" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 py-5 lg:py-0'>
                <path d="M67.4781 45.5579H121.327V49.8032H72.3938V81.9782H118.422V86.2235H72.3938V121.527H121.997V125.772H67.4781V45.5579ZM126.242 45.5579H132.052L157.523 80.861L183.219 45.5579L218.522 0.870361L160.428 84.6594L190.369 125.772H184.336L157.3 88.2344L130.041 125.772H124.231L154.395 84.6594L126.242 45.5579ZM192.603 49.8032V45.5579H254.048V49.8032H225.672V125.772H220.756V49.8032H192.603ZM0 45.5579H6.03281L91.3859 172.47L56.0828 125.772L5.13906 51.5907L4.91563 125.772H0V45.5579ZM253.602 120.186C254.719 120.186 255.389 119.516 255.389 118.398C255.389 117.281 254.719 116.611 253.602 116.611C252.484 116.611 251.814 117.281 251.814 118.398C251.814 119.516 252.708 120.186 253.602 120.186ZM258.517 115.494C258.517 118.398 260.752 120.409 263.88 120.409C267.231 120.409 269.242 118.398 269.242 114.823V102.534H266.561V114.823C266.561 116.834 265.667 117.728 263.88 117.728C262.316 117.728 261.198 116.834 261.198 115.27H258.517V115.494ZM272.594 115.27C272.817 118.398 275.275 120.409 279.297 120.409C283.319 120.409 286 118.398 286 115.047C286 112.366 284.436 111.025 281.084 110.131L279.073 109.684C276.839 109.238 275.945 108.344 275.945 107.227C275.945 105.663 277.286 104.545 279.52 104.545C281.531 104.545 282.872 105.439 283.095 107.227H285.777C285.553 104.322 283.095 102.311 279.52 102.311C275.722 102.311 273.264 104.322 273.264 107.45C273.264 109.908 274.605 111.472 277.733 112.142L279.967 112.589C282.202 113.036 283.319 113.93 283.319 115.27C283.319 116.834 281.755 117.952 279.52 117.952C277.286 117.952 275.498 116.834 275.275 115.27H272.594Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-5 lg:pt-20'>
                本サイトのようなサイトを構築することができます。課外活動のHPでも使用しています。
              </div>
            </div>

            <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
              <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                サーバー/ネットワーク
              </div>
              <svg width="257" height="225" viewBox="0 0 257 225" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-200 p-12 lg:p-4'>
                <path d="M0 32.1875C0 23.6674 3.38459 15.4963 9.4092 9.4717C15.4338 3.44709 23.6049 0.0625 32.125 0.0625H224.875C233.395 0.0625 241.566 3.44709 247.591 9.4717C253.615 15.4963 257 23.6674 257 32.1875V192.812C257 201.333 253.615 209.504 247.591 215.528C241.566 221.553 233.395 224.938 224.875 224.938H32.125C23.6049 224.938 15.4338 221.553 9.4092 215.528C3.38459 209.504 0 201.333 0 192.812V32.1875ZM152.594 120.531H104.406C102.276 120.531 100.233 121.377 98.7273 122.884C97.2211 124.39 96.375 126.432 96.375 128.562C96.375 130.693 97.2211 132.735 98.7273 134.241C100.233 135.748 102.276 136.594 104.406 136.594H152.594C154.724 136.594 156.767 135.748 158.273 134.241C159.779 132.735 160.625 130.693 160.625 128.562C160.625 126.432 159.779 124.39 158.273 122.884C156.767 121.377 154.724 120.531 152.594 120.531ZM50.5326 114.845C49.7859 115.592 49.1936 116.478 48.7895 117.454C48.3854 118.43 48.1774 119.475 48.1774 120.531C48.1774 121.587 48.3854 122.633 48.7895 123.609C49.1936 124.584 49.7859 125.471 50.5326 126.217C52.0407 127.725 54.086 128.573 56.2188 128.573C57.2748 128.573 58.3204 128.365 59.2961 127.961C60.2717 127.556 61.1582 126.964 61.9049 126.217L94.0299 94.0924C94.7778 93.3463 95.3712 92.4601 95.7761 91.4844C96.181 90.5086 96.3894 89.4626 96.3894 88.4062C96.3894 87.3499 96.181 86.3039 95.7761 85.3281C95.3712 84.3524 94.7778 83.4662 94.0299 82.7201L61.9049 50.5951C61.1582 49.8484 60.2717 49.2561 59.2961 48.852C58.3204 48.4478 57.2748 48.2399 56.2188 48.2399C55.1627 48.2399 54.1171 48.4478 53.1414 48.852C52.1658 49.2561 51.2793 49.8484 50.5326 50.5951C49.7859 51.3418 49.1936 52.2283 48.7895 53.2039C48.3854 54.1796 48.1774 55.2252 48.1774 56.2812C48.1774 57.3373 48.3854 58.3829 48.7895 59.3586C49.1936 60.3342 49.7859 61.2207 50.5326 61.9674L76.9876 88.4062L50.5326 114.845Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-4 lg:pt-12'>
                Linux/UNIXコマンドを叩いてサーバーにデプロイしたり、安全な通信を行うための設定ができます。
              </div>
            </div>

          </div>
        </div>

        <div className="w-full pt-10">
          <div className='flex-col justify-center text-center bg-white dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
            <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px]'>
              <div className="lg:pl-24 text-lg lg:text-3xl text-gray-700 dark:text-gray-300">学習中・少しだけ使ったことがある</div>
            </div>
            <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
              <SkillsDisplay title="Maya" imgsrc="/maya.svg">Mayaを使用して、簡単な3Dモデルを作成することができます。</SkillsDisplay>
              <SkillsDisplay title="Python" imgsrc="/python.svg">Pythonを使用して、ソケット通信やBot作成、画像加工などができます。</SkillsDisplay>
              <SkillsDisplay title="Davinch Resolve" imgsrc="/davinch.png">Davinch Resolveを使用して、簡単な動画を作成できます。</SkillsDisplay>
            </div>
          </div>
        </div>

        <div className="w-full pt-10">
          <div className='flex-col justify-center text-center bg-white dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
            <div className='md:flex justify-between md:px-28 xl:px-[240px]'>
              <div className="text-lg lg:text-3xl text-gray-700 dark:text-gray-300">完全に理解した</div>
            </div>
            <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-0 px-10 pt-10 w-full pb-3'>
              
              <div className="flex flex-col items-center w-11/12 lg:w-1/4 p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 :h-[450px]">
                <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                  CSS
                </div>
                <div className='text-gray-600 dark:text-slate-100 pt-2 lg:pt-5 absolute'>
                完全に理解した。
                </div>
              </div>
              
              <Image alt="CSS完全に理解した" src="/css.png" width={180} height={300} className="pb-36 p-8 lg:p-0 absolute left-[-10px] lg:left-[700px]"/>
              

            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
