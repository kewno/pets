import React, {useEffect, useState} from "react";
import './main.scss'
import Sidebar from "../ui/Sidebar/Sidebar";
import Headline from "../ui/Headline/Headline";
import DateTime from "../ui/DateTime/DateTime";
import WelcomeBack from "../ui/WelcomeBack/WelcomeBack";
import Progress from "../ui/Progress/Progress";
import {Swiper, SwiperSlide} from "swiper/react";
import Post from "../ui/Post/Post";
import Comment from "../ui/Comment/Comment";
import Users from "../ui/Users/Users";
import Statistics from "../ui/Statistics/Statistics";

const Main = ({...attr}) => {

    const [dateNow, setDate] = useState(getTime())

    useEffect( () => {
        setInterval(()=>{
            setDate(getTime())
        },1000)

    }, [])

    function getTime(){
        let date = new Date(),
            year = (date.getFullYear() < 10) ? '0' + date.getFullYear() : date.getFullYear(),
            month = ("0" + (date.getMonth() + 1)).slice(-2),
            day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
            hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
            minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        return {year, month, day, hours, minutes, seconds}
    }

    let key = 1

    return (
        <div className='main'>
            <Sidebar />
            <div className='main__container'>
                <Headline />
                <div className="main__content main-grid">
                    <div className="main__welcome">
                        <WelcomeBack />
                    </div>
                        <div className="main__progress">
                            <Swiper
                                breakpoints={{
                                    701: {
                                        allowTouchMove: false,
                                        spaceBetween: 40,
                                        slidesPerView: 1
                                    },
                                    300: { //1920
                                        allowTouchMove: true,
                                        spaceBetween: 40,
                                        slidesPerView: 1
                                    }
                                }}
                            >
                                <SwiperSlide>
                                    <Progress
                                        headline='Ежедневный прогресс'
                                        circles={[
                                            {id: 1, headline: 'Прогулка в парке', percent: 10, className : 'cancellation'},
                                            {id: 2, headline: 'Обед', percent: 22, className : 'completed'},
                                            {id: 3, headline: 'Перекус 1/2', percent: 50, className : 'completed-partially'},
                                            {id: 4, headline: 'Игры', percent: 18, className : 'performed'}
                                        ]}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="main__date-time main__date-time_mobile">
                                        <div className="main__time">
                                            <DateTime headline={`${dateNow.hours}:${dateNow.minutes}`} text='На часах у нас' icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            <path d="M11 5V11L15 13" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            </svg>'/>
                                        </div>
                                        <div className="main__date">
                                            <DateTime headline={`${dateNow.day}.${dateNow.month}.${dateNow.year}`} text='На календаре у нас' icon='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            <path d="M13.3334 1.66675V5.00008" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            <path d="M6.66663 1.66675V5.00008" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            <path d="M2.5 8.33325H17.5" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                            </svg>'/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                            <div className="main__date-time">
                                <div className="main__time">
                                    <DateTime headline={`${dateNow.hours}:${dateNow.minutes}`} text='На часах у нас' icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        <path d="M11 5V11L15 13" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        </svg>'/>
                                </div>
                                <div className="main__date">
                                    <DateTime headline={`${dateNow.day}.${dateNow.month}.${dateNow.year}`} text='На календаре у нас' icon='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        <path d="M13.3334 1.66675V5.00008" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        <path d="M6.66663 1.66675V5.00008" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        <path d="M2.5 8.33325H17.5" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/>
                                        </svg>'/>
                                </div>
                            </div>
                            <div className="main__comment-slider">
                                <Swiper
                                    breakpoints={{
                                        1921 : {
                                            spaceBetween: 40,
                                            slidesPerView: 5
                                        },
                                        1700 : { //1920
                                            spaceBetween: 40,
                                            slidesPerView: 4
                                        },
                                        1300 : { //1620
                                            spaceBetween: 20,
                                            slidesPerView: 'auto'//2
                                        },
                                        500 : { //1300
                                            spaceBetween: 20,
                                            slidesPerView: 'auto'
                                        },
                                        300 : { //1300
                                            spaceBetween: 20,
                                            slidesPerView: 1
                                        },
                                    }}
                                >
                                    {[
                                        {id: 1, name: 'Bob', quote: 'Пельмень с мясом.', time: '17:20', text: 'Мой кот постоянно ходит\n' +
                                                '                                                по краю бассейна, как будто ждет, что оттуда выпрыгнет утка.\n' +
                                                '                                                Я его уже не уговариваю.\n' +
                                                '                                                Он так сидит уже несколько лет.'},
                                        {id: 2, img: 'ava-1.png', isOnline: true, name: 'Ynfan', quote: 'Пес – это тоже я.', time: '12:20', text: 'Если собаку гладить против шерсти, то она кусаться будет.'},
                                        {id: 3, name: 'Bob', quote: 'Пельмень с мясом.', time: '17:20', text: 'Мой кот постоянно ходит\n' +
                                                '                                                по краю бассейна, как будто ждет, что оттуда выпрыгнет утка.\n' +
                                                '                                                Я его уже не уговариваю.\n' +
                                                '                                                Он так сидит уже несколько лет.'},
                                        {id: 4, img: 'ava-1.png', isOnline: true, name: 'Ynfan', quote: 'Пес – это тоже я.', time: '12:20', text: 'Если собаку гладить против шерсти, то она кусаться будет.'},
                                        {id: 5, name: 'Bob', quote: 'Пельмень с мясом.', time: '17:20', text: 'Мой кот постоянно ходит\n' +
                                                '                                                по краю бассейна, как будто ждет, что оттуда выпрыгнет утка.\n' +
                                                '                                                Я его уже не уговариваю.\n' +
                                                '                                                Он так сидит уже несколько лет.'},
                                        {id: 6, img: 'ava-1.png', isOnline: true, name: 'Ynfan', quote: 'Пес – это тоже я.', time: '12:20', text: 'Если собаку гладить против шерсти, то она кусаться будет.'}
                                    ].map(el => {
                                        return <SwiperSlide key={key++}>
                                            <Comment id={1} img={el.img} name={el.name} quote={el.quote} time={el.time} isOnline={el.isOnline}>{el.text}</Comment>
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                            </div>
                            <div className="main__posts">
                                <Swiper
                                    breakpoints={{
                                        1700 : { //1920
                                            spaceBetween: 40,
                                            slidesPerView: 2
                                        },
                                        1300 : { //1620
                                            spaceBetween: 20,
                                            slidesPerView: 'auto'
                                        },
                                        500 : { //1300
                                            spaceBetween: 20,
                                            slidesPerView: 'auto'
                                        },
                                        300 : { //1300
                                            spaceBetween: 20,
                                            slidesPerView: 1
                                        }
                                    }}
                                >
                                    {[
                                        {id: 1, img: 'post-1.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
                                        {id: 2, img: 'post-2.png', name: 'Жорик', rank: 'Котенок', rankId : 'cat'},
                                        {id: 3, img: 'post-3.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
                                        {id: 4, img: 'post-4.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'},
                                        {id: 5, img: 'post-5.png', name: 'Bob', rank: 'Котенок', rankId : 'cat'}
                                    ].map(el => {
                                        return <SwiperSlide key={key++}>
                                            <Post
                                                id={el.id}
                                                key={el.id}
                                                img={el.img}
                                                name={el.name}
                                                rank={el.rank}
                                            />
                                        </SwiperSlide>
                                    })}
                                </Swiper>
                            </div>
                            <div className="main__users">
                                <Users users={
                                    [
                                        {name: 'Рома Кошкин'},
                                        {name: 'Toma'},
                                        {name: 'Q'},
                                        {name: 'Yung'},
                                        {name: 'J'},
                                        {name: '6'}
                                    ]}/>
                            </div>
                            <div className="main__statistics">
                                <Statistics
                                    name='Johny'
                                    like='3'
                                    images={['slide-1.png', 'slide-1.png', 'slide-1.png']}
                                />
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Main