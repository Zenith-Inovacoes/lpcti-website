import Head from 'next/head'
import NavBar from '../components/Home/navbar/navbar'
import Hamburguer from '@/components/Home/hamburguer/hamburguer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>
        <Hamburguer children={undefined}></Hamburguer>
        <NavBar children={undefined}></NavBar>
        </h1>
    </>
  )
}