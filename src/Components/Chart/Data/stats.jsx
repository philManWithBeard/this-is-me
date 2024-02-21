import React, { useState } from "react";

const Stats = (props) => {
    const buttonStyle = {
        border: "1px solid #ffffff",
        borderRadius: "10px",
        padding: "0px 10px",
        margin: "1px 50px",
        fontSize: 20,
        color: "#ffffff",
        opacity: 0.7,
      };

    
    const [showDelayedText, setShowDelayedText] =
    useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setShowDelayedText(true);
        }, 1000);
    };
    
    return(
        <div>
            <button id="statButton"style={buttonStyle} onClick={handleClick}>Show Breakdown</button>
                {showDelayedText && ( <>
                    <h2> {props.pastX} x annual salary in 2003 </h2>
                    <h2> {props.presentX} x annual salary in 2023 </h2>
                    </>)}

        </div>
    )

}

export default Stats