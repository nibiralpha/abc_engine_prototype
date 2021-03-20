import React, { useState } from 'react';

const ref = React.createRef();

function List(props) {

  return (
    <div>
      <div ref={ref}>
        <h2>Chart</h2>
        <h5>Note: KP = X, X = Y, Y = Z</h5>
        <table>

          <thead>
            <tr>
              <th>KP</th>
              <th>X</th>
              <th>Y</th>
            </tr>
          </thead>

          <tbody>
            {props.lists.map((list, index) => (
              <tr>
                <td>{list.data[1]}</td>
                <td>{list.data[2]}</td>
                <td>{list.data[3]}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}

export default List;
