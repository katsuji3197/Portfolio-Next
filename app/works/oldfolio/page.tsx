import { GA } from '@/ui/GA'
import { SectionTitle } from '@/ui/SectionTitle'

export default function OldFolio() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <GA/>
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64'>
        <SectionTitle title='Old Folio'>以前のポートフォリオ</SectionTitle>
      </div>
    </main>
  )
}
