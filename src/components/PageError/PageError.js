import React from "react";
import './page-error.scss'
import Sidebar from "../ui/Sidebar/Sidebar";
import Headline from "../ui/Headline/Headline";

const PageError = ({...attr}) => {

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    let id = getRandom(4);
    //let id = 0

    let data = [
        {headline: 'Is That A Dragon ?', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.', image: 'image-1.png'},
        {headline: 'Ugh I Just Break It !', text : 'Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow ', image: 'image-2.png'},
        {headline: 'This Thing Is Broken', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.', image: 'image-3.png'},
        {headline: 'Looking Sad Bae ?', text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.', image: 'image-4.png'}
    ]

    return (
        <div className='page-error main'>
            <Sidebar />
            <div className='main__container page-error__container'>
                <Headline headline='404'/>
                <div className="main__content page-error__content">
                    <div className="page-error__info">
                        <img src={require(`../../img/404/${data[id].image}`)} alt="img" className="page-error__img"/>
                        <div className="error-text">
                            <h1 className="error-text__headline">{data[id].headline}</h1>
                            <p className="error-text__text">{data[id].text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageError