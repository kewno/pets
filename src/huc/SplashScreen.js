import {useEffect, useState} from "react";
import Launch from "../components/Launch/Launch";

const SplashScreen = ({Component, ...attr}) => {
    let [loader, setLoader] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoader(true),2000)
    }, [])

    return (
        loader ?
            <Component/>
            :
            <Launch/>
    )
}

export default SplashScreen