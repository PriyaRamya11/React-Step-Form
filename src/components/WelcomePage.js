import React, { useEffect, useState } from "react";

function WelcomePage(props) {

    let [fname, setFname] = useState(localStorage.getItem("fname"));
    let [dname, setDname] = useState(localStorage.getItem("dname"));

    const onInputChange = (event) => {
        if(event.target.name === 'fname') {
            localStorage.setItem("fname", event.target.value);
            setFname(localStorage.getItem("fname"));
        }

        if(event.target.name === "dname") {
            localStorage.setItem("dname", event.target.value);
            setDname(localStorage.getItem("dname"));
        }
    }

    useEffect(() => {
        fname = localStorage.getItem("fname");
        dname = localStorage.getItem("dname");
    }, [fname, dname])

    return (
        <div className="container" style={{marginTop : "30px"}}>
            <center><h2 style={{fontWeight : "bold"}}>Welcome! First things first... </h2>
            <p style={{color:"grey"}}>You can always change them later</p></center>
            
            <div className="row">
                <div className="col-sm-9" style={{margin:"auto"}}>
                    <form style={{marginTop:"50px"}}>
                        <div className="form-group">
                            <label className="form-label" style={{fontSize:"14px"}}>Full Name</label>
                            <input type="text" className="form-control" placeholder="Steve Jobs" style={{padding: "15px", borderColor : "rgba(218,218,218,0.4)", fontSize: "14px"}} onChange={(event) => onInputChange(event)} name="fname" value={fname} />
                        </div>
                        <div className="form-group" style={{marginTop:"20px"}}>
                            <label className="form-label" style={{fontSize:"14px"}}>Display Name</label>
                            <input type="text" className="form-control" placeholder="Steve" style={{padding: "15px", borderColor : "rgba(218,218,218,0.4)", fontSize: "14px"}} onChange={(event) => onInputChange(event)} name="dname" value={dname} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;