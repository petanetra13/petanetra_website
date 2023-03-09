/* eslint-disable @next/next/link-passhref */
import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import moment from 'moment';
import { Icon } from '@iconify/react';
import i18n from '../../i18n';

function Footer() {
  const router = useRouter();
  var year = moment().format('YYYY');

  return (
    <footer>
        <div className="container footerContainer pt-5">
            <div className='row justify-content-center'>
                <div className='col-xl-10 col-12'>
                <div className='row justify-content-center'>
                    <div className="col-lg-11 col-12 p-md-2 px-4 py-2">
                        <img className='footer-img' src='/images/logo.png'></img>
                    </div>
                </div>
                <div className='row justify-content-center pt-4'>
                    <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                        <h3 className='footer-title'>Perusahaan</h3>
                        <Link href="#about">
                            <p className='footer-text'>{i18n.t('about')}</p>
                        </Link>
                        <Link href="#features">
                            <p className='footer-text'>{i18n.t('features')}</p>
                        </Link>
                        <Link href="/partner">
                            <p className='footer-text'>{i18n.t('partner')}</p>
                        </Link>
                        <Link href="/article">
                            <p className='footer-text'>{i18n.t('article')}</p>
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                        <h3 className='footer-title'>{i18n.t('product')}</h3>
                        <p className='footer-text'>PetaNetra</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                        <h3 className='footer-title'>{i18n.t('partnership')}</h3>
                        <p className='footer-text'>{i18n.t('owner')}</p>
                        <p className='footer-text'>{i18n.t('community')}</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12 p-md-2 px-4 py-2">
                        <h3 className='footer-title'>{i18n.t('contact')}</h3>
                        <p className='footer-text'>admin@petanetra.id</p>
                    </div>
                    <div className="col-lg-3 col-md-5 col-12 p-md-2 px-4 py-2">
                        <h3 className='footer-title'>{i18n.t('follow')}</h3>
                        <a className="social" target="_blank" href='https://www.facebook.com/petanetra' rel="noreferrer">
                            <Icon icon="ic:baseline-facebook" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                        </a>
                        <a className="social" target="_blank" href='https://www.linkedin.com/company/petanetra/' rel="noreferrer">
                            <Icon icon="mdi:linkedin" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                        </a>
                        <a className="social" target="_blank" href='https://www.instagram.com/petanetra/' rel="noreferrer">
                            <Icon icon="ph:instagram-logo-fill" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                        </a>
                        <a className="social" target="_blank" href='https://www.youtube.com/@petanetra' rel="noreferrer">
                        <Icon icon="ph:youtube-logo-fill" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                        </a>

                        <h3 className='footer-title pt-3'>{i18n.t('download')}</h3>  
                        <a className="social" target="_blank" href='https://apps.apple.com/id/app/petanetra-navigasi-tunanetra/id1583207456' rel="noreferrer">
                            <Icon icon="ic:baseline-apple" className='' style={{cursor:'pointer', marginTop:'-20px'}}/>
                        </a>          
                    </div>
                    
                </div>
                <div className='row justify-content-center'>
                    <div className="col-12 text-center py-4">
                        <span className="copyright">© Copyright {year} by PetaNetra Team | Made by <a href='https://websitesimple.id/' target="_blank" rel="noreferrer" style={{textDecoration:'none', fontWeight:'bold', color:'white'}}>WebsiteSimple.id</a></span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;