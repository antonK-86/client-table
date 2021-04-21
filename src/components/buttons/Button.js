import React from "react";
import "./Button.css";

const Button = ({children, widthInStyle=null, handleClick}) => {
    return (
        <div className={"btn-component " + widthInStyle} onClick={handleClick}>
            {children}
        </div>
    )
}

export default Button;
