import React from "react";

function SetupButton(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9" style={{margin:"auto"}}>
                    <div className="form-group">
                        <br/>
                        <button style={{backgroundColor:"#664DE4", color:"white", fontSize:"14px", padding:"15px"}} className="btn btn-primary form-control" onClick={props.onClick}>
                            {props.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetupButton;