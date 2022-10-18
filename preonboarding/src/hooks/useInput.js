import { useState } from "react";
const useInput = (initial) => {
  const [value, setValue] = useState(initial);
  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  return [value, inputHandler, setValue];
};

export default useInput;
