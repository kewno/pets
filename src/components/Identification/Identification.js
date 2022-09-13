import React from "react";
import './identification.scss'
import Auth from "../Auth/Auth";
import Registr from "../Registr/Registr";
import {useLocation, useParams} from "react-router-dom";

const Identification = ({...attr}) => {

    // open auth/registr
    let params = useLocation();
    let reg = params.pathname.indexOf('registr');

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    let numberImage = getRandom(4);

    return (
        <div className="identification">
            <div className="identification-images">
                <img src={require(`../../img/identification/identification-${numberImage}.png`)} alt="background" className="identification-images__img"/>
            </div>
            <div className="identification__content">
                {reg === 1 ?
                    <Registr />
                    :
                    <Auth />
                }
            </div>
        </div>
    )
}

export default Identification