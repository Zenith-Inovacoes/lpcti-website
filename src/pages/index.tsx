import Head from 'next/head'
import About from '@/components/Home/About/About'
import MainSection from '../components/Home/mainSection/mainSection'
import InterestAreas from '../components/Home/interestAreas/interestAreas'
import PartnersArea from '../components/Home/partners/partners'
import SectionTitle from '@/components/SectionTitle/Index'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import Button from '@/components/Button'

import Image from 'next/image'
import InstagramIcon from '@/assets/icons/instagram-fill.svg'
import Link from '@/components/Link'

export default function Home() {
  return (
    <>
      <Head>
        <title>LPCTI</title>
      </Head>
      <MainSection />
      <InterestAreas />
      <PartnersArea />
    </>
  )
}