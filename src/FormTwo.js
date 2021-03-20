import React, { useState } from 'react';
import HandleFile from './HandleFile';
import List from "./List";

function FormTwo(props) {

  const [axis, setAxis] = useState({ Xmin: "", Xmax: "", Ymin: "", Ymax: "", Zmin: "", Zmax: "" });
  const [list, setList] = useState([]);

  function validate() {
    if (axis.Xmin == "" || axis.Xmax == "" || axis.Xmin == "" || axis.Ymax == "" || axis.Zmin == "" || axis.Zmax == "") {
      return true
    }

    return false;
  }

  return (
    <div>
      <h2>Second step</h2>

      <label htmlFor="projectName">Project Name</label>
      <input type="text" defaultValue={props.data.projectName} disabled></input>
      <label htmlFor="projectDesc">Project Description</label>
      <input type="text" defaultValue={props.data.projectDesc} disabled></input>
      <label htmlFor="client">Client</label>
      <input type="text" defaultValue={props.data.client} disabled></input>
      <label htmlFor="contractor">Contractor</label>
      <input type="text" defaultValue={props.data.contractor} disabled></input>


      <div className="row gutter-10">
        <div>
          <label htmlFor="contractor">X Min</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Xmin: e.target.value })} value={axis.Xmin}></input>
        </div>

        <div>
          <label htmlFor="contractor">X Max</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Xmax: e.target.value })} value={axis.Xmax}></input>
        </div>
      </div>

      <div className="row gutter-10">
        <div>
          <label htmlFor="contractor">Y Min</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Ymin: e.target.value })} value={axis.Ymin}></input>
        </div>

        <div>
          <label htmlFor="contractor">Y Max</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Ymax: e.target.value })} value={axis.Ymax}></input>
        </div>
      </div>

      <div className="row gutter-10">
        <div>
          <label htmlFor="contractor">Z Min</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Zmin: e.target.value })} value={axis.Zmin}></input>
        </div>

        <div>
          <label htmlFor="contractor">Z Max</label>
          <input type="text" onChange={(e) => setAxis({ ...axis, Zmax: e.target.value })} value={axis.Zmax}></input>
        </div>
      </div>


      <HandleFile setList={(data) => { setList(data) }} setAxis={(data) => { setAxis(data) }}></HandleFile>
      <br></br>

      <button style={{ marginRight: '10px' }} type="button" onClick={() => { props.prev() }}>Previous</button>
      <button disabled={validate()} type="button" onClick={() => { props.next(axis) }}>Next</button>


      {list.length > 0 && (
        <List lists={list} />
      )}

    </div>
  );
}

export default FormTwo;
