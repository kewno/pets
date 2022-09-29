import React, {useEffect, useRef, useState} from 'react';
import './progress.scss';
import ProgressPoint from "./ProgressPoint/ProgressPoint";


const Progress = ({headline, headProgress, circles, ...attr}) => {

    const [size, setSize] = useState({});
    const [percent, setPercent] = useState();
    const ref = useRef()

    let resizeHandler = () => {
        const { clientHeight, clientWidth } = ref.current || {};
        setSize({ clientHeight, clientWidth });
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [])

    useEffect(() => {
        if (size.clientWidth === 254) {
            //percent = 735 / 100
            setPercent(735 / 100)
        } else if (size.clientWidth === 230) {
            //percent = 660 / 100
            setPercent(660 / 100)
        } else if (size.clientWidth === 305) {
            //percent = 798 / 100
            setPercent(880 / 100)
        } else if (size.clientWidth === 105) {
            //percent = 299 / 100;
            setPercent(299 / 100)
        }

        //console.log(percent)
    }, [size])

    let percentAll = 0;
    circles.forEach((el) => {
        percentAll+= el.percent
    })

    let firstCircle = circles[0].percent * percent
    let secondCircle = circles[1].percent * percent
    let thirdCircle = circles[2].percent * percent
    let fourthCircle = circles[3].percent * percent


    return (
        <div className='progress'>
            <div className='progress-ellipse'>
                <p className='progress-ellipse__percent'>{`${percentAll}%`}</p>
                <svg ref={ref} className='svg-circle' width='254' height='254' >
                    <circle className='svg-circle__main svg-circle__circle' cy='127' cx='127' r='117' fill='transparent' strokeWidth="20"></circle>
                    {firstCircle ?
                        <circle className={`svg-circle__circle svg-circle_${circles[0].className}`} cy='127' cx='127' r='117' fill='transparent' stroke="orange" strokeWidth="20" strokeDashoffset='0' strokeDasharray={`${firstCircle}, 1000`}></circle>
                    :
                        null
                    }
                    {secondCircle ?
                        <circle className={`svg-circle__circle svg-circle_${circles[1].className}`} cy='127' cx='127' r='117' fill='transparent' stroke="blue" strokeWidth="20" strokeDashoffset={`${-firstCircle}`} strokeDasharray={`${secondCircle}, 1000`}></circle>
                        :
                        null
                    }
                    {thirdCircle ?
                        <circle className={`svg-circle__circle svg-circle_${circles[2].className}`} cy='127' cx='127' r='117' fill='transparent' stroke="green" strokeWidth="20" strokeDashoffset={`${-firstCircle-secondCircle}`} strokeDasharray={`${thirdCircle}, 1000`}></circle>
                        :
                        null
                    }
                    {fourthCircle ?
                        <circle className={`svg-circle__circle svg-circle_${circles[3].className}`} cy='127' cx='127' r='117' fill='transparent' stroke="red" strokeWidth="20" strokeDashoffset={`${-firstCircle-secondCircle-thirdCircle}`} strokeDasharray={`${fourthCircle}, 1000`}></circle>
                        :
                        null
                    }
                    </svg>

            </div>
            <div className='progress-head'>
                <h2 className='progress-head__headline'>{headline}</h2>
                {/*{headProgress.map(el => {*/}
                {/*    return <div className='progress-head__elem'>*/}
                {/*        /!*<img alt='point' src={require(`../../../img/ui/${el.img}`)} className='progress-head__img'/>*!/*/}
                {/*        <ProgressPoint key={el.id} img={el.icon} className={el.className} />*/}
                {/*        <p className='progress-head__text'>{el.text}</p>*/}
                {/*    </div>*/}
                {/*})}*/}
                {circles.map(el => {
                    return <div className='progress-head__elem'>
                        {/*<img alt='point' src={require(`../../../img/ui/${el.img}`)} className='progress-head__img'/>*/}
                        <ProgressPoint key={el.id} className={el.className} />
                        <p className='progress-head__text'>{el.headline}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Progress