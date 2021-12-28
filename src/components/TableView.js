import React from "react";

const TableView = ({ headers = [], keys = [], data = [] }) => {
  return (
    <table
      style={{
        gridTemplateColumns: `repeat(${headers.length}, max-content)`,
      }}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={header + index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {keys.map((key, intIndex) => (
              <td key={index + intIndex}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
