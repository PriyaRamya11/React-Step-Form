import React, { useState } from "react";

function SetupExperience(props) {

    let [index, setIndex] = useState(0);

    const defaultStyle = {
        borderWidth:"2px",
        cursor :"pointer"
    }

    const selectedStyle = {
        borderColor: "#664DE4",
        borderWidth:"2px",
        cursor :"pointer"
    }

    return (
        <div style={{marginTop : "30px"}}>
            <center>
                <h2>How are you planning to use Eden?</h2>
                <p style={{color:"grey"}}>We will streamline your experience accordingly.</p>
            </center>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card" style={index === 0 ? selectedStyle : defaultStyle} onClick={() => setIndex(0)}>
                            <div className="card-body">
                                <p><b>For Myself</b></p>
                                <p style={{color:"grey"}}>Write better. Think More clearly. Stay organized</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={index === 1 ? selectedStyle : defaultStyle} onClick={() => setIndex(oldIndex => 1)}>
                            <div className="card-body">
                                <p><b>With my team</b></p>
                                <p style={{color:"grey"}}>Wikis, docs, tasks and projects, get all in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetupExperience;