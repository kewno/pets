import React from 'react';
import './menu-pets.scss';
import PetsElem from "./PetsElem/PetsElem";
import {Swiper, SwiperSlide} from "swiper/react";

let key = 1;

const MenuPets = ({elems, ...attr}) => {
    return (
        <div className='menu-pets'>
            {/*{elems.map(el => {*/}
            {/*    return <PetsElem id={el.id} name={el.name} img={el.img} />*/}
            {/*})}*/}
            <Swiper
                //watchOverflow={false}
                //slidesPerView='auto' //slidesPerView={3}
                //spaceBetween={15}
                //slidesPerView={3}
                breakpoints={{
                    751 : {
                        allowTouchMove: false,
                        spaceBetween: 15,
                        slidesPerView: 'auto'
                    },
                    // 500 : {
                    //     //allowTouchMove: true,
                    //     // spaceBetween: 15,
                    //     // slidesPerView: 6
                    // },
                    300 : {
                        allowTouchMove: true,
                        spaceBetween: 15,
                        slidesPerView: 3
                    }
                }}

            >
                {elems.map(el => {
                    //debugger
                    return <SwiperSlide key={key++}>
                                <PetsElem id={el.id} name={el.name} img={el.img} />
                            </SwiperSlide>
                })}
            </Swiper>

        </div>
    )
}

export default MenuPets