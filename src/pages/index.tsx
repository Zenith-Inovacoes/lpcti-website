import Head from 'next/head'
import About from '@/components/Home/About/About'
import MainSection from '../components/Home/mainSection/mainSection'
import InterestAreas from '../components/Home/interestAreas/interestAreas'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>LPCTI</title>
      </Head>
      <MainSection />
      <InterestAreas />
    </>
  )
}