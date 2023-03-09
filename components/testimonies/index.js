import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import i18n from '../../i18n';

const testiEn = [
    {
        id:1,
        name:'-Caroline (blind)-',
        testi:"Very helpful especially those who travel a lot. Hopefully in the future it can be used more by other blind people."
    },
    {
        id:2,
        name:'-Caroline (blind)-',
        testi:"Very helpful especially those who travel a lot. Hopefully in the future it can be used more by other blind people."
    }
]

const testiId = [
    {
        id:1,
        name:'-Caroline (penyandang tunanetra)-',
        testi:"Sangat membantu terutama yang sering bepergian. Semoga kedepannya dapat lebih banyak digunakan lagi oleh tunanetra lainnya."
    },
    {
        id:2,
        name:'-Caroline (penyandang tunanetra)-',
        testi:"Sangat membantu terutama yang sering bepergian. Semoga kedepannya dapat lebih banyak digunakan lagi oleh tunanetra lainnya."
    }
]

function Testimonies() {
  return (
    <div className='container py-5 my-5 '>
        <div className="row justify-content-center" data-aos="fade-up">
            <div className='col-lg-6 col-11'>
                {
                    i18n.t('testititle') == "Discover the impact through the words of" ?
                    <Swiper
                    slidesPerView={1}
                    navigation={false} 
                    >
                    {testiEn.map((item, i) => (
                        <SwiperSlide key={i}>
                             <div className="cardTesti m-4">
                                <img className='openquote' src='/images/openquote.png'></img>
                                <div className='p-5'>
                                    <p className='testi align-self-center'>{item.testi}</p>
                                    <p className='name'>{item.name}</p>
                                </div>
                                <img className='closequote' src='/images/closequote.png'></img>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    :
                    <Swiper
                    slidesPerView={1}
                    navigation={false} 
                    >
                    {testiId.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="cardTesti m-4">
                                <img className='openquote' src='/images/openquote.png'></img>
                                <div className='p-5'>
                                    <p className='testi align-self-center'>{item.testi}</p>
                                    <p className='name'>{item.name}</p>
                                </div>
                                <img className='closequote' src='/images/closequote.png'></img>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                }
                   
            </div>
            <div className='col-lg-4 col-11 align-self-center'>
                <h1 className='titleTesti'>{i18n.t('testititle')} <span className='titleTestiBold'>PetaNetra </span>{i18n.t('users')}</h1>
            </div>
        </div>
    </div>
  )
}

export default Testimonies