import { useEffect, useState } from "react";

const useCounter = (type) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (type === 1) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (type === -1) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [type]);

  return counter;
};

export default useCounter;
