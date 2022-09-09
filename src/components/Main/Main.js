import React, {useLayoutEffect} from "react";
import './main.scss'
import Sidebar from "../ui/Sidebar/Sidebar";
import Headline from "../ui/Headline/Headline";
import DateTime from "../ui/DateTime/DateTime";

const Main = ({...attr}) => {
    // useLayoutEffect(() => {
    //     document.documentElement.setAttribute('data-theme', 'dark')
    // })

    return (
        <div className='main'>
            <Sidebar />
            <div className='main__container'>
                <Headline />
                <div className="main__content"></div>
                <DateTime headline='3:46' text='На часах у нас' icon='<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 5V11L15 13" stroke="#EDF2F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>'/>
            </div>
        </div>
    )
}

export default Main