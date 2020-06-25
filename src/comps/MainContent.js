import React, { useEffect, useState } from 'react';

const MainContent = () => {
    return (
        <div>
            <div className="header-cover">
                <div className="header-shader">
                    <div className="header-logo-container">
                        <img src="/assets/tml-logo-pink-2.png" className="header-logo" alt="tml-logo" />
                    </div>
                    <div className="howto-container">
                        <h1>Relieve the amazing story of the greatest festival on earth only by scrolling down</h1>
                    </div>
                </div>
            </div>
            <div className="transition-1-container">
                <div className="transition-1-item-1">
                    <p className="transition-1-text-1 tr-item-1">Yesterday is History,</p>
                </div>
                <div className="transition-1-item-2">
                    <p className="transition-1-text-2 tr-item-1">Today is a Gift,</p>
                </div>
                <div className="transition-1-item-3">
                    <p className="transition-1-text-3 tr-item-1">Tomorrow is Mystery...</p>
                </div>
            </div>
            <div className="announcement-container">
                <div className="announcement-bg-container">
                    <div className="announcement-shader">
                        <div className="announcement-text-container">
                            <p className="announcement-text a-anim-1">It all started in 2005</p>
                            <p className="announcement-text a-anim-2">Every year since,</p>
                            <p className="announcement-text a-anim-3">Belgium hosted the most legendary festival on earth</p>
                            <p className="announcement-text a-anim-4">15 editions</p>
                            <p className="announcement-text a-anim-5">More than 2.500.000 visitors</p>
                            <p className="announcement-text a-anim-6">Always recieving the finest dj's in the world...</p>
                            <p className="announcement-text a-anim-7">Prepare yourself to take a journey trough all the editions</p>
                            <p className="announcement-text a-anim-8">that make so many people dreaming</p>
                            <p className="announcement-text a-anim-9">And don't forget...</p>
                            <p className="announcement-text a-anim-10">Make every seconds of your life</p>
                            <p className="announcement-text a-anim-11">Legendary</p>
                        </div>
                    </div>
                    <div className="editions-start-anim-container">
                        <div className="a-anim-12">
                            <div className="a-anim-12-shader"></div>
                        </div>
                        <div className="a-anim-13">
                            <div className="a-anim-13-shader"></div>
                        </div>
                    </div>
                    <div className="a-anim-14">
                        <img src="/assets/tml-logo-pink-2.png" alt="tml-logo" />
                    </div>
                </div>
            </div>
            <div className="editions-main-container">
                <div className="edition-start-slow-animation-2">
                    <div className="slow-anim slow-anim-1"></div>
                    <div className="slow-anim slow-anim-2"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                </div>
                <h2 className="edition-start-animation-text">Don't scroll too fast</h2>
                <div className="edition-start-slow-animation-1">
                    <div className="slow-anim slow-anim-1"></div>
                    <div className="slow-anim slow-anim-2"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                    <div className="slow-anim slow-anim-3"></div>
                </div>
                {editions.map((edition) => (
                    <Editions data={edition.data} key={edition.data.year} />
                ))}
            </div>            
        </div>
        
    )
}

export default MainContent;