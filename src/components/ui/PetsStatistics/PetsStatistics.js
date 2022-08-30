import React, {useCallback, useRef} from 'react';
import './pets-statistics.scss';
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Views from "../../Views/Views";


const PetsStatistics = ({elemSlider, name, like, ...attr}) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className="pets-statistics">
            <div className="pets-slider-info">
                <div className='pets-slider'>
                    <Swiper

                        // install Swiper modules
                        modules={[Navigation]}
                        slidesPerView={1}
                        // navigation={{
                        //     prevEl: navigationPrevRef.current,
                        //     nextEl: navigationNextRef.current,
                        // }}
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
                            prevEl: '.pets-statictics-navigation .pets-statictics-navigation__prev',
                            nextEl: '.pets-statictics-navigation .pets-statictics-navigation__next',
                        }}

                    >
                        {elemSlider.map(el => {
                            return <SwiperSlide>
                                        <img src={require(`../../../img/${el}`)} alt='slide' className='pets-slider-slide-img'/>
                                    </SwiperSlide>
                        })}
                        <div className="pets-statistics-back">

                        </div>
                        <div ref={navigationPrevRef} className='pets-statictics-navigation pets-statictics-navigation__prev'>
                            <img src={require(`../../../img/main-navigation.png`)} alt="navigation"/>
                        </div>
                        <div ref={navigationNextRef} className='pets-statictics-navigation pets-statictics-navigation__next'>
                            <img src={require(`../../../img/main-navigation.png`)} alt="navigation"/>
                        </div>
                    </Swiper>
                </div>
                <div className="pets-info">
                    <h2 className="pets-info__name">{name}</h2>
                    <p className="pets-info__like">{`${like} лайка`}</p>
                </div>
            </div>
            <div className="statistics">
                <div className="statistics-attributes">
                    <div className="statistics-attributes-elem">
                        <p className="statistics-attributes-elem__text">Лайки</p>
                        <div className="statistics-attributes-elem__point"/>
                    </div>
                    <div className="statistics-attributes-elem">
                        <p className="statistics-attributes-elem__text">Просмотры</p>
                        <div className="statistics-attributes-elem__point"/>
                    </div>
                </div>
                <div className="statistics-elems">
                    <Views like='60' views='120' number='17' day='ПН'/>
                    <Views like='60' views='120' number='18' day='ВТ'/>
                    <Views like='60' views='120' number='19' day='СР'/>
                    <Views like='60' views='120' number='20' day='ЧТ'/>
                    <Views like='60' views='120' number='21' day='ПТ'/>
                    <Views like='60' views='120' number='22' day='СБ'/>
                    <Views like='60' views='120' number='23' day='ВС'/>
                </div>
            </div>
        </div>
    )
}

export default PetsStatistics