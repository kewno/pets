import React, {useCallback, useRef} from 'react';
import './statistics.scss';
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Views from "../Views/Views";


const Statistics = ({elemSlider, name, like, images, ...attr}) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className="statistics">
            {/*pets-statistics*/}
            <div className="statistics__info">
                <div className='statistics-slider'>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current

                                // Re-init navigation
                                swiper.navigation.destroy()
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })
                        }}
                        navigation={{
                            prevEl: '.statistics-slider__navigation .statistics-slider__navigation_prev',
                            nextEl: '.statistics-slider__navigation .statistics-slider__navigation_next',
                        }}

                    >
                        {images.map(el => {
                            return <SwiperSlide>
                                <img src={require(`../../../img/ui/${el}`)} alt='slide' className='pets-slider-slide-img'/>
                            </SwiperSlide>
                        })}
                        <div className="statistics__back">

                        </div>
                        <div ref={navigationPrevRef} className='statistics-slider__navigation statistics-slider__navigation_prev'>
                            <img src={require(`../../../img/ui/main-navigation.png`)} alt="navigation"/>
                        </div>
                        <div ref={navigationNextRef} className='statistics-slider__navigation statistics-slider__navigation_next'>
                            <img src={require(`../../../img/ui/main-navigation.png`)} alt="navigation"/>
                        </div>
                    </Swiper>
                </div>
                <div className="statistics-data">
                    <h2 className="statistics-data__name">{name}</h2>
                    <p className="statistics-data__like">{`${like} ??????????`}</p>
                </div>
            </div>
            <div className="statistics-info">
                <div className="statistics-attributes">
                    <div className="statistics-attributes__elem">
                        <p className="statistics-attributes__text">??????????</p>
                        <div className="statistics-attributes__point"/>
                    </div>
                    <div className="statistics-attributes__elem">
                        <p className="statistics-attributes__text">??????????????????</p>
                        <div className="statistics-attributes__point"/>
                    </div>
                </div>
                <div className="statistics-elems">
                    <Views like='60' views='120' number='17' day='????'/>
                    <Views like='160' views='120' number='18' day='????'/>
                    <Views like='100' views='120' number='19' day='????'/>
                    <Views like='80' views='120' number='20' day='????'/>
                    <Views like='310' views='600' number='21' day='????'/>
                    <Views like='100' views='120' number='22' day='????'/>
                    <Views like='2400' views='10000' number='23' day='????'/>
                </div>
            </div>
        </div>
    )
}

export default Statistics