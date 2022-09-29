import React from 'react';
import './welcome-back.scss';
import background from '../../../img/ui/welcome-back.png'

const WelcomeBack = ({name = 'Пользователь', ...attr}) => {

    //let a = require('../../../img/ui/welcome-img.png')
    // const myStyle={
    //     backgroundImage: `url(${background})`
    // };

    return (
        <div className="welcome-back" style={{backgroundImage: `url(${background})`}}>
            <div className="welcome-texts">
                <h3 className="welcome-texts__headline">{`С возвращением, ${name}`}</h3>
                <p className="welcome-texts__text">Не забудь покормить своего питомца</p>
                <p className="welcome-texts__text">Хорошего дня!</p>
            </div>
            <img src={require('../../../img/ui/welcome-img.png')} alt="img" className="welcome-back__img"/>
            {/*<div className="welcome-back__img">*/}
            {/* `   ` */}
            {/*</div>*/}
        </div>
    )
}

export default WelcomeBack