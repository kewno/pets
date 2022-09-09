import React from 'react';
import './headline.scss';
import { useSelector } from 'react-redux';
import Notification from "../Notification/Notification";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import {setTheme} from "../../../redux/reducer";

const Headline = ({setIsPopUp, isPopUp, active, setActive, headline = 'Home', ...attr}) => {
    //setTheme
    let theme = useSelector(store => store.reducer.theme)

    return (
        <div className="headline">
            <div className="headline__menu" onClick={() => setIsPopUp(true)}>
                <Icon icon='<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="2" rx="1" fill="#EDF2F7"/>
                        <rect y="5" width="16" height="2" rx="1" fill="#EDF2F7"/>
                        <rect y="10" width="16" height="2" rx="1" fill="#EDF2F7"/>
                        </svg>'/>
            </div>
            <h1 className="headline__text">{headline}</h1>
            <div className="headline-info">
                <div className="headline-info__toggle">
                    <ToggleTheme active={theme} setTheme={setTheme}/>
                </div>
                <div className="headline-info__notification">
                    <Notification />
                </div>
                <div className="headline-info__avatar">
                    <Avatar img='avatar.png'/>
                </div>
            </div>
            {isPopUp ?
                <PopUpMenu
                    isPopUp={isPopUp}
                    setIsPopUp={setIsPopUp}
                    elemMenu={[
                    {href: '1', icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1808 11.715C11.1498 11.715 11.9386 12.4616 11.9386 13.3792V15.7393C11.9386 15.9365 12.1044 16.0945 12.3169 16.0991H13.851C15.0599 16.0991 16.0427 15.1738 16.0427 14.0367V7.34321C16.037 6.95191 15.8415 6.58363 15.5058 6.33887L10.1993 2.30465C9.48695 1.7668 8.49051 1.7668 7.77578 2.30618L2.50544 6.33734C2.15693 6.58977 1.96134 6.95805 1.95732 7.35625V14.0367C1.95732 15.1738 2.94007 16.0991 4.149 16.0991H5.69759C5.91571 16.0991 6.09278 15.9342 6.09278 15.7316C6.09278 15.6871 6.09841 15.6426 6.10807 15.6004V13.3792C6.10807 12.4669 6.89202 11.7212 7.85385 11.715H10.1808ZM13.851 17.25H12.3024C11.4154 17.2301 10.7313 16.5664 10.7313 15.7393V13.3792C10.7313 13.0961 10.4842 12.8659 10.1808 12.8659H7.85788C7.56088 12.8674 7.31539 13.0984 7.31539 13.3792V15.7316C7.31539 15.7891 7.30734 15.8444 7.29044 15.8966C7.20351 16.6561 6.52259 17.25 5.69759 17.25H4.149C2.27444 17.25 0.75 15.8083 0.75 14.0367V7.35088C0.758049 6.58823 1.12668 5.89003 1.76334 5.43044L7.02322 1.40619C8.18144 0.531524 9.79522 0.531524 10.951 1.40466L16.2487 5.43275C16.8709 5.88466 17.2395 6.58133 17.25 7.33477V14.0367C17.25 15.8083 15.7256 17.25 13.851 17.25Z" fill="#EDF2F7"/>\n' +
                            '</svg>', background: '225deg, #D665FF 0%, #4C6FFF 100%', text: 'Home'},
                    {href: '2', icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<g clip-path="url(#clip0_469_78)">\n' +
                            '<path d="M4.74219 5.42575L4.7423 5.42634C4.87049 6.10319 4.7116 6.72802 4.41585 7.17494C4.11357 7.63176 3.71305 7.84793 3.37435 7.84793C2.54689 7.84793 1.51113 6.95624 1.51113 5.71491C1.51113 5.03076 1.68442 4.33496 1.96871 3.82994C2.26054 3.31155 2.58855 3.11587 2.86925 3.11587C3.23253 3.11587 3.62286 3.31221 3.97999 3.73417C4.33562 4.15437 4.6158 4.75477 4.74219 5.42575Z" stroke="#EDF2F7" stroke-width="1.2"/>\n' +
                            '<path d="M8.38853 1.32057L8.38871 1.32062C8.74435 1.42502 9.07524 1.73011 9.31426 2.24316C9.55183 2.75309 9.66895 3.41405 9.62124 4.09722C9.57232 4.78608 9.26074 5.33806 8.86796 5.6797C8.46741 6.02811 8.03306 6.12339 7.70683 6.02797C7.32004 5.91372 6.91792 5.57979 6.65176 5.08612C6.38962 4.5999 6.28708 4.00715 6.4403 3.42599L6.44041 3.42558C6.61343 2.76742 6.9555 2.14915 7.35377 1.74657C7.76051 1.33542 8.11872 1.24128 8.38853 1.32057Z" stroke="#EDF2F7" stroke-width="1.2"/>\n' +
                            '<path d="M14.2484 6.94732L14.2484 6.94736C13.6068 8.20932 12.3106 8.33169 11.7792 7.8688C11.4593 7.59001 11.2168 7.10141 11.163 6.53118C11.1099 5.96851 11.2468 5.38608 11.6049 4.92887L11.6051 4.92863C12.0149 4.40491 12.5611 3.9912 13.073 3.79693C13.59 3.60068 13.9522 3.6616 14.1766 3.85784L14.1766 3.85785L14.1779 3.85901C14.4735 4.11594 14.6601 4.5483 14.6811 5.12238C14.702 5.69318 14.5537 6.34688 14.2484 6.94732Z" stroke="#EDF2F7" stroke-width="1.2"/>\n' +
                            '<path d="M16.4271 9.03318C16.9071 9.07459 17.1777 9.26128 17.2918 9.50723C17.4417 9.83157 17.4411 10.253 17.2595 10.7228C17.0784 11.1913 16.7319 11.6619 16.2767 12.0286C15.349 12.7743 14.2658 12.3978 13.9913 11.8047L13.9913 11.8046C13.8283 11.4528 13.8035 10.9621 13.9581 10.4819C14.1108 10.0079 14.42 9.60066 14.8536 9.37752L14.8541 9.37727C15.3651 9.11374 15.9486 8.99189 16.4271 9.03318Z" stroke="#EDF2F7" stroke-width="1.2"/>\n' +
                            '<path d="M4.58765 9.38845C3.43679 10.2169 2.7123 11.3207 2.7123 12.4473C2.7123 13.6078 3.34521 14.6888 4.3589 15.5059C5.37273 16.3231 6.71277 16.8272 7.99367 16.8481L4.58765 9.38845ZM4.58765 9.38845C5.7329 8.56401 7.19202 8.09664 8.4503 8.17891M4.58765 9.38845L8.4503 8.17891M8.4503 8.17891C10.1149 8.28971 11.7837 9.80261 12.2575 12.4528C12.4872 13.7423 12.3496 14.8308 11.7702 15.5802C11.2029 16.314 10.0882 16.8794 7.99437 16.8481L8.4503 8.17891Z" stroke="#EDF2F7" stroke-width="1.2"/>\n' +
                            '</g>\n' +
                            '<defs>\n' +
                            '<clipPath id="clip0_469_78">\n' +
                            '<rect width="18" height="18" fill="white"/>\n' +
                            '</clipPath>\n' +
                            '</defs>\n' +
                            '</svg>', background: '225deg, #FFC656 0%, #F16063 100%', text: 'Pets'},
                    {href: '3', icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<g clip-path="url(#clip0_469_84)">\n' +
                            '<path d="M1.125 6H16.875V4.5H1.125V6ZM4 0.75H14C15.7949 0.75 17.25 2.20507 17.25 4V14C17.25 15.7949 15.7949 17.25 14 17.25H4C2.20507 17.25 0.75 15.7949 0.75 14V4C0.75 2.20507 2.20507 0.75 4 0.75Z" stroke="#EDF2F7" stroke-width="1.5"/>\n' +
                            '</g>\n' +
                            '<defs>\n' +
                            '<clipPath id="clip0_469_84">\n' +
                            '<rect width="18" height="18" fill="white"/>\n' +
                            '</clipPath>\n' +
                            '</defs>\n' +
                            '</svg>', background: '225deg, #FFEF5E 0%, #F7936F 100%', text: 'Blog'},
                    {href: '4', icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.01262 13.3807C3.24932 13.6181 3.36783 13.9486 3.33589 14.2823C3.26429 15.0301 3.09939 15.8083 2.88762 16.5313C4.45687 16.1686 5.41527 15.7479 5.85092 15.5271C6.0982 15.4018 6.38304 15.3722 6.6508 15.444C7.39087 15.6424 8.17961 15.75 9 15.75C13.495 15.75 16.875 12.5915 16.875 9C16.875 5.40849 13.495 2.25 9 2.25C4.50495 2.25 1.125 5.40849 1.125 9C1.125 10.6516 1.81947 12.1842 3.01262 13.3807ZM2.45801 17.7738C2.45043 17.7753 2.44284 17.7768 2.43524 17.7783C2.33194 17.7987 2.22662 17.8187 2.1193 17.8384C1.96875 17.8659 1.81422 17.8928 1.65569 17.9187C1.43179 17.9554 1.26041 17.7211 1.34885 17.5122C1.40663 17.3757 1.46359 17.2327 1.51909 17.0843C1.55434 16.9901 1.589 16.8937 1.62291 16.7956C1.62437 16.7914 1.62583 16.7871 1.62729 16.7829C1.906 15.9732 2.13296 15.0425 2.21601 14.1751C0.835944 12.7911 0 10.981 0 9C0 4.65076 4.02944 1.125 9 1.125C13.9706 1.125 18 4.65076 18 9C18 13.3492 13.9706 16.875 9 16.875C8.08115 16.875 7.19446 16.7545 6.35944 16.5306C5.77504 16.8268 4.51613 17.3659 2.45801 17.7738Z" fill="#EDF2F7"/>\n' +
                            '</svg>\n', background: '224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%', text: 'Chat'},
                    {href: '5', icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12 6.15685 10.6569 7.5 9 7.5C7.34315 7.5 6 6.15685 6 4.5C6 2.84315 7.34315 1.5 9 1.5C10.6569 1.5 12 2.84315 12 4.5ZM9 9C11.4853 9 13.5 6.98528 13.5 4.5C13.5 2.01472 11.4853 0 9 0C6.51472 0 4.5 2.01472 4.5 4.5C4.5 6.98528 6.51472 9 9 9ZM18 16.5C18 18 16.5 18 16.5 18H1.5C1.5 18 0 18 0 16.5C0 15 1.5 10.5 9 10.5C16.5 10.5 18 15 18 16.5ZM16.5 16.4948C16.4978 16.1246 16.2693 15.0157 15.2518 13.9982C14.2734 13.0198 12.4337 12 8.99999 12C5.56633 12 3.72654 13.0198 2.74815 13.9982C1.73064 15.0157 1.50215 16.1246 1.50001 16.4948H16.5Z" fill="#EDF2F7"/>\n' +
                            '</svg>', background: '225deg, #67E9F1 0%, #24E795 100%', text: 'Profile'}
                ]}/>
                :
                null
            }

        </div>
    )
}

export default Headline