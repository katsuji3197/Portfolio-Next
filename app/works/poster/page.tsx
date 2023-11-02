import { InfoDisplay } from '@/ui/InfoDisplay'
import { ReadMoreButton } from '@/ui/ReadMoreButton'
import { SectionTitle } from '@/ui/SectionTitle'
import { SkillsDisplay } from '@/ui/SkillsDiaplay'
import { WorksDisplay } from '@/ui/WorksDisplay'
import Image from 'next/image'
import Link from 'next/link'

export default function Poster() {
  return (
    <main className="min-h-screen bg-cyan-50 dark:bg-slate-500">
      <div className='md:flex justify-start md:px-24 lg:px-40 xl:px-[300px] pt-64'>
        <SectionTitle title='Poster'>成果ポスター</SectionTitle>
      </div>
    </main>
  )
}
