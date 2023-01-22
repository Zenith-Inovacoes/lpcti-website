import Head from 'next/head'
import About from '@/components/Home/About/About'
import MainSection from '../components/Home/mainSection/mainSection'
import InterestAreas from '../components/Home/interestAreas/interestAreas'
import PartnersArea from '../components/Home/partners/partners'
import ContactArea from '@/components/Home/contactArea/contactArea'
import SectionTitle from '@/components/SectionTitle'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import Button from '@/components/Button'

import Image from 'next/image'
import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <Head>
        <title>LPCTI</title>
      </Head>
      <MainSection />
      <InterestAreas />
      <About />
      <PartnersArea />
      <ContactArea />
    </>
  )
}