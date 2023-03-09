/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import "swiper/css/navigation"
SwiperCore.use([Navigation]);
import AOS from 'aos';
import i18n from '../../i18n';

const eventsID = [
    {
        id:1,
        name:'PetaNetra menjadi salah satu peserta program Apple Academy & Apple Entrepreneur camp USA 2022',
        src:'/images/event1.jpeg'
    },
    {
        id:2,
        name:'Liputan dari berbagai media',
        src:'/images/event2.jpeg'
    },
    {
        id:3,
        name:'Juara 2 kompetisi Identik Kementrian komunikasi dan informatika 2022',
        src:'/images/event3.jpeg'
    },
    {
        id:4,
        name:'Top 10 Indigo Competition 2022',
        src:'/images/event4.jpeg'
    },
    {
        id:5,
        name:'Top 10 Nexspace Competition [iDEAFEST 2022]',
        src:'/images/event5.jpeg'
    }
]
const eventsEN = [
    {
        id:1,
        name:'PetaNetra as one of the Apple Academy & Apple Entrepreneur camp USA 2022 participant',
        src:'/images/event1.jpeg'
    },
    {
        id:2,
        name:'Highlights from Several Media',
        src:'/images/event2.jpeg'
    },
    {
        id:3,
        name:'Runner up of IDENTIK (Indonesia Communication and Informatics Competition) 2022',
        src:'/images/event3.jpeg'
    },
    {
        id:4,
        name:'Top 10 Indigo Competition 2022',
        src:'/images/event4.jpeg'
    },
    {
        id:5,
        name:'Top 10 Nexspace Competition [iDEAFEST 2022]',
        src:'/images/event5.jpeg'
    }
]
function Events() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='container py-5 mb-5'>
      <h1 className='event-title'>{i18n.t('eventtitle')}</h1>
      <div className="row justify-content-center" data-aos="fade-up">
        <div className='col-xl-10 col-12'>
            {
                i18n.t('eventtitle') == "Events and Awards" ? 
                <Swiper
                slidesPerView={1}
                navigation={true} 
                >
                {eventsEN.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="card">
                            <div className="poster">
                                <img src={item.src} alt={item.name}/>
                            </div>
                            <div className="details">
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                :
                <Swiper
                slidesPerView={1}
                navigation={true} 
                >
                {eventsID.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="card">
                            <div className="poster">
                                <img src={item.src} alt={item.name}/>
                            </div>
                            <div className="details">
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            }           
        </div>
        </div>
    </div>
  )
}

export default Events
