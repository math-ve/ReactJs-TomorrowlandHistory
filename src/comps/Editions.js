import React, { useEffect, useState } from 'react';

import TimeLine from './TimeLine';
import gsap from 'gsap/gsap-core';

const Editions = (props) => {

    const {data, handleClick} = props;
    const [millenium, setMillenium] = useState("");
    const [year, setYear] = useState("");

    //YEAR FORMATING
    useEffect(() => {
        const strToArray = data.year.split("");
        const milleniumArray = [];
        const yearArray = [];
        milleniumArray.push(strToArray[0]);
        milleniumArray.push(strToArray[1]);
        yearArray.push(strToArray[2]);
        yearArray.push(strToArray[3]);
        const milleniumStr = milleniumArray.join("");
        const yearStr = yearArray.join("");        
        setMillenium(milleniumStr);
        setYear(yearStr);
    }, [data.year])

    const handleImgClick = (e) => {
        const targetSrc = e.target.src;
        gsap.set('.img-preview', {attr:{src:targetSrc}, onComplete: () => {
            gsap.to('.img-preview-container', {duration:.5, opacity:1})            
        }})
        gsap.to('.close-logo', {pointerEvents:'all'});
    }

    const handleLeavePreview = () => {
        gsap.to('.img-preview-container', {duration:.5, opacity:0});
        gsap.to('.close-logo', {pointerEvents:"none"});
    }

    return (
        <div className={`edition-container edition-container-${data.year}`}>
            <div className={`edition-enter-animation-container edition-enter-animation-container-${data.year}`}>
                <div className={`e-anim-1 e-anim-1-${data.year}`}>
                    <p className={`edition-enter-animation-text e-anim-1-text-${data.year}`}>{millenium}</p>
                </div>
                <div className={`e-anim-2 e-anim-2-${data.year}`}>
                    <p className={`edition-enter-animation-text e-anim-2-text-${data.year}`}>{year}</p>
                </div>
            </div>
            <div className={`edition-infos-container edition-infos-container-${data.year}`} style={{backgroundImage:`url('/assets/${data.cover[0]}')`}}>
                <div className="editions-infos-shader-container">
                    <div className={`editions-three-part-container editions-three-part-container-${data.year}`}>
                        <div className={`editions-left-part editions-left-part-${data.year}`}>
                            <div className={`img-container img-2-container img-2-container-${data.year}`}>
                                <img src={`/assets/${data.cover[1]}`} alt="tml-cover" className={`editions-images img-2 img-2-${data.year}`}  onClick={handleImgClick}/>
                            </div>
                            <div className={`img-container img-3-container img-3-container-${data.year}`}>
                                <img src={`/assets/${data.cover[2]}`} alt="tml-cover" className={`editions-images img-3 img-3-${data.year}`}  onClick={handleImgClick}/>
                            </div>
                        </div>
                        <div className={`editions-mid-part editions-mid-part-${data.year}`}>
                            <div className={`editions-infos-text-container`}>
                                <div className={`editions-infos-text editions-infos-text-${data.year}`}>
                                    <div className={`i-anim i-anim-top i-anim-top-${data.year}`}></div>
                                    <div className={`i-anim i-anim-right i-anim-right-${data.year}`}></div>
                                    <h2 className={`editions-year-text editions-year-text-${data.year}`}>{data.year}</h2>
                                    <div className="editions-theme-container">
                                        <hr className={`hr-top-${data.year}`} />
                                        <h1 className={`editions-theme-text editions-theme-text-${data.year}`}>{data.theme}</h1>
                                        <hr className={`hr-bottom-${data.year}`} />
                                    </div>
                                    <h3 className={`editions-date-text editions-date-text-${data.year}`}>{data.date}</h3>
                                    <h3 className={`editions-visitors-text editions-visitors-text-${data.year}`}>{data.visitors} visitors</h3>
                                    <div className={`i-anim i-anim-bottom i-anim-bottom-${data.year}`}></div>
                                    <div className={`i-anim i-anim-left i-anim-left-${data.year}`}></div>
                                </div>
                            </div>
                            
                            <div className={`img-container img-4-container img-4-container-${data.year}`}>
                                <img src={`/assets/${data.cover[3]}`} alt="tml-cover" className={`editions-images img-4 img-4-${data.year}`}  onClick={handleImgClick}/>
                            </div>
                        </div>
                        <div className={`editions-right-part editions-right-part-${data.year}`}>
                            <div className={`img-container img-5-container img-5-container-${data.year}`}>
                                <img src={`/assets/${data.cover[4]}`} alt="tml-cover" className={`editions-images img-5 img-5-${data.year}`}  onClick={handleImgClick}/>
                            </div>
                            <div className={`img-container img-6-container img-6-container-${data.year}`}>
                                <img src={`/assets/${data.cover[5]}`} alt="tml-cover" className={`editions-images img-6 img-6-${data.year}`} onClick={handleImgClick}/>
                            </div>
                        </div>
                    </div>
                    <TimeLine year={data.year} handleClick={handleClick}/>
                </div>
                <div className={`img-preview-container img-preview-${data.year}`}>
                    <img src="/assets/close.svg" className="close-logo" alt="close-logo" onClick={handleLeavePreview}/>
                    <img src="" alt="tml-preview" className="img-preview"></img>
                </div>                
            </div>
            <div className={`edition-aftermovie-container edition-aftermovie-container-${data.year}`}>
                <div className="aftermovie-text-container">
                    <h2 className={`aftermovie-text aftermovie-text-${data.year}`}>Official Aftermovie</h2>
                </div>
                <video muted autoPlay loop className="aftermovie-bg-video">
                    <source src="/assets/stars.mp4" type="video/mp4" />
                </video>
                <div className={`aftermovie-container aftermovie-container-${data.year}`}>
                    <iframe title={`aftermovie-${data.year}`} className={`aftermovie aftermovie-${data.year}`} src={`https://www.youtube.com/embed/${data.aftermovie}`} allowFullScreen></iframe>
                </div>
            </div>

        </div>
    )
}

export default Editions;