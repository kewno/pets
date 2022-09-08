import React from "react";
import './identification.scss'
import Auth from "../Auth/Auth";
import Registr from "../Registr/Registr";
import {useParams} from "react-router-dom";

const Identification = ({...attr}) => {

    // open auth/registr
    let params = useParams();
    let identification = params.ident;

    return (
        <div className="identification">
            <div className="identification-images">
                <img src={require('../../img/identification/identification-1.png')} alt="background" className="identification-images__img"/>
            </div>
            <div className="identification__content">
                {identification === 'registr' ?
                    <Registr />
                    :
                    <Auth />
                }
            </div>
        </div>
    )
}

export default Identification