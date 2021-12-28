import React from "react";

export const TableView = ({ headers = [], keys = [], data = [], rowKey }) => {
  console.log(data);

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
        {data.map((row) => (
          <tr key={row[rowKey]}>
            {keys.map((key, index) => (
              <td key={row[rowKey] + `${index}`}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
