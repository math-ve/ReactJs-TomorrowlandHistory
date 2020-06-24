import React, { useEffect } from 'react';
import { gsap } from "gsap/all";

const LoadingHome = () => {

    const handeAnim = () => {
        gsap.to('.loader-home', {duration:3.5, width:"100%", ease:"power2"})        
        gsap.to('.loading-tml-logo', {duration:1,rotate:360, repeat:3, ease:"power3", onComplete: () => {
            gsap.to('.loading-home-container', {duration:2.5, yPercent:-100, ease:"power3", onComplete: () => {
                gsap.to('.loading-home-container', {display:"none"})
            }})
        }});

    }

    useEffect(() => {
        setTimeout(() => {
            handeAnim();
        },2500)
    })

    return (
        <div className="loading-home-container">
            <div className="loading-home-logo-container">
                <img src="/assets/tml-logo-black.png" alt="tml-logo" className="loading-tml-logo"/>
            </div>
            
            <div className="loader-home-container">
                <div className="loader-home"></div>
            </div>
            <p className="loading-home-text">Loading ...</p>
        </div>
    )
}

export default LoadingHome;