import React from "react";

import { useForm } from "../customHooks/FormHooks";
import { Button } from "./Button/Button";
import classes from "./SQLEditor.module.css";

const INITIAL_VALUES = { query: "" };

export const SQLEditor = ({ onQueryExecute }) => {
  const {
    values: { query },
    onChange,
  } = useForm(INITIAL_VALUES);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onQueryExecute(query);
      }}
    >
      <textarea
        className={classes.text_area}
        name="query"
        onChange={onChange}
        value={query}
      ></textarea>

      <Button type="submit" content="Execute" style={{ width: "100%" }} />
    </form>
  );
};
