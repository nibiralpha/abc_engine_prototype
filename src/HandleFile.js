import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';

const buttonRef = React.createRef();

export default class HandleFile extends Component {

  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data) => {
    let [Xmin, Xmax, Ymin, Ymax, Zmin, Zmax] = this.findMinMax(data);
    this.props.setAxis({ Xmin: Xmin, Ymin: Ymin, Zmin: Zmin, Xmax: Xmax, Ymax: Ymax, Zmax: Zmax });
    this.props.setList(data);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log(data);
  };

  handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  findMinMax(rows) {
    //ignore the first row row[0] which is KP, X, Y, Z
    let col = rows[1].data;

    let dd = [];

    let KPCOL = col[0];
    let XCOL = col[1];
    let YCOL = col[2];
    let ZCOL = col[3];

    // let KPmin = parseFloat(KPCOL);
    // let KPmax = parseFloat(KPCOL);

    let Xmin = parseFloat(XCOL);
    let Xmax = parseFloat(XCOL);

    let Ymin = parseFloat(YCOL);
    let Ymax = parseFloat(YCOL);

    let Zmin = parseFloat(ZCOL);
    let Zmax = parseFloat(ZCOL);

    for (let i = 1; i < rows.length; i++) { //start from row 1 and ignore 0 index which is KP, X, Y, Z
      let currentEntry = rows[i].data;
      let currentKP = parseFloat(currentEntry[0]); //KP COl
      let currentX = parseFloat(currentEntry[1]); //X COL
      let currentY = parseFloat(currentEntry[2]); //Y COL
      let currentZ = parseFloat(currentEntry[3]); // Z COL

      if (currentEntry[0] != "") { //ignore if row is empty

        // KPmin = currentKP < KPmin ? currentKP : KPmin;
        // KPmax = currentKP > KPmax ? currentKP : KPmax;

        Xmin = currentX < Xmin ? currentX : Xmin;
        Xmax = currentX > Xmax ? currentX : Xmax;

        Ymin = currentY < Ymin ? currentY : Ymin;
        Ymax = currentY > Ymax ? currentY : Ymax;

        Zmin = currentZ < Zmin ? currentZ : Zmin;
        Zmax = currentZ > Zmax ? currentZ : Zmax;
      }
    }

    return [Xmin, Xmax, Ymin, Ymax, Zmin, Zmax];
  }

  render() {
    return (
      <>

        <CSVReader
          ref={buttonRef}
          onFileLoad={this.handleOnFileLoad}
          onError={this.handleOnError}
          noClick
          noDrag
          onRemoveFile={this.handleOnRemoveFile}
        >
          {({ file }) => (
            <aside>
              <button
                type="button"
                onClick={this.handleOpenDialog}
                style={{
                  width: '100px',
                  paddingLeft: 0,
                  paddingRight: 0,
                  marginBottom: '10px'
                }}
              >
                Browse file
              </button>

              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ccc',
                    height: 40,
                    lineHeight: 2.5,
                    width: '60%',
                    marginRight: '10px'
                  }}
                >
                  {file && file.name}
                </div>
                <button onClick={this.handleRemoveFile} >
                  Remove
                </button>
              </div>
              
              <br />
            </aside>
          )}
        </CSVReader>
      </>
    );
  }
}