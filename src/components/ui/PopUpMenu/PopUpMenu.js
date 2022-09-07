// PopUpMenu pop-up-menu
import React, {useEffect} from 'react';
import './popup-menu.scss';
import {createPortal} from "react-dom";
import Icon from "../Icon/Icon";
import {NavLink} from "react-router-dom";
const containerPopUp = document.querySelector('#root')

const PopUpMenu = ({isPopUp, setIsPopUp, elemMenu, ...attr}) => {

    const element = document.createElement('div')

    useEffect(() => {
        containerPopUp.appendChild(element)
        return () => {
            containerPopUp.removeChild(element)
        };
    });

    return (
        createPortal(
            <div className="popup-menu">
                <div className="popup-menu__cross" onClick={() => {setIsPopUp(false)}}>
                    <Icon icon='<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.41418" width="16" height="2" rx="1" transform="rotate(45 1.41418 0)" fill="#EDF2F7"/>
                                <rect y="11.3135" width="16" height="2" rx="1" transform="rotate(-45 0 11.3135)" fill="#EDF2F7"/>
                                </svg>'/>
                </div>
                <div className="popup-menu__elements">
                    {elemMenu.map(el => {
                        //debugger
                        return <NavLink to={el.href} className="popup-menu__elem">
                            <Icon icon={el.icon} background={el.background}/>
                            <p className='popup-menu__text'>{el.text}</p>
                        </NavLink>
                    })}
                </div>
                <div className="popup-menu__logout">
                    <Icon icon='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.519 1.5C7.6845 1.5 6.192 2.9925 6.192 4.827V5.526C6.192 5.8365 6.444 6.0885 6.7545 6.0885C7.065 6.0885 7.317 5.8365 7.317 5.526V4.827C7.317 3.612 8.30475 2.625 9.519 2.625H13.1752C14.388 2.625 15.375 3.612 15.375 4.827V13.1737C15.375 14.388 14.388 15.375 13.1752 15.375H9.51075C8.30175 15.375 7.317 14.391 7.317 13.182V12.4748C7.317 12.1643 7.065 11.9123 6.7545 11.9123C6.444 11.9123 6.192 12.1643 6.192 12.4748V13.182C6.192 15.012 7.6815 16.5 9.51075 16.5H13.1752C15.0082 16.5 16.5 15.0082 16.5 13.1737V4.827C16.5 2.9925 15.0082 1.5 13.1752 1.5H9.519ZM3.45892 6.4155L1.26292 8.60175C1.24333 8.62119 1.22579 8.6414 1.20973 8.6628L1.26292 8.60175C1.23635 8.62795 1.21272 8.65657 1.19222 8.6871C1.18319 8.70093 1.17449 8.71524 1.16642 8.72994C1.15987 8.74142 1.15385 8.75341 1.14826 8.7656C1.14353 8.77636 1.13898 8.78714 1.13477 8.79808C1.12912 8.81233 1.12417 8.82698 1.11982 8.84183C1.11655 8.85353 1.11354 8.86519 1.11091 8.877C1.10755 8.89133 1.10492 8.90574 1.10284 8.92026C1.10167 8.9297 1.10052 8.9396 1.09963 8.94957C1.09791 8.96667 1.09717 8.9833 1.09717 9L1.101 9.0465L1.10254 9.07629C1.10271 9.07757 1.10289 9.07884 1.10307 9.08011L1.09717 9C1.09717 9.04163 1.10178 9.08286 1.11074 9.12294C1.11354 9.13481 1.11655 9.14647 1.11992 9.15799C1.12417 9.17302 1.12912 9.18767 1.13466 9.20209C1.13898 9.21286 1.14353 9.22364 1.14839 9.23423C1.15385 9.24659 1.15987 9.25858 1.16633 9.27034C1.17449 9.28476 1.18319 9.29907 1.1925 9.31293C1.19776 9.32115 1.20354 9.32927 1.20954 9.33724C1.22739 9.36073 1.24685 9.38283 1.26791 9.4033L3.45892 11.5852C3.56842 11.6947 3.71242 11.7495 3.85567 11.7495C3.99967 11.7495 4.14442 11.6947 4.25392 11.5837C4.47292 11.3632 4.47217 11.0078 4.25242 10.7887L3.0225 9.5625H10.6906C11.0011 9.5625 11.2531 9.3105 11.2531 9C11.2531 8.6895 11.0011 8.4375 10.6906 8.4375H3.021L4.25242 7.212C4.47217 6.993 4.47367 6.6375 4.25392 6.417C4.03492 6.1965 3.67942 6.1965 3.45892 6.4155Z" fill="#EDF2F7"/>
                        </svg>'/>
                    <p className="popup-menu__inscription">logout</p>
                </div>

            </div>, element)
        )
}

export default PopUpMenu