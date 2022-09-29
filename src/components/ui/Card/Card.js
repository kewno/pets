//Card pets-card
import React from 'react';
import './card.scss';
import Button from "../Button/Button";
import Like from "../Like/Like";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import SimpleBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import {NavLink} from "react-router-dom";


const Card = ({id, closeCard, elemSlider, name, location, country, breed, animal, howOld, weight, gender, description, price, ...attr}) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)


    let strPrice;
    let key = 1;

    if (price.length > 0 && price.length < 4) {
        strPrice = price;
    } else if (price.length > 3 && price.length < 7) {
        let diff = price.length - 3;
        strPrice = `${price.substr(-price.length, diff)} ${price.substr(-3)}`
    }


    return (
        <div className="card">
            <div className="card__slider">
                <img src={require('../../../img/ui/pets-card-1.png')} alt='slide' className='card__img'/>
                <div className="card-slider">
                    <NavLink to={'/pets'} className="card-slider__back">
                        <img src={require('../../../img/ui/arrow-left.png')} alt="back" className="card-slider__img"/>
                    </NavLink>
                    {/*<div className="card-slider__back" onClick={() => closeCard()}>*/}
                    {/*    <img src={require('../../../img/ui/arrow-left.png')} alt="back" className="card-slider__img"/>*/}
                    {/*</div>*/}
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}

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
                            prevEl: '.card-navigation .card-navigation_prev',
                            nextEl: '.card-navigation .card-navigation_next',
                        }}

                    >
                        {elemSlider.map(el => {
                            return <SwiperSlide key={key++}>
                                <img src={require(`../../../img/ui/${el}`)} alt='slide' className='card-slider__slide'/>
                            </SwiperSlide>
                        })}
                        <div ref={navigationPrevRef} className='card-navigation card-navigation_prev'>
                            <img src={require(`../../../img/ui/card-navigation.png`)} alt="navigation"/>
                        </div>
                        <div ref={navigationNextRef} className='card-navigation card-navigation_next'>
                            <img src={require(`../../../img/ui/card-navigation.png`)} alt="navigation"/>
                        </div>
                    </Swiper>
                </div>
            </div>

            <div className="card-info">
                <div className="card-info__head">
                    <h2 className="card-info__nick">{`${name},`}</h2>
                    <div className="card-info__location" dangerouslySetInnerHTML={{ __html: location }}/>
                    <h2 className="card-info__country">{country}</h2>
                </div>

                <div className="card-info__breed">
                    <p className="card-info__name">{breed}</p>
                    <p className="card-info__point" />
                    <p className="card-info__animal">{animal}</p>
                </div>

                <div className="card-info__like">
                    <Like id={id}/>
                    {price ?
                        <div className="card-info__price">
                            <img alt='price' src={require('../../../img/ui/money.png')} className="card-info__icon"/>
                            <h4 className="card-info__coll">{`${strPrice} ₽`}</h4>
                        </div>
                        :
                        null
                    }
                </div>

                <div className="card-params">
                    <div className="card-params__elem">
                        <h4 className="card-params__headline">Возраст</h4>
                        <p className="card-params__text">{`${howOld} года`}</p>
                    </div>
                    <div className="card-params__elem">
                        <h4 className="card-params__headline">Вес</h4>
                        <p className="card-params__text">{`${weight} кг`}</p>
                    </div>
                    <div className="card-params__elem">
                        <h4 className="card-params__headline">Пол</h4>
                        <p className="card-params__text">{gender}</p>
                    </div>
                </div>

                <div className="card-description">
                    <h3 className="card-description__headline">Описание</h3>
                    <SimpleBar forceVisible="y" autoHide={true}>
                        <p className="card-description__text">{description}</p>
                    </SimpleBar>

                </div>
                <div className="card-btn">
                    <Button href='/'>{price ? `Купить - ${strPrice} ₽` : 'Приютить'}</Button>
                </div>
            </div>
        </div>
    )
}

export default Card