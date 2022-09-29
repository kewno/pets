import React from "react";
import './identification.scss'

const Identification = ({children, ...attr}) => {

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
                {children}
            </div>
        </div>
    )
}

export default Identification