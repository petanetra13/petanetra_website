import Link from 'next/link'
import React from 'react'
import i18n from '../../i18n';

function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='container-fluid'>
        <div className='row justify-content-between'>
          <div className='col-lg-7 col-md-6 col-12 align-self-center hero-left' id='about'>
            <h3 className='hero-title'>Independence Navigation <br></br>For Everyone</h3>
            <p className='hero-text'>{i18n.t('herodesc')}</p>
            <div className='mt-4 hero-download-wrapper'>
              <Link href="https://apps.apple.com/id/app/petanetra-navigasi-tunanetra/id1583207456">
              <img src='/images/hero-download.png' className="hero-download"></img>
              </Link>
            </div>
          </div>
          <div className='col-lg-5 col-md-6 col-12 align-self-baseline hero-right'>
            <img src='/images/mockup.png' width="100%"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
