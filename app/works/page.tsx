import { InfoDisplay } from '@/ui/InfoDisplay'
import { SectionTitle } from '@/ui/SectionTitle'
import { SkillsDisplay } from '@/ui/SkillsDiaplay'
import { WorksDisplay } from '@/ui/WorksDisplay'

export default function Works() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64'>
        <SectionTitle title='Works'>作品一覧</SectionTitle>
      </div>
      <div className='flex flex-wrap flex-col justify-center items-center pb-10 pt-48'>
        <div className='flex-col justify-center text-center bg-white dark:bg-gray-600 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
          <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px] pt-5'>
            <InfoDisplay title='Main'>おもな作品</InfoDisplay>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <WorksDisplay imgsrc='/webmock.png' title='CirKit HP' href='/works/cirkithp'>所属する課外活動のホームページデザインを担当しました。</WorksDisplay>
            <WorksDisplay imgsrc='/oldfolio_mac.png' title='Old Folio' href='/works/oldfolio'>本サイトを作成する前のポートフォリオです</WorksDisplay>
            <WorksDisplay imgsrc='/posterdisp.png' title='PD Poster' href='/works/poster'>授業の成果をまとめたポスターをいくつか作成しました</WorksDisplay>
          </div>
          <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
            <WorksDisplay imgsrc='/Alienmock.png' title='Alien UI' href='/works/alien'>ハッカソンに参加し、Webアプリのデザインを作成しました</WorksDisplay>
            <WorksDisplay imgsrc='/alien_presen_top.png' title='Alien Presen' href='/works/alienpresen'>ハッカソンでの成果発表のために、プレゼンテーションを作成しました</WorksDisplay>
            <WorksDisplay imgsrc='/minshoku/mock.png' title='Minshoku Web' href='/works/minshoku'>地元のこども食堂さんのホームページを作成しました。</WorksDisplay>
          </div>
        </div>
      </div>
      <div className='flex-col justify-center text-center bg-white dark:bg-gray-600 dark:bg-opacity-60 bg-opacity-60 pt-6 pb-12 w-full shadow-xl'>
        <div className='md:flex justify-between md:px-28 lg:px-48 xl:px-[240px] pt-5'>
          <InfoDisplay title='Little'>ちょっとした作品</InfoDisplay>
        </div>
        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-16 px-10 pt-10 w-full pb-3'>
          <SkillsDisplay title="名刺" imgsrc="/meishi_me.png">課外活動で使用する仮の名刺を作成しました。</SkillsDisplay>
          <SkillsDisplay title="ロゴ" imgsrc="/rarry_logo.png">授業にて提案したプロダクトのロゴです。</SkillsDisplay>
          <SkillsDisplay title="SAKITO-UI" imgsrc="/sakito.png">アンケートシステム「SAKITO」のUIデザインを提案しました。</SkillsDisplay>
        </div>
      </div>
    </main>
  )
}
