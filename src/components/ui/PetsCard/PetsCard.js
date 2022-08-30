//PetsCard pets-card
import React from 'react';
import './pets-card.scss';
import Button from "../Button/Button";
import Like from "../Like/Like";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const PetsCard = ({ coll, status, setLike, closeCard, elemSlider, name, location, country, breed, animal, howOld, weight, gender, description, price, ...attr}) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    //let arrPrice = price
    let strPrice;
    //debugger
    if (price.length > 0 && price.length < 4) {
        strPrice = price;
    } else if (price.length > 3 && price.length < 7) {
        let diff = price.length - 3;
        //debugger
        //let many = price.length
        strPrice = `${price.substr(-price.length, diff)} ${price.substr(-3)}`
    }
    // } else if (price > 7  & price < 10) {
    //      let diff = price - 3;
    //      strPrice = `${price[0]} ${price.substr(-3)}`
    //  }


    return (
        <div className="pets-card">
            <div className="pets-card-slider">
                <img src={require('../../../img/pets-card-1.png')} alt='slide' className='pets-card-slider__img'/>
                <div className="card-slider">
                    <div className="card-slider-back" onClick={() => closeCard()}>
                        <img src={require('../../../img/arrow-left.png')} alt="back" className="card-slider-back__img"/>
                    </div>
                    <Swiper
                        // spaceBetween={50}
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
                            prevEl: '.pets-card-navigation .pets-card-navigation__prev',
                            nextEl: '.pets-card-navigation .pets-card-navigation__next',
                        }}

                    >
                        {elemSlider.map(el => {
                            return <SwiperSlide>
                                <img src={require(`../../../img/${el}`)} alt='slide' className='card-slider-slide-img'/>
                            </SwiperSlide>
                        })}
                        <div ref={navigationPrevRef} className='pets-card-navigation pets-card-navigation__prev'>
                            <img src={require(`../../../img/card-navigation.png`)} alt="navigation"/>
                        </div>
                        <div ref={navigationNextRef} className='pets-card-navigation pets-card-navigation__next'>
                            <img src={require(`../../../img/card-navigation.png`)} alt="navigation"/>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="pets-card-info">
                <div className="pets-card-info-head">
                    <h2 className="pets-card-info-head__name">{`${name},`}</h2>
                    <div className="pets-card-info-head__location" dangerouslySetInnerHTML={{ __html: location }}/>
                    <h2 className="pets-card-info-head__country">{country}</h2>
                </div>

                <div className="pets-card-info-breed">
                    <p className="pets-card-info-breed__breed">{breed}</p>
                    <p className="pets-card-info-breed__point" />
                    <p className="pets-card-info-breed__animal">{animal}</p>
                </div>

                <div className="pets-card-info-like">
                    <Like coll={coll} status={status} setLike={setLike}/>
                    {price ?
                            <div className="pets-card-info-like-price">
                                <img src={require('../../../img/money.png')} className="pets-card-info-like-price__icon"/>
                                <h4 className="pets-card-info-like-price__coll">{`${strPrice} ₽`}</h4>
                            </div>
                            :
                            null
                    }
                </div>

                <div className="pets-card-info-params">
                    <div className="pets-card-info-params-elem">
                        <h4 className="pets-card-info-params-elem__headline">Возраст</h4>
                        <p className="pets-card-info-params-elem__text">{`${howOld} года`}</p>
                    </div>
                    <div className="pets-card-info-params-elem">
                        <h4 className="pets-card-info-params-elem__headline">Вес</h4>
                        <p className="pets-card-info-params-elem__text">{`${weight} кг`}</p>
                    </div>
                    <div className="pets-card-info-params-elem">
                        <h4 className="pets-card-info-params-elem__headline">Пол</h4>
                        <p className="pets-card-info-params-elem__text">{gender}</p>
                    </div>
                </div>

                <div className="pets-card-info-description">
                    <h3 className="pets-card-info-description__headline">Описание</h3>
                    <p className="pets-card-info-description__text">{description}</p>
                </div>
                <div className="pets-card-info-btn">
                    <Button href='/'>{price ? `Купить - ${strPrice} ₽` : 'Приютить'}</Button>
                </div>
            </div>
        </div>
    )
}

export default PetsCard
// name='Локи'
// location=''
// country='Германия'
// howOld='2'
// weight='2'
// gender='Мужской'
// description='Кот Локи больше не просит есть. Он просто сидит напротив и смотрит на меня так, будто ждет, что я подам ему еду. Как-то ночью я проснулся от того, что почувствовал, что рядом кто-то есть. Я повернулся, чтобы увидеть, кто это, но там никого не было. Мне было страшно.'
// price