import React, {useEffect} from 'react'
import AOS from 'aos';
import i18n from '../../i18n';

function Tutorial() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section className='tutorial'>
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-xl-11 col-12'>
                    <div data-aos="fade-up" className='row my-5'>
                        <div className='col-md-4 col-12 text-center'>
                            <img className='tutorial-img' src='/images/tutorial1.png' width="80%"></img>
                        </div>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-center text-md-start'>{i18n.t('tutorial1')} <span className='tutorial-title-bold'>{i18n.t('tutorial1bold')}</span></h2>
                            <p className='tutorial-text text-center text-md-start'>{i18n.t('tutorial1desc')}</p>
                        </div>
                    </div>
                    <div data-aos="fade-up"className='row justify-content-md-end my-5 tuto2'>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-md-end text-center'><span className='tutorial-title-bold'>{i18n.t('tutorial2bold')}</span> {i18n.t('tutorial2')}</h2>
                            <p className='tutorial-text text-md-end text-center'>{i18n.t('tutorial2desc')}</p>
                        </div>
                        <div className='col-md-4 col-12 text-center'>
                            <img className='tutorial-img' src='/images/tutorial2.png' width="80%"></img>
                        </div>
                    </div>
                    <div data-aos="fade-up" className='row my-5'>
                        <div className='col-md-4 col-12 text-center'>
                            <img className='tutorial-img' src='/images/tutorial3.png' width="80%"></img>
                        </div>
                        <div className='col-md-7 col-12 align-self-center'>
                            <h2 className='tutorial-title text-center text-md-start'>{i18n.t('tutorial3')} <span className='tutorial-title-bold'>{i18n.t('tutorial3bold')} </span></h2>
                            <p className='tutorial-text text-center text-md-start'>{i18n.t('tutorial3desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tutorial
