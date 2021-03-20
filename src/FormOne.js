import React, { useState } from 'react';

function FormOne(props) {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");

  function sendData() {
    props.next({
      projectName: projectName,
      projectDesc: projectDesc,
      client: client,
      contractor: contractor
    });
  }

  function validateField() {
    
    if (projectName == "" || projectDesc == "" || client == "" || contractor == "") {
      return true;
    }

    return false;
  }

  return (
    <div>
      <h2>First step</h2>

      <label htmlFor="projectName">Project Name</label>
      <input type="text" value={projectName} onChange={(e) => { setProjectName(e.target.value) }}></input>
      <label htmlFor="projectDesc">Project Description</label>
      <input type="text" value={projectDesc} onChange={(e) => { setProjectDesc(e.target.value) }}></input>
      <label htmlFor="client">Client</label>
      <input type="text" value={client} onChange={(e) => { setClient(e.target.value) }}></input>
      <label htmlFor="contractor">Contractor</label>
      <input type="text" value={contractor} onChange={(e) => { setContractor(e.target.value) }}></input>

      <button disabled={validateField()} type="button" id="prevBtn" onClick={() => { sendData() }}>Next</button>
    </div>
  );
}

export default FormOne;
