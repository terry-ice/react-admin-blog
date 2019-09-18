import { useState } from "react";
const useFrom = (initialState: any) => {
  const [values, setValues] = useState(initialState);
  return [
    values,
    (e: { target: HTMLInputElement }) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
export default useFrom;
