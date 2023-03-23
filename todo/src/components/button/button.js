import React from "react";

const Button = ({className, label}) => {
    return (

        <div className = {`button ${className}`}>
            {label}
        </div>
        
    )
}

export default Button;