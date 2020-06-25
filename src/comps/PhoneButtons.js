import React from 'react';

const PhoneButtons = (props) => {

    const {handleClick} = props;

    return (
        <div className="phone-buttons-container">
            <div className="phone-left-button" onClick={() => handleClick({code : "KeyP"})}>

            </div>
            <div className="phone-right-button" onClick={() => handleClick({code : "KeyN"})}>

            </div>
        </div>
    )
}

export default PhoneButtons;