import { useCallback, useState } from "react";
import "./App.css";
import { SQLEditor } from "./components/SQLEditor";
import { TableView } from "./components/TableView";
import "./mocks";
import { executeQuery } from "./mocks";

function App() {
  const [data, setData] = useState([]);

  const onQueryExecute = useCallback((query) => {
    const res = executeQuery(query);

    setData(res);
  }, []);

  return (
    <div className="App">
      <h2 style={{ textAlign: "center", color: "#0b80da" }}>SQL Editor</h2>
      <SQLEditor onQueryExecute={onQueryExecute} />
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#f6653c" }}>Results</h3>
        <TableView
          headers={Object.keys(data[0] || {})}
          keys={Object.keys(data[0] || {})}
          data={data}
          rowKey="employeeID"
        />
      </div>
    </div>
  );
}

export default App;
