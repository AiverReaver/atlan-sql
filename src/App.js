import { useCallback, useState, lazy, Suspense } from "react";
import "./App.css";
import { SQLEditor } from "./components/SQLEditor";

const TableView = lazy(() => import("./components/TableView"));

function App() {
  const [data, setData] = useState([]);

  const onQueryExecute = useCallback(async (query) => {
    try {
      const { executeQuery } = await import("./mocks");
      const res = executeQuery(query);
      setData(res);
    } catch (err) {
      console.log("Failed to fetch data");
    }
  }, []);

  let tableViewElement;

  if (data.length) {
    tableViewElement = (
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#f6653c" }}>Results</h3>
        <Suspense fallback={<div>Loading</div>}>
          <TableView
            headers={Object.keys(data[0] || {})}
            keys={Object.keys(data[0] || {})}
            data={data}
          />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="App">
      <h2 className="header">SQL Editor</h2>
      <SQLEditor onQueryExecute={onQueryExecute} />
      {tableViewElement}
    </div>
  );
}

export default App;
