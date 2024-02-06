import { InfoDisplay } from "@/ui/InfoDisplay";
import { SectionTitle } from "@/ui/SectionTitle";
import { SkillsDisplay } from "@/ui/SkillsDiaplay";

import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-48'>
        <SectionTitle title='About'>私について</SectionTitle>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full md:pb-3'>
        <Image src='/katsuji_circle.png' alt='丸い自画像' height={300} width={300} className='drop-shadow-xl items-center p-5'/>
        <div>
          <div className='flex-col text-center text-base md:text-lg pl-5 text-gray-800'>
            <div className='pb-5 md:pt-7'>
              <SectionTitle title='中辻 基希'>NAKATSUJI Motoki</SectionTitle>
            </div>
            <div className='md:pt-18 dark:text-gray-100'>幅広い領域のデザインやテクノロジーに興味がある大学生。</div>
            <div className='pt-2 dark:text-gray-100'>課外活動でありながら、株式会社でもある「<Link href="https://cirkit.jp" className='text-sky-800 dark:text-sky-300 hover:text-sky-500 hover:dark:text-sky-200 duration-300 text-lg md:text-2xl'>CirKit</Link>」に所属しています。</div>
            <div className='pt-2 dark:text-gray-100'>デザイナーとして、HPやアプリのデザイン・開発を行っています。</div>
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
              <svg width="300" height="300" viewBox="0 0 249 243" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 p-8'>
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
              <svg width="286" height="173" viewBox="0 0 286 173" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 py-5 lg:py-0 md:p-12 xl:p-0'>
                <path d="M67.4781 45.5579H121.327V49.8032H72.3938V81.9782H118.422V86.2235H72.3938V121.527H121.997V125.772H67.4781V45.5579ZM126.242 45.5579H132.052L157.523 80.861L183.219 45.5579L218.522 0.870361L160.428 84.6594L190.369 125.772H184.336L157.3 88.2344L130.041 125.772H124.231L154.395 84.6594L126.242 45.5579ZM192.603 49.8032V45.5579H254.048V49.8032H225.672V125.772H220.756V49.8032H192.603ZM0 45.5579H6.03281L91.3859 172.47L56.0828 125.772L5.13906 51.5907L4.91563 125.772H0V45.5579ZM253.602 120.186C254.719 120.186 255.389 119.516 255.389 118.398C255.389 117.281 254.719 116.611 253.602 116.611C252.484 116.611 251.814 117.281 251.814 118.398C251.814 119.516 252.708 120.186 253.602 120.186ZM258.517 115.494C258.517 118.398 260.752 120.409 263.88 120.409C267.231 120.409 269.242 118.398 269.242 114.823V102.534H266.561V114.823C266.561 116.834 265.667 117.728 263.88 117.728C262.316 117.728 261.198 116.834 261.198 115.27H258.517V115.494ZM272.594 115.27C272.817 118.398 275.275 120.409 279.297 120.409C283.319 120.409 286 118.398 286 115.047C286 112.366 284.436 111.025 281.084 110.131L279.073 109.684C276.839 109.238 275.945 108.344 275.945 107.227C275.945 105.663 277.286 104.545 279.52 104.545C281.531 104.545 282.872 105.439 283.095 107.227H285.777C285.553 104.322 283.095 102.311 279.52 102.311C275.722 102.311 273.264 104.322 273.264 107.45C273.264 109.908 274.605 111.472 277.733 112.142L279.967 112.589C282.202 113.036 283.319 113.93 283.319 115.27C283.319 116.834 281.755 117.952 279.52 117.952C277.286 117.952 275.498 116.834 275.275 115.27H272.594Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-5 lg:pt-20'>
                本サイトのようなサイトを構築することができます。課外活動のHPでも使用しています。
              </div>
            </div>

            <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px] ">
              <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                サーバー/ネットワーク
              </div>
              <svg width="257" height="173" viewBox="0 0 257 225" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-200 p-12 lg:p-4'>
                <path d="M0 32.1875C0 23.6674 3.38459 15.4963 9.4092 9.4717C15.4338 3.44709 23.6049 0.0625 32.125 0.0625H224.875C233.395 0.0625 241.566 3.44709 247.591 9.4717C253.615 15.4963 257 23.6674 257 32.1875V192.812C257 201.333 253.615 209.504 247.591 215.528C241.566 221.553 233.395 224.938 224.875 224.938H32.125C23.6049 224.938 15.4338 221.553 9.4092 215.528C3.38459 209.504 0 201.333 0 192.812V32.1875ZM152.594 120.531H104.406C102.276 120.531 100.233 121.377 98.7273 122.884C97.2211 124.39 96.375 126.432 96.375 128.562C96.375 130.693 97.2211 132.735 98.7273 134.241C100.233 135.748 102.276 136.594 104.406 136.594H152.594C154.724 136.594 156.767 135.748 158.273 134.241C159.779 132.735 160.625 130.693 160.625 128.562C160.625 126.432 159.779 124.39 158.273 122.884C156.767 121.377 154.724 120.531 152.594 120.531ZM50.5326 114.845C49.7859 115.592 49.1936 116.478 48.7895 117.454C48.3854 118.43 48.1774 119.475 48.1774 120.531C48.1774 121.587 48.3854 122.633 48.7895 123.609C49.1936 124.584 49.7859 125.471 50.5326 126.217C52.0407 127.725 54.086 128.573 56.2188 128.573C57.2748 128.573 58.3204 128.365 59.2961 127.961C60.2717 127.556 61.1582 126.964 61.9049 126.217L94.0299 94.0924C94.7778 93.3463 95.3712 92.4601 95.7761 91.4844C96.181 90.5086 96.3894 89.4626 96.3894 88.4062C96.3894 87.3499 96.181 86.3039 95.7761 85.3281C95.3712 84.3524 94.7778 83.4662 94.0299 82.7201L61.9049 50.5951C61.1582 49.8484 60.2717 49.2561 59.2961 48.852C58.3204 48.4478 57.2748 48.2399 56.2188 48.2399C55.1627 48.2399 54.1171 48.4478 53.1414 48.852C52.1658 49.2561 51.2793 49.8484 50.5326 50.5951C49.7859 51.3418 49.1936 52.2283 48.7895 53.2039C48.3854 54.1796 48.1774 55.2252 48.1774 56.2812C48.1774 57.3373 48.3854 58.3829 48.7895 59.3586C49.1936 60.3342 49.7859 61.2207 50.5326 61.9674L76.9876 88.4062L50.5326 114.845Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-4 lg:pt-12'>
                Linux/UNIXコマンドを叩いてサーバーにデプロイしたり、安全な通信を行うための設定ができます。
              </div>
            </div>
          </div>

          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <SkillsDisplay title="VS Code" imgsrc="/code.svg">コーディングは主にVS Codeを使用しています。</SkillsDisplay>
            <SkillsDisplay title=" MS Office" imgsrc="/office.svg">Power Pointで資料を作成したり、Excelにてデータの管理・分析を行えます。</SkillsDisplay>
            <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
              <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                Notion
              </div>
              <svg width="240" height="240" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-200 p-12 lg:p-4'>
                <path d="M3.104 3.91005C3.688 4.38405 3.906 4.34805 5.002 4.27505L15.334 3.65505C15.554 3.65505 15.371 3.43505 15.298 3.39905L13.582 2.15905C13.253 1.90405 12.815 1.61105 11.976 1.68405L1.971 2.41405C1.607 2.45005 1.534 2.63305 1.679 2.77905L3.104 3.91005ZM3.724 6.31805V17.1881C3.724 17.7731 4.016 17.9911 4.674 17.9551L16.028 17.2981C16.685 17.2621 16.758 16.8601 16.758 16.3861V5.58805C16.758 5.11405 16.576 4.85805 16.174 4.89505L4.308 5.58805C3.87 5.62405 3.724 5.84305 3.724 6.31805ZM14.934 6.90105C15.006 7.22905 14.934 7.55805 14.604 7.59505L14.057 7.70405V15.7291C13.582 15.9851 13.144 16.1311 12.779 16.1311C12.195 16.1311 12.049 15.9481 11.611 15.4011L8.032 9.78305V15.2191L9.165 15.4741C9.165 15.4741 9.165 16.1311 8.251 16.1311L5.732 16.2771C5.659 16.1311 5.732 15.7671 5.988 15.6931L6.645 15.5111V8.32405L5.732 8.25105C5.659 7.92205 5.842 7.44805 6.353 7.41105L9.055 7.23005L12.779 12.9201V7.88705L11.829 7.77805C11.757 7.37605 12.049 7.08505 12.414 7.04805L14.934 6.90205V6.90105ZM1.131 1.42905L11.537 0.663054C12.814 0.553054 13.143 0.627054 13.947 1.21005L17.268 3.54505C17.816 3.94605 17.999 4.05505 17.999 4.49305V17.2981C17.999 18.1011 17.707 18.5751 16.685 18.6481L4.6 19.3781C3.833 19.4141 3.468 19.3051 3.066 18.7941L0.62 15.6201C0.182 15.0361 0 14.5991 0 14.0871V2.70605C0 2.04905 0.291 1.50205 1.131 1.42905Z"/>
              </svg>
              <div className='text-gray-600 dark:text-slate-100 px-5 pt-4 lg:pt-12'>
                ドキュメントやタスクの管理をNotionを使って行なえます。Markdownによる記述も可能です。
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
              <SkillsDisplay title="Davinch Resolve" imgsrc="/davinch.svg">Davinch Resolveを使用して、簡単な動画を作成できます。</SkillsDisplay>
            </div>
            
            <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
              
              <div className="flex flex-col items-center w-11/12 lg:w-1/4 h-full p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 xl:h-[450px]">
                <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8'>
                  WordPress
                </div>
                <svg width="200" height="220" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-200'>
                  <path d="M1.42 10C1.42 8.76 1.69 7.58 2.16 6.5L6.26 17.72C4.80843 17.0192 3.58414 15.9229 2.72793 14.5572C1.87172 13.1915 1.41836 11.6119 1.42 10ZM15.79 9.57C15.79 10.3 15.5 11.15 15.14 12.34L14.28 15.2L11.18 6L12.16 5.9C12.63 5.84 12.57 5.16 12.11 5.19C12.11 5.19 10.72 5.3 9.82 5.3L7.56 5.19C7.1 5.16 7.05 5.87 7.5 5.9L8.41 6L9.75 9.64L7.87 15.27L4.74 6L5.73 5.9C6.19 5.84 6.13 5.16 5.67 5.19C5.67 5.19 4.28 5.3 3.38 5.3L2.83 5.29C4.37 2.96 7 1.42 10 1.42C12.23 1.42 14.27 2.28 15.79 3.67H15.68C14.84 3.67 14.24 4.4 14.24 5.19C14.24 5.9 14.65 6.5 15.08 7.2C15.41 7.77 15.79 8.5 15.79 9.57ZM10.15 10.75L12.79 17.97L12.85 18.09C11.96 18.41 11 18.58 10 18.58C9.16 18.58 8.35 18.46 7.58 18.23L10.15 10.75ZM17.53 5.88C18.2214 7.14298 18.5826 8.56015 18.58 10C18.58 13.16 16.86 15.93 14.31 17.41L16.93 9.84C17.42 8.62 17.59 7.64 17.59 6.77L17.53 5.88ZM10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10 19.54C15.26 19.54 19.54 15.26 19.54 10C19.54 4.74 15.26 0.46 10 0.46C4.74 0.46 0.46 4.74 0.46 10C0.46 15.26 4.74 19.54 10 19.54Z"/>
                </svg>
                <div className='text-gray-600 dark:text-slate-100 px-5 pt-4 lg:pt-12'>
                  WordPressを使用してWebサイトを構築したことがあります。
                </div>
              </div>

              <SkillsDisplay title="C" imgsrc="/c.svg">C言語を使用し、簡単なCUIアプリケーションなどを作成できます。</SkillsDisplay>
              <SkillsDisplay title="MATLAB" imgsrc="/matlab.svg">既存のデータを使用して、統計的な分析をしたことがあります。</SkillsDisplay>
            </div>
          </div>
        </div>

        <div className="w-full pt-10">
          <div className='flex-col justify-center text-center bg-white dark:bg-gray-700 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
            <div className='md:flex justify-between md:px-28 xl:px-[240px]'>
              <div className="text-lg lg:text-3xl text-gray-700 dark:text-gray-300 -translate-y-10">完全に理解した</div>
            </div>
            <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-0 px-10 pt-10 w-full pb-3'>
              
              <div className="flex flex-col items-center w-11/12 lg:w-1/4 p-5 bg-white dark:bg-slate-700 text-center shadow-xl duration-300 :h-[450px]">
                <div className='text-gray-800 dark:text-slate-50 text-xl lg:text-2xl pb-8 lg:-translate-y-10 lg:translate-x-24'>
                  CSS
                </div>
                <div className='text-gray-600 dark:text-slate-100 pt-8 absolute -translate-x-16 lg:-translate-x-64'>
                完全に理解した。
                </div>
              </div>
              
              <Image alt="CSS完全に理解した" src="/css.png" width={180} height={100} className="pb-36 p-8 lg:p-0 absolute left-[-10px] lg:left-[700px]"/>
              

            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
