import Head from 'next/head'
import Box from '../components/box';
import Events from '../components/events';
import Features from '../components/features';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonies from '../components/testimonies';
import Tutorial from '../components/tutorial';
import VideoSection from '../components/video-section';

export default function Home() {
  return (
    <>
     <Head>
        <title>PetaNetra | Independence Navigation for Everyone!</title>
        <meta name="description" content="Dengan teknologi Augmented Reality (AR) dan voice-over, PetaNetra bertujuan untuk menjadi mata bagi teman-teman tunanetra agar dapat bernavigasi secara mandiri di ruang publik indoor atau semi-outdoor." />
        <meta property="og:title" content="Peta Netra | Independence Navigation For Everyone!" />
        <meta property="og:description" content="Dengan teknologi Augmented Reality (AR) dan voice-over, PetaNetra bertujuan untuk menjadi mata bagi teman-teman tunanetra agar dapat bernavigasi secara mandiri di ruang publik indoor atau semi-outdoor." />
        <meta property="og:image" content="/images/LogoRounded.png" />
        <meta property="og:url" content="https://petanetra.id" />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <VideoSection></VideoSection>
      <Features></Features>
      <Tutorial></Tutorial>
      <Testimonies></Testimonies>
      <Box></Box>
      <Events></Events>
      <Footer></Footer>
    </>
  )
}
