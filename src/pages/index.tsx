import Head from 'next/head'
import MainSection from '../components/Home/mainSection/mainSection'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Typography from '@/components/Typography/Typography'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <MainSection />
    </>
  )
}