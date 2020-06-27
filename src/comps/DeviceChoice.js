import React, { useEffect, useState } from 'react';

const DeviceChoice = (props) => {

    const { handleChoice } = props;

    return (
        <div className="device-choice-container">
            <h2 className="choice-title">What type or device are you on ?</h2>
            <div className="choice-container">
                <div className="touch-device-container" onClick={() => handleChoice("touch")}>
                    <h3 className="touch-device-title">Touch device</h3>
                    <div className="touch-device-img-container">
                        <img src="/assets/phone.png" alt="phone-logo" className="device-img"></img>
                        <img src="/assets/tablet.png" alt="phone-logo" className="device-img"></img>
                    </div>
                    <p className="touch-device-text">Phone or tablet</p>
                </div>
                <div className="separator"></div>
                <div className="keyboard-device-container" onClick={() => handleChoice("keyboard")}>
                    <h3 className="keyboard-device-title">Keyboard device</h3>
                    <div className="keyboard-device-img-container">
                        <img src="/assets/laptop.png" alt="phone-logo" className="device-img"></img>
                        <img src="/assets/computer.png" alt="phone-logo" className="device-img"></img>
                    </div>
                    <p className="keyboard-device-text">Laptop or desktop</p>
                </div>
            </div>

        </div>
    )
}

export default DeviceChoice;