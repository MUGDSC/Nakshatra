import Hero from "../components/IndexPage/Hero"
import Navbar from "../components/UI/Navbar"
import About from "../components/IndexPage/About"
import Prizes from "../components/IndexPage/Prizes"
import Events from "../components/IndexPage/Events"
import Speakers from "../components/IndexPage/Speakers"
import Timeline from "../components/IndexPage/Timeline"
import Involved from "../components/IndexPage/Involved"
import Sponsors from "../components/IndexPage/Sponsors"
import FAQ from "../components/IndexPage/FAQ"
import Head from "next/head"
import { useState } from "react"
import Contact from "../components/IndexPage/Contact"
import Footer from "../components/IndexPage/Footer"


export default function Home() {
  const [pageTitle, setPageTitle] = useState('Nakshatra');


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar setPageTitle={setPageTitle} />
      <main>
        <Hero />
        <About />
        <Prizes />
        <Events />
        <Speakers />
        <Timeline />
        <Involved />
        <Sponsors />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
