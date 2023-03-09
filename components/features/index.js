import React from 'react'
import i18n from '../../i18n';

function Features() {
  return (
    <div className='container py-5'>
        <div className='row justify-content-center'>
            <div className='col-xl-10 col-12' id='features'>
                <div className='row justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features1.png' alt='deteksi lokasi' width="80%"></img>
                            <h3 className='features-title'>{i18n.t('deteksilokasi')}</h3>
                            <p className='features-text'>{i18n.t('deteksilokasidesc')}</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features2.png' alt='navigasi akurat' width="80%"></img>
                            <h3 className='features-title'>{i18n.t('navigasiakurat')}</h3>
                            <p className='features-text'>{i18n.t('navigasiakuratdesc')}</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 p-3'>
                        <div className='features-card text-center p-3'>
                            <img src='/images/features3.png' alt='instruksi suara' width="70%"></img>
                            <h3 className='features-title'>{i18n.t('instruksisuara')}</h3>
                            <p className='features-text'>{i18n.t('instruksisuaradesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
