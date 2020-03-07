import Head from "next/head"
import TopHeader from "../components/home/TopHeader"
import HomeHeroSection from "../components/home/HomeHeroSection"

const Home = () => {
   return (
      <>
         <Head>
            <title>WMSU - Computer Engineering</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <TopHeader />
         <HomeHeroSection />

         <style global jsx>{`
            body {
               background-color: white;
            }
         `}</style>
      </>
   )
}

export default Home
