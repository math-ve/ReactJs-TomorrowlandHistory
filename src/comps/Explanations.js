import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";

const Explanations = () => {
    if (isBrowser)
        return (
            <div className="explanations-container">
                <p>This is a animations based website</p>
                <p className="explanations-2">You only need to press the "N" key of your keyboard to go to the next animation and the "P" key to go to the previous one.</p>
                <p>On the editions section, you will be able to click the pictures and the timeline.</p>
                <p>You can now press "N" to start the viewing !</p>
            </div>
        )
    else
        return (
            <div className="explanations-container">
                <p>This is a animations based website</p>
                <p className="explanations-2">You only need to press the right side of your screen to go to the next animation and the left side to go to the previous one.</p>
                <p>On the editions section, you will be able to click the pictures and the timeline.</p>
                <p>You can now click the right side of your screen to start the viewing !</p>
            </div>
        )
}

export default Explanations;