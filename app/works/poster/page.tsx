import { ContactDisplay } from '@/ui/ContactDisplay'
import { SectionTitle } from '@/ui/SectionTitle'

export default function Poster() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-64 px-8 md:px-32 py-64 w-full'>
        <div className='flex flex-wrap flex-col justify-center items-center'>
        <SectionTitle title='Poster'>成果ポスター</SectionTitle>
          <div className='pt-16 dark:text-gray-100'>金沢工業大学の独自カリキュラムである、「プロジェクトデザイン」にて作成したポスターです。</div>
          <div className='pt-2 dark:text-gray-100 pb-16'>問題発見から解決に至る過程・方法をチームで実践しながら学ぶ、という内容です。</div>
          <ContactDisplay href='https://www.kanazawa-it.ac.jp/kyoiku/pd/index.html' id="金沢工業大学-プロジェクトデザイン" title='この科目について'>
                <svg width="50" height="50" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 dark:fill-slate-50 hover:fill-gray-500 hover:dark:fill-slate-400 duration-300 px-2'>
                  <path d="M123.423 103.167C124.11 97.5018 124.625 91.8368 124.625 86.0001C124.625 80.1634 124.11 74.4984 123.423 68.8334H152.435C153.808 74.3268 154.667 80.0776 154.667 86.0001C154.667 91.9226 153.808 97.6734 152.435 103.167M108.231 150.89C113.381 141.363 117.329 131.063 120.076 120.333H145.397C137.081 134.653 123.888 145.5 108.231 150.89ZM106.085 103.167H65.9151C65.0568 97.5018 64.5418 91.8368 64.5418 86.0001C64.5418 80.1634 65.0568 74.4126 65.9151 68.8334H106.085C106.858 74.4126 107.458 80.1634 107.458 86.0001C107.458 91.8368 106.858 97.5018 106.085 103.167ZM86.0001 154.323C78.8759 144.023 73.1251 132.608 69.6059 120.333H102.394C98.8751 132.608 93.1243 144.023 86.0001 154.323ZM51.6668 51.6668H26.6034C34.8336 37.3087 48.0171 26.4445 63.6834 21.1101C58.5334 30.6376 54.6709 40.9376 51.6668 51.6668ZM26.6034 120.333H51.6668C54.6709 131.063 58.5334 141.363 63.6834 150.89C48.0499 145.497 34.885 134.648 26.6034 120.333ZM19.5651 103.167C18.1918 97.6734 17.3334 91.9226 17.3334 86.0001C17.3334 80.0776 18.1918 74.3268 19.5651 68.8334H48.5768C47.8901 74.4984 47.3751 80.1634 47.3751 86.0001C47.3751 91.8368 47.8901 97.5018 48.5768 103.167M86.0001 17.5909C93.1243 27.8909 98.8751 39.3926 102.394 51.6668H69.6059C73.1251 39.3926 78.8759 27.8909 86.0001 17.5909ZM145.397 51.6668H120.076C117.39 41.0359 113.412 30.774 108.231 21.1101C124.024 26.5176 137.157 37.4184 145.397 51.6668ZM86.0001 0.166748C38.5342 0.166748 0.166748 38.7918 0.166748 86.0001C0.166748 108.765 9.20988 130.597 25.3068 146.693C33.2771 154.664 42.7393 160.986 53.1531 165.3C63.5669 169.613 74.7283 171.833 86.0001 171.833C108.765 171.833 130.597 162.79 146.693 146.693C162.79 130.597 171.833 108.765 171.833 86.0001C171.833 74.7283 169.613 63.5669 165.3 53.1531C160.986 42.7393 154.664 33.2771 146.693 25.3068C138.723 17.3364 129.261 11.014 118.847 6.70042C108.433 2.38689 97.2719 0.166748 86.0001 0.166748Z"/>
                </svg>
              </ContactDisplay>
        </div>
      </div>

      <div className='bg-white dark:bg-slate-700 pt-12'>
        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
          <iframe src='/PD入門.pdf' className='w-[80vw] h-[115vw] xl:w-[30vw] xl:h-[45vw]'/>
          <div>
            <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
              <SectionTitle title='プロジェクトデザイン入門'>発表ポスター</SectionTitle>
              <div className='pt-8 dark:text-gray-100'>食べ物の画像の彩度を変えることで、食欲が変化するのかの調査行いました。</div>
              <div className='pt-2 dark:text-gray-100'>重要な箇所の色やフォントサイズを変更することで、</div>
              <div className='pt-2 dark:text-gray-100 pb-12'>見る人に伝えたい内容が伝わるようにデザインしました。</div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
          <iframe src='/PD1.pdf' className='w-[80vw] h-[115vw] xl:w-[30vw] xl:h-[46vw]'/>
          <div>
            <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
              <SectionTitle title='プロジェクトデザインⅠ'>発表ポスター</SectionTitle>
              <div className='pt-8 dark:text-gray-100'>以前のポスターの工夫点に加え、イラストと図を用いた説明を追加しました。</div>
              <div className='pt-2 dark:text-gray-100'>ロジックツリーやなぜなぜ分析といった思考の過程を図にまとめ、</div>
              <div className='pt-2 dark:text-gray-100 pb-12'>解決策へのアプローチがわかりやすくなるように工夫しました。</div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
          <iframe src='/pd2.pdf' className='w-[80vw] h-[115vw] xl:w-[30vw] xl:h-[46vw]'/>
          <div>
            <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
              <SectionTitle title='プロジェクトデザインⅡ'>発表ポスター</SectionTitle>
              <div className='pt-8 dark:text-gray-100'>金沢市の課題である、定番観光地への観光客集中の解決案を提案しました。</div>
              <div className='pt-2 dark:text-gray-100'>今までのポスターに施した工夫はもちろん、アプリケーションのデザインを</div>
              <div className='pt-2 dark:text-gray-100 pb-12'>Figmaで行い、それのモックアップを使用し説明を行いました。</div>
              <div className='flex justify-center'>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap flex-col justify-center items-center lg:flex-row gap-6 md:gap-24 px-10 pt-5 w-full pb-12'>
          <iframe src='/pdz.pdf' className='w-[80vw] h-[115vw] xl:w-[30vw] xl:h-[46vw]'/>
          <div>
            <div className='flex-col text-center justify-center items-center g:text-start text-base md:text-lg pl-5 text-gray-800 w-full'>
              <SectionTitle title='プロジェクトデザイン実践'>発表ポスター</SectionTitle>
              <div className='pt-8 dark:text-gray-100'>身の回りの課題を解決するためのアプリケーションを作成しました。</div>
              <div className='pt-2 dark:text-gray-100'>感性工学により様々なWebサイトを印象を集め、それをデータとして</div>
              <div className='pt-2 dark:text-gray-100 pb-12'>様々なサイトの中から希望する印象のサイトを見つけてくれるものです。</div>
              <div className='flex justify-center'>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
