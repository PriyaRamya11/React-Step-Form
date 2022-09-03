import React, { useEffect, useState } from "react";

function Workspace(props) {

    let [workspace, setWorkspace] = useState(localStorage.getItem('workspace'));
    let [workspaceURL, setWorkSpaceURL] = useState(localStorage.getItem('workspace_url'));

    const inputChangeHandler = (event) => {
        if(event.target.name === 'workspace') {
            localStorage.setItem("workspace", event.target.value);
            setWorkspace(localStorage.getItem("workspace"));
        }

        if(event.target.name === "workspace_url") {
            localStorage.setItem("workspace_url", event.target.value);
            setWorkSpaceURL(localStorage.getItem("workspace_url"));
        }
    }

    useEffect(() => {

    }, [workspace, workspaceURL])

    return (
        <div style={{marginTop : "30px"}}>
            <center>
                <h2>Let's set up a home for all your work</h2>
                <p style={{color:"grey"}}>You can always create another workspace later</p>
            </center>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9" style={{margin: "auto"}}>
                        <form>
                            <div className="form-group">
                                <label className="form-label" style={{fontSize:"14px"}}>Workspace Name</label>
                                <input type="text" className="form-control" placeholder="Steve Jobs" style={{padding: "15px", borderColor : "rgba(218,218,218,0.4)", fontSize: "14px"}} name="workspace" value={workspace} onChange={(event) => inputChangeHandler(event)} />
                            </div>
                            <div className="form-group" style={{marginTop:"20px"}}>
                                <label className="form-label" style={{fontSize:"14px"}}>Workspace URL(optional)</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon3" style={{color:"grey"}}>www.eden.com/</span>
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" style={{padding: "15px", borderColor : "rgba(218,218,218,0.4)", fontSize: "14px"}} placeholder={"Example"} name="workspace_url" value={workspaceURL} onChange={(event) => inputChangeHandler(event)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workspace;