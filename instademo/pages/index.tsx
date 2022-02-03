import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0 Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header/>

      {/* Feed*/}
      <Feed />
      {/*Model*/}

    </div>
  )
}
