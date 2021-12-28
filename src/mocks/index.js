import { customers, employees } from "./data";

const sqlDB = {
  "select * from employees": employees,
  "select * from customers": customers,
};

export const executeQuery = (query) => {
  return sqlDB[query] || [];
};
