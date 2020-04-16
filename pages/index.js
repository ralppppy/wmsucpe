import Head from "next/head"
import TopHeader from "../components/home/TopHeader"
import HomeHeroSection from "../components/home/HomeHeroSection"
import HomeCard from "../components/home/HomeCard"
import { Row, Col, Typography, Divider, Card, Affix } from "antd"
import LearnSkills from "../components/home/LearnSkills"
import { useEffect } from "react"
import {
   Link,
   Element,
   Events,
   animateScroll as scroll,
   scrollSpy,
   scroller,
} from "react-scroll"
const { Title, Text } = Typography

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
         <Row>
            <Col className="w-100" md={{ span: 24 }}>
               <Element name="Home" className="element">
                  <TopHeader />
               </Element>
               <br />

               <HomeHeroSection />

               <br />
               <Element name="Learn Skills" className="element">
                  <LearnSkills />
               </Element>
               <br />
            </Col>
         </Row>

         <style global jsx>{`
            * {
               margin: 0;
               padding: 0;
            }
            body {
               background-color: white;
            }
            html,
            body,
            div#__next {
               height: 100%;
               width: 100%;
            }
         `}</style>
      </>
   )
}

export default Home
