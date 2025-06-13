import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  console.log("In use Local Storage hook")
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );

  useEffect(() => {
    console.log("Saving to localStorage:", storageKey, value);
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
