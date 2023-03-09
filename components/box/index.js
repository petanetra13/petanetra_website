import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';
import i18n from '../../i18n';

function Box() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-xl-10 col-12'>
                <div data-aos="fade-down" className='box px-4 py-5'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-4 col-md-6 col-12 text-center align-self-center'>
                            <img src='/images/boximg.png' width="90%"></img>
                        </div>
                        <div className='col-lg-7 col-md-6 col-12 p-md-2 p-4 align-self-center'>
                            <h2 className='box-title'>{i18n.t('boxtitle')}</h2>
                            <p className='box-text'>{i18n.t('boxdesc1')} <b>{i18n.t('boxdesc1bold')}</b> {i18n.t('boxdesc2')} <b>{i18n.t('boxdesc2bold')}</b> {i18n.t('boxdesc3')}</p>
                            <Link href="mailto:admin@petanetra.id"><button className='px-4 py-2 box-btn'> {i18n.t('contactus')}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box
