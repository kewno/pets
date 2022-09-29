import React from "react";
import './pets.scss'
import Sidebar from "../ui/Sidebar/Sidebar";
import Headline from "../ui/Headline/Headline";
import Masonry from "react-masonry-css";
import Post from "../ui/Post/Post";
import MenuPets from "../ui/MenuPets/MenuPets";
import {useSelector} from "react-redux";

const breakpointColumnsObj = {
    default: 5,
    1920: 4,
    1520: 3,//1300: 3,
    1100: 2,//800: 2,
    750: 1 //500: 1
};

const Pets = ({like, setLike, items, ...attr}) => {

    let activePets = useSelector(store => store.reducerTogglePets.active)
    //console.log(activePets)
    //debugger
    return (
        <div className='main pets'>
            <Sidebar />
            <div className='main__container pets__container'>
                <Headline headline={'Питомцы'}/>
                <div className="main__content pets__content">
                    <MenuPets elems={
                        [
                            {id: 'cat', name: 'Коты', img: '<svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M13.8491 9.51119C14.057 9.51119 14.2257 9.34268 14.2257 9.13455V8.39911C14.2257 8.19097 14.057 8.02246 13.8491 8.02246C13.6411 8.02246 13.4724 8.19097 13.4724 8.39911V9.13455C13.4724 9.34268 13.6411 9.51119 13.8491 9.51119Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M13.3481 10.5926H14.3501C14.5581 10.5926 14.7268 10.4241 14.7268 10.216C14.7268 10.0081 14.5581 9.83936 14.3501 9.83936H13.3481C13.1401 9.83936 12.9714 10.0081 12.9714 10.216C12.9714 10.4241 13.1401 10.5926 13.3481 10.5926Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M6.28253 9.51119C6.49047 9.51119 6.65918 9.34268 6.65918 9.13455V8.39911C6.65918 8.19097 6.49047 8.02246 6.28253 8.02246C6.07439 8.02246 5.90588 8.19097 5.90588 8.39911V9.13455C5.90588 9.34268 6.07439 9.51119 6.28253 9.51119Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M5.78155 10.5926H6.78339C6.99153 10.5926 7.16004 10.4241 7.16004 10.216C7.16004 10.0081 6.99153 9.83936 6.78339 9.83936H5.78155C5.57342 9.83936 5.40491 10.0081 5.40491 10.216C5.40491 10.4241 5.57342 10.5926 5.78155 10.5926Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M10.0659 10.5513C10.4383 10.5513 10.7884 10.3951 11.0262 10.123C11.1631 9.96647 11.1472 9.72852 10.9905 9.59159C10.834 9.45466 10.596 9.47075 10.4591 9.62729C10.3643 9.73578 10.2209 9.79796 10.0659 9.79796C9.91097 9.79796 9.76757 9.73578 9.67282 9.62729C9.5359 9.47075 9.29794 9.45466 9.1414 9.59159C8.98466 9.72852 8.96877 9.96647 9.1057 10.123C9.34345 10.3951 9.69342 10.5513 10.0659 10.5513Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M1.39 9.9362C1.39 12.2622 2.31063 13.9341 4.12638 14.906C4.60719 15.1631 5.14705 15.3729 5.75733 15.5372C5.64964 16.1874 5.32635 16.8347 4.98639 17.5146C4.49145 18.5047 3.9304 19.6268 3.96885 20.9621C3.97493 21.1701 4.14854 21.3339 4.35629 21.3276C4.56423 21.3217 4.72783 21.1483 4.72195 20.9404C4.6888 19.7943 5.18256 18.8068 5.66023 17.8517C6.02 17.1321 6.36291 16.4459 6.49356 15.7067C7.11973 15.8288 7.81202 15.9115 8.58002 15.9565C9.56833 16.0141 10.5639 16.0128 11.552 15.9565C12.32 15.9115 13.0121 15.8288 13.6381 15.7067C13.7687 16.4459 14.112 17.1321 14.4718 17.8517C14.9181 18.7438 15.3795 19.6662 15.4105 20.7165C15.416 20.906 15.4065 21.1 15.3834 21.2895C15.2592 22.3024 14.7294 23.3536 13.7754 24.4849C13.5211 24.7863 13.1457 24.9591 12.7447 24.9591H12.4793C13.4705 22.8269 13.1835 20.2086 13.1694 20.0884C13.1455 19.8818 12.9585 19.7337 12.7522 19.7576C12.5454 19.7816 12.3973 19.9683 12.4212 20.1751C12.4246 20.2037 12.7302 22.9823 11.6352 24.9591H10.4425V20.1317C10.4425 19.9238 10.2738 19.7551 10.0658 19.7551C9.85787 19.7551 9.68917 19.9238 9.68917 20.1317V24.9591H8.49645C7.40614 22.9897 7.70628 20.2124 7.7104 20.1749C7.73433 19.9683 7.58623 19.7816 7.37946 19.7576C7.1729 19.7337 6.98595 19.8818 6.96221 20.0884C6.94828 20.2086 6.66109 22.8269 7.65233 24.9591H7.38692C6.98614 24.9591 6.61048 24.7863 6.35644 24.4849C5.72497 23.7364 5.27201 23.0092 5.00973 22.3234C4.93558 22.1289 4.71783 22.0316 4.52342 22.106C4.32922 22.1801 4.23192 22.3979 4.30607 22.5923C4.60268 23.368 5.08506 24.146 5.78048 24.9707C6.17812 25.4421 6.76369 25.7124 7.38692 25.7124H12.7447C13.3681 25.7124 13.9537 25.4421 14.3511 24.9707C14.7896 24.4508 15.147 23.9425 15.4254 23.4425C16.7013 23.2032 17.6731 22.6698 18.3899 21.8143C19.253 20.7842 19.5591 19.5064 19.8551 18.2705C20.0281 17.5476 20.1917 16.8647 20.4561 16.2278C20.5358 16.0355 20.4448 15.8152 20.2525 15.7354C20.0603 15.6557 19.84 15.7468 19.7603 15.939C19.4731 16.6313 19.2948 17.3754 19.1224 18.0949C18.8468 19.246 18.5615 20.4364 17.8126 21.3303C17.3164 21.9226 16.665 22.3326 15.8336 22.5735C15.9678 22.2198 16.0596 21.8696 16.112 21.5196C16.1349 21.3666 16.1512 21.2124 16.159 21.0577C17.2378 20.436 17.5195 19.2604 17.8704 17.795C18.106 16.8112 18.3732 15.6959 18.9425 14.6684C19.5893 13.5014 20.5307 12.6241 21.8211 11.9866C22.136 11.8312 22.5283 11.9648 22.6833 12.2787C22.8388 12.5937 22.7054 12.9857 22.3912 13.141C21.6318 13.5161 21.0323 13.9836 20.5582 14.5703C20.4273 14.732 20.4524 14.9691 20.6143 15.1C20.7761 15.2306 21.0133 15.2055 21.1439 15.0439C21.5482 14.5436 22.0653 14.1423 22.7249 13.8162C23.4026 13.4814 23.6935 12.6375 23.364 11.956C23.3622 11.9524 23.3604 11.9487 23.3587 11.945C23.024 11.2676 22.1793 10.9767 21.4984 11.3059C21.4947 11.3076 21.4911 11.3094 21.4874 11.3112C20.055 12.0189 19.007 12.9976 18.2836 14.3031C17.6645 15.4205 17.3847 16.5887 17.1377 17.6196C16.8486 18.8268 16.6503 19.6529 16.1149 20.158C15.9709 19.1678 15.5366 18.2966 15.1454 17.5146C14.8053 16.8347 14.482 16.1874 14.3743 15.5372C14.9846 15.3729 15.5244 15.1631 16.0051 14.906C17.8208 13.9341 18.7416 12.262 18.7416 9.93601C18.7416 8.94692 18.6337 8.01178 18.4228 7.14C19.9302 4.77438 19.7072 2.33344 19.4339 1.07462C19.3121 0.51318 18.8427 0.0955348 18.2663 0.0351144C18.0433 0.0117702 17.819 0 17.6001 0C15.6433 0 14.3855 0.918664 13.9123 1.33906C12.7298 0.753685 11.406 0.435693 10.0658 0.435693C8.72538 0.435693 7.40163 0.753685 6.21931 1.33906C5.74595 0.918664 4.48792 0 2.53132 0C2.31239 0 2.08837 0.0117702 1.86532 0.0351144C1.28878 0.0955348 0.819541 0.51318 0.697719 1.07462C0.424258 2.33344 0.201409 4.77438 1.70878 7.14C1.4979 8.01178 1.39 8.94692 1.39 9.9362ZM2.8142 2.29597C3.42409 2.34423 3.90039 2.5353 4.22427 2.7146C4.16738 2.76757 4.11166 2.82171 4.05634 2.87644C3.63517 3.2935 3.25872 3.75528 2.93484 4.25179C2.76417 3.52184 2.76123 2.83936 2.8142 2.29597ZM17.1968 4.25179C16.9892 3.9334 16.7611 3.63091 16.5133 3.3447C16.3295 3.13244 16.1349 2.92941 15.9307 2.73677C15.9229 2.72951 15.9152 2.72186 15.9074 2.7146C16.2312 2.5355 16.7075 2.34423 17.3172 2.29617C17.3702 2.83917 17.3673 3.52203 17.1968 4.25179ZM17.6003 0.753293C17.7931 0.753293 17.9907 0.76369 18.1878 0.784287C18.4401 0.81077 18.6451 0.991639 18.6977 1.2345C18.9235 2.27341 19.1132 4.19647 18.127 6.14208C18.1111 6.09735 18.0132 5.85312 17.9868 5.77348C17.9016 5.5624 17.8096 5.35622 17.7104 5.15495C18.1825 3.87749 18.1427 2.66104 18.0211 1.85204C17.9936 1.66901 17.8373 1.53326 17.6523 1.5315L17.6107 1.5313C16.5418 1.5313 15.764 1.89579 15.3006 2.20024C15.0831 2.03291 14.8569 1.87597 14.6221 1.73022C15.1225 1.34729 16.1351 0.753293 17.6003 0.753293ZM15.0878 2.99571C17.1105 4.68552 17.9883 7.36363 17.9883 9.93601C17.9883 11.9913 17.2235 13.3996 15.6498 14.2417C14.2156 15.0092 12.5121 15.1796 10.9115 15.2314C10.8986 15.2318 9.23307 15.2318 9.22012 15.2314C7.61899 15.1792 5.9178 15.0101 4.48184 14.2417C2.90816 13.3996 2.1433 11.9913 2.1433 9.93601C2.1433 7.55195 2.85853 5.14279 4.57502 3.42532C6.01118 1.98838 8.04056 1.18899 10.0658 1.18899C11.9041 1.18899 13.7075 1.84262 15.0878 2.99571ZM1.43375 1.2345C1.48652 0.991639 1.69152 0.81077 1.94379 0.784287C2.14094 0.76369 2.33848 0.753293 2.53132 0.753293C3.98612 0.753293 5.00365 1.34867 5.50741 1.7314C5.27338 1.87695 5.04798 2.0335 4.83102 2.20024C4.36767 1.89579 3.58966 1.5313 2.52092 1.5313L2.47933 1.5315C2.29435 1.53326 2.138 1.66901 2.11053 1.85204C1.98891 2.66104 1.94909 3.87749 2.42127 5.15495C2.32161 5.35701 2.22922 5.56416 2.14388 5.77603C2.11328 5.85175 2.02108 6.09578 2.0046 6.14228C1.01846 4.19647 1.20815 2.27341 1.43375 1.2345Z" fill="#EDF2F7"/>\n' +
                                    '</svg>'},
                            {id: 'dog', name: 'Собаки', img: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M8.13794 8.48236V7.61597C8.13794 7.42181 7.98053 7.2644 7.78638 7.2644C7.59222 7.2644 7.43481 7.42181 7.43481 7.61597V8.48236C7.43481 8.67651 7.59222 8.83392 7.78638 8.83392C7.98053 8.83392 8.13794 8.67651 8.13794 8.48236Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M17.1553 8.48236V7.61597C17.1553 7.42181 16.9979 7.2644 16.8037 7.2644C16.6096 7.2644 16.4521 7.42181 16.4521 7.61597V8.48236C16.4521 8.67651 16.6096 8.83392 16.8037 8.83392C16.9979 8.83392 17.1553 8.67651 17.1553 8.48236Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M11.5386 12.1013C11.8358 12.1013 12.1062 11.9847 12.3069 11.795C12.5076 11.9847 12.7779 12.1013 13.0752 12.1013C14.1718 12.1013 14.534 10.6299 13.8435 10.6299C13.6493 10.6299 13.4919 10.7873 13.4919 10.9814C13.4919 11.2113 13.305 11.3982 13.0752 11.3982C12.8454 11.3982 12.6584 11.2112 12.6584 10.9814C12.6584 10.7873 12.501 10.6299 12.3068 10.6299C12.1127 10.6299 11.9553 10.7873 11.9553 10.9814C11.9553 11.2113 11.7683 11.3982 11.5385 11.3982C11.3087 11.3982 11.1217 11.2112 11.1217 10.9814C11.1217 10.7873 10.9643 10.6299 10.7702 10.6299C10.0809 10.6298 10.4411 12.1013 11.5386 12.1013Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M12.3034 10.2992C13.9306 10.2992 14.4701 8.42944 12.3034 8.42944C10.1358 8.42949 10.6771 10.2992 12.3034 10.2992ZM12.3034 9.13257C12.6887 9.13257 12.9419 9.21746 13.0227 9.2754C12.9822 9.41443 12.7052 9.59616 12.3034 9.59616C11.9016 9.59616 11.6246 9.41443 11.5841 9.2754C11.6649 9.21751 11.9181 9.13257 12.3034 9.13257Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M24.0875 1.82567C24.0654 0.939359 23.409 0.206 22.5266 0.0818285C21.9143 -0.00432767 21.3012 -0.0215308 20.7045 0.0309223C20.5111 0.047891 20.3681 0.218469 20.3851 0.411875C20.4021 0.605281 20.5728 0.748203 20.766 0.731328C21.3097 0.683609 21.8691 0.699313 22.4287 0.778063C22.8383 0.835719 23.1683 1.10689 23.31 1.47041C21.7261 1.48119 20.1194 2.00295 19.0224 3.13817C18.5543 2.67786 18.0372 2.28186 17.4409 1.94309C17.8389 1.65716 18.5307 1.24011 19.4731 0.97025C19.6598 0.916812 19.7678 0.722188 19.7144 0.535484C19.6609 0.348875 19.4663 0.240922 19.2796 0.294266C17.9771 0.667203 17.1057 1.29434 16.745 1.59083C15.4798 1.02636 13.9927 0.741828 12.2951 0.741828C10.5984 0.741828 9.11179 1.02687 7.84659 1.5912C7.23834 1.08819 5.18128 -0.356968 2.06357 0.0818285C1.1811 0.206 0.524714 0.939359 0.502682 1.82567V1.82595C0.465792 3.29473 0.780932 5.93501 3.24271 7.43609C2.85121 9.01521 2.82271 10.5304 2.86935 11.5323C2.8784 11.7262 3.04345 11.8771 3.2369 11.8671C3.43087 11.8581 3.58073 11.6935 3.57168 11.4995C3.49556 9.86464 3.67092 8.513 3.97073 7.40876C4.28465 6.70545 5.17678 1.44491 12.2951 1.44491C16.4558 1.44491 19.4833 3.26276 20.6007 7.35734C21.1156 9.25062 21.0633 11.1031 20.9811 12.0702C20.8765 13.2998 19.7715 14.1912 18.5551 14.0284C17.8019 13.9275 17.0082 13.8852 16.2681 13.9002C18.3395 8.64462 13.7587 9.2772 13.6355 5.00365C13.6148 4.27522 13.027 3.70067 12.2951 3.70067C11.5649 3.70067 10.9752 4.28258 10.9547 5.00351C10.832 9.26215 6.25181 8.63923 8.32214 13.9002C7.04625 13.8744 6.04818 14.0272 6.03492 14.0284C5.08481 14.1555 4.15621 13.626 3.77667 12.7409C3.70012 12.5624 3.49345 12.4799 3.315 12.5563C3.13659 12.6329 3.05395 12.8396 3.13045 13.018C3.58354 14.0746 4.62745 14.7484 5.75128 14.7498C5.79361 15.1285 5.90086 15.4962 6.07246 15.8521C5.97023 16.0332 5.80598 16.344 5.63681 16.7455C3.76471 16.3115 1.99237 17.7422 1.99237 19.6413C1.99237 21.6926 4.0357 23.1352 5.96836 22.4397C6.73312 23.4036 7.77098 24 9.01626 24H15.5739C16.4227 24 17.2464 23.7076 17.8934 23.1767C19.3202 22.0058 19.8578 20.3265 19.4481 18.3205C19.2122 17.1657 18.733 16.2317 18.5178 15.8519C18.6892 15.4965 18.7964 15.1291 18.8388 14.7509C20.2736 14.7542 21.552 13.654 21.6817 12.1298C21.7643 11.1589 21.8165 9.34292 21.3459 7.43698C23.8091 5.93609 24.1244 3.29501 24.0875 1.82591C24.0875 1.82581 24.0875 1.82577 24.0875 1.82567ZM2.1615 0.778063C4.08089 0.50811 5.8402 1.00362 7.14839 1.94319C6.56643 2.2738 6.0389 2.67209 5.56739 3.1378C4.47548 1.99737 2.84784 1.48639 1.2801 1.47041C1.42181 1.10689 1.7519 0.835719 2.1615 0.778063ZM1.20426 2.17484C2.62696 2.17484 4.12026 2.62981 5.08945 3.65637C4.33542 4.55262 3.7965 5.61298 3.44175 6.7294C1.89553 5.70172 1.23646 4.03095 1.20426 2.17484ZM13.8907 18.5293C12.8617 18.9333 11.7285 18.9333 10.6995 18.5293C8.93386 17.8362 6.67828 16.5593 6.45187 14.6859C7.7399 14.5437 9.13711 14.5744 10.5224 14.8186C13.5793 15.3563 14.6067 14.2935 18.1383 14.6859C17.9119 16.5593 15.6561 17.8363 13.8907 18.5293ZM9.77095 9.071C10.5997 8.1994 11.5357 7.21507 11.6491 5.21989C11.6528 5.15553 11.6556 5.09009 11.6575 5.02362C11.6672 4.68397 11.9443 4.40379 12.2951 4.40379C12.644 4.40379 12.9228 4.67726 12.9327 5.02381C13.0707 9.81129 17.67 8.81014 15.4936 13.9356C13.8082 14.0676 12.7342 14.4964 10.641 14.1257C9.79439 13.9766 9.10284 13.9361 9.09665 13.9356C8.19586 11.8174 8.20898 10.714 9.77095 9.071ZM2.6955 19.6413C2.6955 18.2232 3.98812 17.1475 5.38617 17.4106C5.08471 18.3139 4.98361 19.1001 5.00911 19.7774C4.69481 19.7209 4.41557 19.5156 4.27504 19.2162C4.19254 19.0405 3.98325 18.9648 3.80742 19.0474C3.63168 19.1299 3.55607 19.3392 3.63857 19.515C3.90698 20.0868 4.47304 20.4565 5.08734 20.4927C5.18479 21.0203 5.35959 21.4653 5.56181 21.8321C4.1174 22.2258 2.6955 21.1308 2.6955 19.6413ZM17.4473 22.6331C16.4437 23.4567 15.364 23.2717 15.1774 23.2969C15.9146 22.1066 16.1194 20.8737 16.1289 20.8136C16.1595 20.6221 16.0291 20.4422 15.8376 20.4113C15.6462 20.3808 15.4657 20.5109 15.4347 20.7024C15.4323 20.7172 15.1939 22.1369 14.3281 23.2969H12.6466V21.0909C12.6466 20.8967 12.4892 20.7393 12.295 20.7393C12.1009 20.7393 11.9435 20.8967 11.9435 21.0909V23.2969H10.262C9.39717 22.1382 9.15829 20.7204 9.15539 20.7025C9.12464 20.5109 8.94445 20.3805 8.75287 20.4111C8.56115 20.4417 8.43051 20.622 8.46117 20.8137C8.47078 20.8737 8.67548 22.1066 9.41268 23.2969C9.13575 23.2596 7.6027 23.5688 6.37486 21.8104C5.30311 20.2704 5.66906 18.2291 6.50109 16.5475C7.42448 17.7666 9.13818 18.7105 10.5618 19.2289C11.1232 19.4333 11.709 19.5356 12.2951 19.5356C13.2493 19.5356 13.9166 19.2979 14.7035 18.9528C15.941 18.4112 17.2734 17.6242 18.089 16.5474C19.161 18.7148 19.3252 21.0921 17.4473 22.6331ZM21.1484 6.7294C20.7952 5.61776 20.2608 4.55984 19.5009 3.65628C20.4753 2.62545 21.966 2.18262 23.3859 2.17559C23.3534 4.03147 22.6945 5.70176 21.1484 6.7294Z" fill="#EDF2F7"/>\n' +
                                    '</svg>'},
                            {id: '3', name: 'Птицы', img: '<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M23.8864 13.5992C23.0619 12.9514 19.0101 10.103 15.4354 7.5899C14.4178 6.87451 13.4391 6.1864 12.5851 5.58453C12.4264 5.47266 12.207 5.51056 12.0952 5.66931C11.9833 5.82806 12.0212 6.04742 12.1799 6.1593C13.0343 6.76135 14.0132 7.44965 15.0309 8.16504C18.5985 10.6732 22.6422 13.5159 23.4519 14.1522C23.6429 14.3022 24.038 14.7658 23.5856 15.8287C23.1509 16.8505 22.2665 17.5984 21.8245 17.5371C21.4943 17.4911 20.7094 17.178 19.1595 15.5989C19.0235 15.4603 18.801 15.4581 18.6624 15.5942C18.5238 15.7302 18.5216 15.9529 18.6577 16.0915C19.9691 17.4276 20.973 18.1284 21.7272 18.2336C21.7748 18.2402 21.8234 18.2435 21.873 18.2435C22.2756 18.2435 22.7319 18.0245 23.1752 17.6151C23.6094 17.2139 23.9948 16.6631 24.2327 16.1041C24.6851 15.0406 24.559 14.1279 23.8864 13.5992Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M17.2148 13.3847C17.095 13.2309 16.8649 13.2051 16.714 13.3291C16.1691 13.7771 14.4924 14.6031 12.3125 14.9124C10.5664 15.1601 8.00861 15.1407 5.73865 13.6425C5.5766 13.5356 5.35852 13.5801 5.2514 13.7423C5.14447 13.9044 5.18915 14.1224 5.3512 14.2294C6.25647 14.8269 7.20056 15.207 8.12561 15.4357V17.7111L6.46503 17.9629C6.27295 17.9918 6.14093 18.1711 6.17004 18.3632C6.19879 18.5527 6.3808 18.6867 6.57031 18.6582L7.55542 18.5087L7.04547 19.0729C6.9151 19.2168 6.92645 19.4391 7.07037 19.5695C7.21246 19.6978 7.4386 19.6865 7.56696 19.5444L8.73791 18.2491C8.73865 18.2485 8.73901 18.2476 8.73956 18.2471C8.79523 18.1845 8.82874 18.1024 8.82874 18.0134V15.5823C9.46246 15.6907 10.0799 15.7343 10.6611 15.7343C10.948 15.7343 11.2256 15.7233 11.4926 15.7048V18.0312L9.83197 18.2828C9.64008 18.3119 9.50806 18.4912 9.53717 18.6831C9.56592 18.8726 9.74792 19.0068 9.93744 18.978L10.9224 18.8288L10.4124 19.3928C10.2822 19.5369 10.2934 19.7592 10.4375 19.8894C10.5796 20.0179 10.8055 20.0065 10.9341 19.8645L12.105 18.5692C12.1056 18.5686 12.106 18.5679 12.1065 18.5671C12.1622 18.5047 12.1959 18.4225 12.1959 18.3333V15.6369C12.2687 15.6279 12.3409 15.6184 12.4114 15.6083C14.2787 15.3434 15.9774 14.6767 16.8727 14.0829C17.0531 14.3048 17.3375 14.6478 17.6885 15.046C17.8168 15.1916 18.0389 15.2057 18.1847 15.0773C18.3304 14.9488 18.3444 14.7267 18.216 14.5811C17.6268 13.9128 17.2188 13.3898 17.2148 13.3847Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M4.23539 12.3635C3.37956 11.4419 2.73576 10.3654 2.34007 9.20895C2.75077 9.38638 3.20945 9.40249 3.64579 9.32742C4.63712 9.15731 5.21537 8.53347 5.29246 7.56155C5.61784 7.32754 5.83372 6.85146 5.86503 6.24099C5.92252 5.11892 5.31992 3.81466 3.86167 3.60244C3.30778 3.52187 2.79581 3.57534 2.34483 3.75607C2.97727 2.01895 4.17625 0.860803 5.55174 0.724939C7.13468 0.56875 8.35508 1.2618 9.17942 2.78488C9.67381 3.69839 10.3072 4.52493 11.0616 5.24197C11.2004 5.3738 11.4267 5.36813 11.5585 5.22933C11.6924 5.08853 11.6867 4.86587 11.5459 4.7322C10.8451 4.06625 10.257 3.29849 9.79795 2.45016C9.1298 1.21548 7.83854 -0.207068 5.48271 0.0251097C3.60056 0.210962 2.01377 1.92391 1.41904 4.3995C0.646889 5.23593 0.441078 6.47793 0.513588 7.3962C0.557534 7.95266 0.671608 8.61147 1.16764 8.76968C1.26872 8.8019 1.3751 8.80978 1.47984 8.79458C1.87186 10.2878 2.64072 11.6796 3.71995 12.8418C3.87467 13.0086 4.03654 13.1704 4.2006 13.3231C4.34086 13.4537 4.56718 13.4455 4.69755 13.3052C4.82975 13.1631 4.82188 12.9406 4.6796 12.8083C4.52799 12.6673 4.3784 12.5177 4.23539 12.3635ZM3.52677 8.63436C2.99851 8.725 2.58781 8.62777 2.28019 8.33792C2.56748 8.0812 2.88847 7.7236 3.2609 7.27773C3.39805 7.11349 3.47587 7.0613 3.50626 7.04556C3.54691 7.07156 3.62016 7.14333 3.67088 7.19277C3.85874 7.37679 4.12772 7.63845 4.56516 7.70474C4.46446 8.23208 4.12827 8.53109 3.52677 8.63436ZM2.04142 4.76956C2.39719 4.43612 2.84104 4.2684 3.36454 4.2684C3.4918 4.2684 3.62382 4.27828 3.76023 4.29806C4.93559 4.46908 5.19486 5.57723 5.16264 6.20492C5.13627 6.71963 4.93906 7.01187 4.81272 7.01718C4.50968 7.03018 4.34892 6.8727 4.16288 6.69033C3.99534 6.52645 3.78605 6.32156 3.47788 6.33785C3.15598 6.35378 2.9044 6.60757 2.72129 6.82693C2.33036 7.29476 2.03739 7.6108 1.79954 7.82156C1.54832 8.0444 1.42362 8.08743 1.3848 8.09567C1.35368 8.05703 1.25846 7.89626 1.21452 7.34091C1.13432 6.3243 1.45878 5.31484 2.04142 4.76956Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M9.15822 11.4645C9.82472 11.7743 10.6758 12.0369 11.6475 12.0369C12.6099 12.0369 13.6904 11.7793 14.8253 11.0546C14.989 10.9502 15.0368 10.7327 14.9324 10.5691C14.8279 10.4054 14.6105 10.3575 14.4469 10.462C12.8386 11.4887 11.1662 11.6149 9.47609 10.8368C8.18995 10.2449 7.36983 9.32585 7.35737 9.31175C7.22938 9.166 7.00746 9.15135 6.86152 9.27934C6.71541 9.40734 6.70076 9.62944 6.82875 9.77556C6.86519 9.81713 7.7408 10.8057 9.15822 11.4645Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M7.59338 3.77704C7.59338 3.27991 7.28009 2.89062 6.87982 2.89062C6.47974 2.89062 6.16626 3.28009 6.16626 3.77704C6.16626 4.27399 6.47974 4.66345 6.87982 4.66345C7.28009 4.66345 7.59338 4.27399 7.59338 3.77704Z" fill="#EDF2F7"/>\n' +
                                    '</svg>\n'},
                            {id: '4', name: 'Зайцы', img: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M7.99436 19.8934C8.19377 19.8934 8.3571 19.7209 8.34574 19.5219C8.29063 18.5458 8.22013 17.8381 8.13609 17.4186C7.83433 15.9096 5.99358 13.1004 5.91539 12.9816C5.86778 12.9092 5.79528 12.8571 5.71141 12.8349C2.54462 11.9976 1.03327 10.8132 1.21985 9.31434C1.39618 7.89766 4.61791 6.33193 5.84453 5.84817C5.97875 5.79525 6.06719 5.66543 6.06719 5.52114V0.957989C6.06719 0.765363 6.27995 0.642866 6.44731 0.738263C6.99315 1.04936 7.74333 1.59776 8.21848 2.44388C8.76505 3.41727 8.8339 4.57834 8.4232 5.89504C8.38017 6.03329 8.42613 6.18362 8.53892 6.27425C8.55265 6.28524 9.91587 7.39907 10.1718 9.44471C10.1903 9.59358 10.3015 9.71424 10.4483 9.74519C10.4822 9.75214 13.8647 10.4776 16.7935 12.2118C16.9606 12.3107 17.1763 12.2556 17.2752 12.0884C17.3741 11.9212 17.319 11.7055 17.1518 11.6066C14.5446 10.0627 11.6764 9.31068 10.8338 9.11128C10.5426 7.37398 9.56723 6.2792 9.15891 5.8868C9.55533 4.46591 9.44565 3.19278 8.8317 2.09946C8.27763 1.1129 7.41868 0.482466 6.79558 0.127243C6.49547 -0.0437773 6.13805 -0.0423124 5.83959 0.131088C5.73943 0.189132 5.65337 0.262923 5.58251 0.348067C5.4721 0.282882 5.35839 0.219161 5.24212 0.157455C4.89605 -0.0265654 4.48901 -0.0161284 4.15301 0.185653C3.81793 0.387068 3.61779 0.74101 3.61779 1.13212V2.79709C3.61779 2.99137 3.77508 3.14884 3.96935 3.14884C4.16363 3.14884 4.3211 2.99137 4.3211 2.79709V1.1323C4.3211 0.833112 4.64702 0.637556 4.91198 0.778363C5.06872 0.861676 5.21978 0.948651 5.36388 1.03764V5.28567C5.13994 5.38052 4.76568 5.54513 4.3211 5.7654V4.2037C4.3211 4.00961 4.16363 3.85214 3.96935 3.85214C3.77508 3.85214 3.61779 4.00961 3.61779 4.2037V6.13235C3.48193 6.20705 3.34387 6.28524 3.20526 6.3669C1.53882 7.34816 0.636113 8.31056 0.522039 9.22737C0.288031 11.1073 1.92883 12.5374 5.39995 13.4794C5.74309 14.0141 7.20299 16.3384 7.44651 17.5564C7.52397 17.9437 7.59025 18.6184 7.64354 19.5614C7.65416 19.7487 7.80925 19.8934 7.99436 19.8934Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M4.38684 8.85175C4.38684 9.34888 4.70032 9.73834 5.10059 9.73834C5.50067 9.73834 5.81433 9.34888 5.81433 8.85175C5.81433 8.3548 5.50067 7.96533 5.10059 7.96533C4.70032 7.96533 4.38684 8.3548 4.38684 8.85175Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M21.843 18.4984C21.8644 17.6891 21.704 16.8537 21.3616 15.9977C20.8361 14.6838 19.8239 13.4718 18.3534 12.3961C18.1967 12.2813 17.9766 12.3155 17.8619 12.472C17.7471 12.6288 17.7814 12.8489 17.9381 12.9635C19.3006 13.9605 20.2328 15.0692 20.7087 16.259C21.3137 17.7713 21.2809 19.2034 20.6111 20.5153C20.1823 21.355 19.5233 22.0587 18.7051 22.5501C17.892 23.0385 16.9578 23.2967 16.0036 23.2967H11.7367C11.2652 23.2967 10.8813 22.9176 10.8721 22.4482C10.8721 22.4445 10.8723 22.4408 10.8723 22.437V22.4086C10.8845 21.9419 11.2671 21.5656 11.7367 21.5656H14.9411C15.2457 21.5656 15.4045 21.186 15.1923 20.9679C15.1419 20.9161 13.9688 19.6822 14.6142 17.8916C15.1967 16.2761 16.4489 16.2186 16.505 16.2167C16.698 16.2127 16.8519 16.0536 16.8492 15.8602C16.8463 15.6678 16.6895 15.5136 16.4976 15.5136C16.496 15.5136 16.4942 15.5136 16.4925 15.5136C16.42 15.5147 14.7061 15.563 13.9527 17.6532C13.5081 18.8864 13.7672 19.9061 14.0955 20.5792C12.0438 19.7961 10.7989 18.4059 10.7849 18.3904C10.5753 18.1516 10.1692 18.3056 10.1692 18.6224V22.3861C10.1686 22.4011 10.1681 22.4161 10.1681 22.4311C10.1681 22.4375 10.1684 22.4438 10.1684 22.4502C10.1613 22.9182 9.77896 23.2967 9.3093 23.2967C8.84476 23.2967 8.45914 22.9191 8.4498 22.4547C8.43918 21.9316 8.42581 21.429 8.40952 20.961C8.40293 20.7669 8.23996 20.6153 8.04605 20.6217C7.85196 20.6285 7.69999 20.7911 7.70676 20.9853C7.72269 21.45 7.73606 21.9492 7.74668 22.4688C7.76352 23.3131 8.46463 24 9.3093 24C9.798 24 10.2349 23.7746 10.5216 23.4223C10.8095 23.7746 11.2473 24 11.7367 24H16.0036C17.0852 24 18.1447 23.7072 19.0671 23.1531C19.4304 22.9348 19.7657 22.6794 20.0691 22.3925C20.4175 22.6186 20.8248 22.7409 21.2454 22.7409C22.4383 22.7409 23.4089 21.7703 23.4089 20.5772C23.4089 19.602 22.7552 18.7601 21.843 18.4984ZM12.9879 20.8625H11.7367C11.4176 20.8625 11.1204 20.9586 10.8723 21.123V19.4504C11.3379 19.8552 12.0557 20.3988 12.9879 20.8625ZM21.2454 22.0376C21.0044 22.0376 20.7698 21.9783 20.5606 21.8672C20.8738 21.4872 21.137 21.0653 21.3422 20.6178C21.5524 20.1615 21.6967 19.6941 21.7751 19.2164C22.3239 19.43 22.7056 19.9649 22.7056 20.5772C22.7056 21.3825 22.0507 22.0376 21.2454 22.0376Z" fill="#EDF2F7"/>\n' +
                                    '</svg>\n'},
                            {id: '5', name: 'Мыши', img: '<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M19.2782 8.28442C18.89 8.28442 18.5751 8.59937 18.5751 8.98755C18.5751 9.37537 18.89 9.69067 19.2782 9.69067C19.6662 9.69067 19.9813 9.37537 19.9813 8.98755C19.9813 8.59937 19.6662 8.28442 19.2782 8.28442Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M21.3542 6.03662L19.9813 4.89258V3.71558C19.9813 1.66681 18.3143 0 16.2648 0C14.4481 0 12.9319 1.31085 12.6121 3.0368C8.38544 3.3598 5.01868 6.88824 5.01868 11.2462V12.7538C5.01868 13.0369 5.07288 13.3074 5.17029 13.5562H3.88049C2.76904 13.5562 1.90625 12.6497 1.90625 11.5816C1.90625 11.068 2.10638 10.5848 2.46967 10.2213L3.29034 9.40063C4.53473 8.15753 3.65125 6.02509 1.89215 6.02509H1.20312C0.814758 6.02509 0.5 6.33984 0.5 6.72821C0.5 7.11639 0.814758 7.43134 1.20312 7.43134H1.89215C2.40009 7.43134 2.65588 8.04657 2.2959 8.40637L1.47504 9.22705C0.846253 9.85638 0.5 10.6924 0.5 11.582C0.5 13.4522 2.0141 14.9625 3.88049 14.9625H22.2914C23.5092 14.9625 24.5 13.9717 24.5 12.7538V12.7527C24.5 10.1503 23.3534 7.70233 21.3542 6.03662ZM23.0938 12.7538C23.0938 13.1962 22.7338 13.5562 22.2914 13.5562H7.22729C6.78491 13.5562 6.42493 13.1962 6.42493 12.7531V11.2462C6.42493 7.67102 9.15887 4.76312 12.6216 4.44781C13.0966 6.83807 15.2916 7.43134 16.2648 7.43134H16.2657C16.6539 7.43134 16.9683 7.11639 16.9683 6.72821C16.9683 6.33984 16.6532 6.02509 16.2648 6.02509C15.0109 6.02509 13.9562 5.01141 13.9562 3.71558C13.9562 3.71558 13.9562 3.71539 13.9562 3.71521C13.9562 3.71521 13.9562 3.71503 13.9562 3.71484C13.9562 2.44189 14.9919 1.40625 16.2657 1.40625C17.5391 1.40625 18.5751 2.44226 18.5751 3.71576V5.2218C18.5751 5.43054 18.6677 5.62848 18.8281 5.76215L20.4541 7.11694C22.1317 8.51477 23.0938 10.5688 23.0938 12.7527V12.7538Z" fill="#EDF2F7"/>\n' +
                                    '</svg>'},
                            {id: '6', name: 'Другие', img: '<svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                    '<path d="M18.845 20.3724C18.3763 20.1576 17.961 19.9439 17.5753 19.719C17.4076 19.6211 17.1923 19.6778 17.0945 19.8455C16.9967 20.0133 17.0534 20.2285 17.2211 20.3263C17.6268 20.5629 18.0622 20.7871 18.5522 21.0116C19.2025 21.3093 19.5825 21.8055 19.5438 22.3066C19.5111 22.7294 19.1822 23.0692 18.6638 23.2155C18.4727 23.2695 18.258 23.2969 18.0258 23.2969H15.0398C12.9679 23.2969 11.4637 22.1835 10.6975 21.4497V20.6921C10.6975 20.4979 10.5401 20.3406 10.3459 20.3406C10.1518 20.3406 9.9944 20.498 9.9944 20.6922V21.9793C9.9944 22.7058 9.4034 23.2969 8.67689 23.2969H5.98382C4.89252 23.2969 4.13034 22.8335 4.13034 22.17C4.13034 21.6272 4.63373 21.2108 5.44401 21.0834C5.56945 21.0637 5.67449 20.9778 5.71884 20.8589C5.76318 20.7399 5.73993 20.6063 5.65799 20.5093C4.79526 19.4878 4.40249 17.9931 4.6806 16.7899C4.89628 15.857 5.4914 15.1116 6.41001 14.6166C6.8999 14.3534 7.44557 14.1798 7.9881 14.0696C8.17842 14.031 8.30132 13.8454 8.2627 13.6551C8.22407 13.4648 8.03854 13.3419 7.84823 13.3805C7.52362 13.4464 7.21617 13.53 6.92671 13.6295C6.9112 13.3503 6.88767 13.0523 6.85612 12.7369C6.99764 12.6881 7.13812 12.6359 7.27626 12.5798C7.77909 12.3758 8.21695 12.1452 8.57765 11.8943C8.73703 11.7834 8.77635 11.5643 8.6655 11.4049C8.55464 11.2456 8.33554 11.2062 8.17612 11.3171C7.59585 11.7207 6.9667 11.9591 6.35859 12.1617C4.90762 12.6451 3.82087 12.4594 3.67363 12.0964C3.50521 11.6811 4.40006 10.6157 6.18571 9.89138C6.83803 9.62672 7.43943 9.48202 7.92487 9.47283C8.11903 9.46913 8.27339 9.30877 8.26973 9.11461C8.26607 8.92275 8.10942 8.76971 7.91835 8.76971C7.9161 8.76971 7.91381 8.76971 7.91156 8.76975C7.42382 8.77904 6.87149 8.89313 6.26601 9.10871C6.14826 8.57579 6.02254 8.07394 5.89026 7.60833C6.12862 7.58194 6.37495 7.54936 6.62915 7.51004C6.82106 7.48032 6.95254 7.30069 6.92282 7.10879C6.89315 6.91693 6.71339 6.786 6.52162 6.81511C6.00234 6.8955 5.45774 6.95691 4.93073 6.9774C3.57623 7.02957 2.61084 6.7988 2.0579 6.28871C1.65121 5.91352 1.45349 5.38224 1.45349 4.66454C1.45349 4.24341 1.54448 3.82454 1.72401 3.41949C1.80266 3.24197 1.72255 3.03427 1.54504 2.95561C1.36752 2.87677 1.15987 2.95702 1.08116 3.13454C0.861647 3.62991 0.750366 4.14465 0.750366 4.66449C0.750366 5.57658 1.02988 6.29691 1.58118 6.8055C2.48891 7.64288 3.94523 7.74216 5.17673 7.66969C5.32724 8.18747 5.47298 8.76816 5.60493 9.37575C3.99862 10.1053 2.60901 11.3423 3.02207 12.3606C3.24562 12.9116 3.89231 13.1409 4.70198 13.1409C5.15535 13.1409 5.65982 13.0686 6.16963 12.9411C6.20249 13.2901 6.22504 13.6159 6.23667 13.9142C5.01196 14.5181 4.26252 15.4765 3.99557 16.6314C3.70359 17.8946 4.01385 19.368 4.78879 20.5223C3.94621 20.8107 3.42721 21.4208 3.42721 22.17C3.42721 23.2475 4.47852 24 5.98387 24H8.67689C9.66182 24 10.4844 23.2916 10.662 22.3577C11.5892 23.1199 13.0837 24 15.0398 24H18.0258C18.3226 24 18.6016 23.9637 18.8549 23.8921C19.6567 23.6658 20.1893 23.079 20.2448 22.3606C20.3068 21.5579 19.7704 20.796 18.845 20.3724Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M2.63925 2.15016C3.77883 1.06767 5.45485 0.531753 7.0132 0.751315C10.0208 1.17549 11.3743 5.88488 11.6999 8.60072C12.0701 11.6851 12.4698 13.6737 13.0363 15.2502C13.6181 16.8691 14.4558 18.2358 15.8152 19.3562C15.9647 19.4793 16.1863 19.4587 16.3101 19.3085C16.4336 19.1586 16.4122 18.937 16.2624 18.8135C15.8619 18.4835 15.5062 18.1299 15.1877 17.7421C15.5894 17.4406 15.9916 16.9738 16.2943 16.444C16.5031 16.0786 16.9547 15.1549 16.6396 14.4723C16.5107 14.1934 16.1188 13.6914 14.9424 13.4624C14.3455 13.3463 13.7251 13.3461 13.2303 13.4534C13.1256 13.0344 13.0269 12.5831 12.9327 12.0921C14.0352 11.7417 15.579 10.234 15.343 9.12286C15.1286 8.11205 13.3862 7.38 12.2201 7.37311C12.1669 7.09093 12.1013 6.77954 12.0213 6.44869C12.0285 6.44532 12.0356 6.44241 12.0428 6.43894C12.5536 6.19111 13.1138 5.598 13.5048 4.89122C13.7114 4.51772 14.1561 3.5753 13.8243 2.89186C13.4929 2.2081 12.4773 1.97433 12.056 1.90561C11.3471 1.78983 10.6267 1.83525 10.1166 2.02097C9.27075 0.87769 8.26444 0.217831 7.11145 0.0552212C5.34572 -0.193591 3.44649 0.413815 2.15508 1.64058C2.01432 1.77432 2.0086 1.99683 2.14233 2.13764C2.27593 2.27817 2.49849 2.28394 2.63925 2.15016ZM16.0012 14.767C16.2403 15.2851 15.5224 16.6212 14.7685 17.1803C14.1458 16.2602 13.7263 15.2085 13.413 14.1311C14.3354 13.9402 15.7668 14.2599 16.0012 14.767ZM14.6551 9.26874C14.7787 9.85065 13.6799 11.0743 12.8063 11.3939C12.5434 9.85622 12.4226 8.64272 12.3385 8.0761C13.2827 8.11908 14.5409 8.73038 14.6551 9.26874ZM11.9426 2.59936C12.5749 2.70258 13.0651 2.93771 13.1916 3.19857C13.3182 3.45933 13.1996 3.99005 12.8894 4.55068C12.6024 5.06949 12.1917 5.53402 11.8372 5.74983C11.5288 4.67086 11.1 3.57755 10.5244 2.63011C10.9103 2.532 11.439 2.51714 11.9426 2.59936Z" fill="#EDF2F7"/>\n' +
                                    '<path d="M4.44556 2.76392V3.06129C4.44556 3.25549 4.60296 3.41285 4.79712 3.41285C4.99128 3.41285 5.14869 3.25549 5.14869 3.06129V2.76392C5.14869 2.56971 4.99128 2.41235 4.79712 2.41235C4.60296 2.41235 4.44556 2.56971 4.44556 2.76392Z" fill="#EDF2F7"/>\n' +
                                    '</svg>\n'}
                        ]}/>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='pets-grid'
                        columnClassName='pets-grid__columns'
                    >
                        {items.map(el => {

                            return activePets.length < 1 ?
                                <div className="pets-grid__elem">
                                    <Post
                                        id={el.id}
                                        key={el.id}
                                        img={el.img}
                                        name={el.name}
                                        rank={el.rank}
                                    />
                                </div>
                                :
                             activePets.indexOf(el.rankId) !== -1 ?
                                <div className="pets-grid__elem">
                                    <Post
                                        id={el.id}
                                        key={el.id}
                                        img={el.img}
                                        name={el.name}
                                        rank={el.rank}
                                    />
                                </div>
                                :
                                null
                            // return activePets.indexOf(el.rankId) !== -1 ?
                            //         <div className="pets-grid__elem">
                            //             <Post
                            //                 key={el.id}
                            //                 img={el.img}
                            //                 name={el.name}
                            //                 rank={el.rank}
                            //                 status={like}
                            //                 setLike={setLike}
                            //                 coll={el.coll}
                            //             />
                            //         </div>
                            //     :
                            //         null
                            // return <div className="pets-grid__elem">
                            //     <Post
                            //         key={el.id}
                            //         img={el.img}
                            //         name={el.name}
                            //         rank={el.rank}
                            //         status={like}
                            //         setLike={setLike}
                            //         coll={el.coll}
                            //     />
                            // </div>



                        })}
                    </Masonry>
                </div>
            </div>
        </div>
    )
}

export default Pets