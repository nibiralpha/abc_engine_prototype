import React, { useState } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

function Results(props) {

  return (
    <div>
      <div ref={ref}>
        <h2>Results</h2>

        <table>
          <thead>
            <tr>
              <th>Fields</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Name</td>
              <td>{props.basicInfo.projectName}</td>

            </tr>
            <tr>
              <td>Project Description</td>
              <td>{props.basicInfo.projectDesc}</td>
            </tr>
            <tr>
              <td>Client</td>
              <td>{props.basicInfo.client}</td>
            </tr>
            <tr>
              <td>Contractor</td>
              <td>{props.basicInfo.contractor}</td>
            </tr>

            <tr>
              <td>X Min</td>
              <td>{props.axisInfo.Xmin}</td>
            </tr>
            <tr>
              <td>X Max</td>
              <td>{props.axisInfo.Xmax}</td>
            </tr>

            <tr>
              <td>Y Min</td>
              <td>{props.axisInfo.Ymin}</td>
            </tr>
            <tr>
              <td>Y Max</td>
              <td>{props.axisInfo.Ymax}</td>
            </tr>

            <tr>
              <td>Z Min</td>
              <td>{props.axisInfo.Zmin}</td>
            </tr>
            <tr>
              <td>Z Max</td>
              <td>{props.axisInfo.Zmax}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br></br>

      <button style={{ marginRight: '10px' }} type="button" onClick={() => { props.prev() }}>Previous</button>
      <Pdf targetRef={ref} filename="data.pdf" x={40} y={20}>
        {({ toPdf }) => <button onClick={toPdf}>Download as Pdf</button>}
      </Pdf>

    </div>
  );
}

export default Results;
