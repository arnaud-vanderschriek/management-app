import { useState } from "react";

export const useArray = (initialValue: []) => {
  const [theArray, setTheArray] = useState(initialValue);

  console.log(theArray, 'generic array');

  return {
    theArray,
    setTheArray,
    reset: () => setTheArray([]),
    bind: {
      theArray,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        // setTheArray(prevArray => [...prevArray, newValue])
      }
    }
  }
}