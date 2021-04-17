import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  console.log(value, 'generic input classic');

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<{ value: any}>) => {
        setValue(event.target.value);
      }
    }
  }
}

export const useCheck = (initialValue: Boolean) => {
  const [value, setValue] = useState(initialValue);

  console.log(value, 'generic input check');

  return {
    value,
    setValue,
    reset: () => setValue(false),
    bind: {
      value,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
      }
    }
  }
}



