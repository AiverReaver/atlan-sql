import { useCallback, useState } from "react";

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const onChange = useCallback((e) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }, []);

  return { values, onChange };
};
