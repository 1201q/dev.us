import { ChangeEvent, useState } from "react";

const useAuthInput = () => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onInputFocus = (focus: boolean) => {
    setFocus(focus);
  };
  return { value, focus, onChange, onInputFocus };
};

export default useAuthInput;
