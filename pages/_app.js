/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/video.css'
import '../styles/features.css'
import '../styles/tutorial.css'
import '../styles/box.css'
import '../styles/event.css'
import '../styles/footer.css'
import '../styles/navbar.css'
import '../styles/testimonies.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "swiper/swiper.min.css";
import i18n from '../i18n';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  if (router.locale) {
    i18n.changeLanguage(router.locale)
  }

  return (
    <>
    <Head>
      {/* Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>

      {/* AOS Animation */}
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      {/* Call Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />

      <link rel="shortcut icon" type="image/x-icon" href="/images/LogoRounded.png"></link>
    </Head>
    <Component {...pageProps} />
    </>
 )
  
}
