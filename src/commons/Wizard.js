import React from "react";

function Wizard(props) {

    const defaultBackground = {
        backgroundColor : "grey",
        borderColor:"grey",
        color : "white"
    }

    const selectedStyle = {
        backgroundColor : "#664DE4",
        borderColor:"grey",
        color : "white"
    }

    return (
        <div className="wizard" style={{marginTop: "30px", marginBottom: "30px"}}>
            <div className="wizard__step">
                <div className="wizard__dot">
                    
                    <div className="wizard__connector"></div>
                    <div className="wizard__number" style={parseInt(props.step) >= 0 ? selectedStyle : defaultBackground} onClick={() => props.changeStep(0)}>
                        1
                    </div>
                    <div className="wizard__connector__right"></div>
                </div>
            </div>

            <div className="wizard__step">
                <div className="wizard__dot">
                    
                    <div className="wizard__connector__left"></div>
                    <div className="wizard__number" style={parseInt(props.step) >= 1 ? selectedStyle : defaultBackground} onClick={() => props.changeStep(1)}>
                        2
                    </div>

                    <div className="wizard__connector__right"></div>
                </div>
            </div>

            <div className="wizard__step">
                <div className="wizard__dot">
                    
                    <div className="wizard__connector__left"></div>
                    <div className="wizard__number" style={parseInt(props.step) >= 2 ? selectedStyle : defaultBackground} onClick={() => props.changeStep(2)}>
                        3
                    </div>

                    <div className="wizard__connector__right"></div>
                </div>
            </div>

            <div className="wizard__step">
                <div className="wizard__dot">
                    
                    <div className="wizard__connector__left"></div>
                    <div className="wizard__number" style={parseInt(props.step) >= 3 ? selectedStyle : defaultBackground}>
                        4
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wizard;