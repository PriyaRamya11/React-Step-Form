import React from "react";
import image from '../resources/images/logo.png';

function LogoWrapper(props) {
    return (
        <div className="container">
            <img
                src={image}
                alt="logo"
                style={{
                    width : "180px",
                    height : "80px",
                    margin:"auto",
                    display:"block"
                }}
            />
        </div>
    )
}

export default LogoWrapper;